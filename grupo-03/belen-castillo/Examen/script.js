// 1) Banner: los ojos siguen al cursor (index.html)
const ojos = document.querySelector('.ojos');
if (ojos) {
  const banner = ojos.parentElement;
  const mover = (x, y) => {
    const r = banner.getBoundingClientRect();
    const k = r.width / 1724;
    const cx = r.left + 910 * k, cy = r.top + 950 * k; // posición aprox. de los ojos
    const dx = Math.max(-1, Math.min(1, (x - cx) / 400));
    const dy = Math.max(-1, Math.min(1, (y - cy) / 400));
    ojos.style.transform = `translate(${dx * 22 * k}px, ${dy * 10 * k}px)`;
  };
  document.addEventListener('mousemove', e => mover(e.clientX, e.clientY));
  document.addEventListener('touchmove', e => mover(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
}

// 2) Botón con animación de gota
document.querySelectorAll('.btn-gota').forEach(b => b.addEventListener('click', e => {
  e.preventDefault();
  b.classList.remove('gota'); void b.offsetWidth; b.classList.add('gota');
  setTimeout(() => (location.href = b.href), 500);
}));

// 3) Galería de proyectos (proyectos.html)
const galeria = document.getElementById('galeria');
if (galeria) {
  const NOMBRES = { diseno: 'Diseño', ilustracion: 'Ilustración', todos: 'Todos' };
  const TITULOS = { diseno: 'PROYECTOS DE DISEÑO', ilustracion: 'PROYECTOS DE ILUSTRACIÓN', todos: 'TODOS LOS PROYECTOS' };
  const ORDEN = { diseno: ['todos', 'diseno', 'ilustracion'], ilustracion: ['diseno', 'ilustracion', 'todos'], todos: ['ilustracion', 'todos', 'diseno'] };
  const SUBS = {
    diseno: ['Materiales y fabricación', 'Dibujo geométrico', 'Prototipado', 'Fabricación digital', 'Códigos'],
    ilustracion: ['Digital', 'Tradicional']
  };
  SUBS.todos = [...SUBS.diseno, ...SUBS.ilustracion];
  let grupo = ['diseno', 'ilustracion', 'todos'].includes(location.hash.slice(1)) ? location.hash.slice(1) : 'diseno';
  let sub = null;
  const $ = id => document.getElementById(id);

  function pintarCirculos() {
    $('circulos').innerHTML = '';
    ORDEN[grupo].forEach(g => {
      const b = document.createElement('button');
      b.className = 'circulo' + (g === grupo ? ' activo' : '');
      b.textContent = NOMBRES[g].toUpperCase();
      b.onclick = () => { grupo = g; sub = null; location.hash = g; render(); };
      $('circulos').append(b);
    });
  }
  function pintarDropdown() {
    $('dd-label').textContent = sub || 'Mostrar todos';
    const ul = $('dd-lista'); ul.innerHTML = '';
    [null, ...SUBS[grupo]].forEach(s => {
      const li = document.createElement('li'), b = document.createElement('button');
      b.textContent = s || 'Mostrar todos'; b.setAttribute('aria-selected', s === sub);
      b.onclick = () => { sub = s; $('dd').classList.remove('abierto'); render(); };
      li.append(b); ul.append(li);
    });
  }
  $('dd-btn').onclick = () => $('dd').classList.toggle('abierto');
  document.addEventListener('click', e => { if (!$('dd').contains(e.target)) $('dd').classList.remove('abierto'); });

  // Crea una tarjeta con todas las imágenes/videos apilados
  function tarjeta(p) {
    const c = document.createElement('article'); c.className = 'card';
    const m = document.createElement('div'); m.className = 'media';
    // Limitación de proporción
    m.style.aspectRatio = Math.min(Math.max(p.items[0].w / p.items[0].h, 0.75), 2.2);
    p.items.forEach((it, i) => {
      let el;
      if (it.t === 'v') { el = document.createElement('video'); el.muted = true; el.loop = true; el.playsInline = true; el.preload = 'none'; el.poster = it.poster; el.src = it.src; }
      else { el = document.createElement('img'); el.src = it.src; el.loading = 'lazy'; el.alt = i ? '' : p.titulo; }
      if (i === 0) el.classList.add('on');
      m.append(el);
    });
    c.append(m);
    c.insertAdjacentHTML('beforeend', `<h3>${p.titulo}</h3><p>${p.desc}</p>`);
    
    // si es video se reproduce; si hay varias imágenes pasan como slideshow
    let idx = 0, timer;
    const els = [...m.children];
    const mostrar = i => { els.forEach(e => { e.classList.remove('on'); if (e.pause) e.pause(); }); els[i].classList.add('on'); if (els[i].play) { els[i].currentTime = 0; els[i].play().catch(() => {}); } };
    
    const avanzar = () => {
      timer = setTimeout(() => {
        idx = (idx + 1) % els.length;
        mostrar(idx);
        avanzar();
      }, els[idx].tagName === 'VIDEO' ? 2500 : 900);
    };

    c.addEventListener('mouseenter', () => {
      mostrar(idx);
      if (els.length > 1) avanzar();
    });
    c.addEventListener('mouseleave', () => { clearTimeout(timer); idx = 0; els.forEach(e => e.pause && e.pause()); mostrar(0); els[0].pause && els[0].pause(); });
    m.addEventListener('click', () => { if (els.length > 1) { idx = (idx + 1) % els.length; mostrar(idx); } else { mostrar(0); } });
    
    return c;
  }

  // Reparte las imágenes en columnas 
  function render() {
    pintarCirculos(); pintarDropdown();
    $('barra-titulo').textContent = TITULOS[grupo];
    let lista = PROYECTOS.filter(p => (grupo === 'todos' || p.grupo === grupo) && (!sub || p.subs.includes(sub)));
    if (grupo === 'todos') { // mezcla diseño e ilustración
      const a = lista.filter(p => p.grupo === 'diseno'), b = lista.filter(p => p.grupo !== 'diseno'); lista = [];
      while (a.length || b.length) { if (a.length) lista.push(a.shift()); if (b.length) lista.push(b.shift()); }
    }
    const n = innerWidth <= 700 ? 2 : 2, cols = [], alto = [];
    galeria.innerHTML = '';
    for (let i = 0; i < n; i++) { const c = document.createElement('div'); c.className = 'col'; galeria.append(c); cols.push(c); alto.push(0); }
    if (!lista.length) galeria.innerHTML = '<p class="vacio">Aún no hay proyectos en esta categoría.</p>';
    lista.forEach(p => { const i = alto.indexOf(Math.min(...alto)); cols[i].append(tarjeta(p)); alto[i] += 1 / Math.min(Math.max(p.items[0].w / p.items[0].h, 0.75), 2.2) + 0.25; });
  }
  render();
  window.addEventListener('hashchange', () => { const h = location.hash.slice(1); if (NOMBRES[h] && h !== grupo) { grupo = h; sub = null; render(); } });
}

// 4) Botón "Volver arriba"
document.querySelectorAll('.arriba').forEach(b => b.onclick = () => scrollTo({ top: 0, behavior: 'smooth' }));

// 5) Carrusel de videos (secreto.html): giro en bucle con flechas, el central se reproduce
const pista = document.querySelector('.pista');
if (pista) {
  let sonido = false;
  const btn = document.getElementById('sonido');
  const pintarBoton = () => { btn.textContent = sonido ? '🔊 Sonido activado' : '🔇 Activar sonido'; btn.setAttribute('aria-pressed', sonido); };
  const marcar = () => [...pista.children].forEach((v, i) => {
    const centro = i === 2; v.classList.toggle('centro', centro);
    if (centro) {                       // el video principal es el único que suena
      v.muted = !sonido;
      v.play().catch(() => { v.muted = true; v.play().catch(() => {}); });
    } else { v.muted = true; v.pause(); }
  });
  document.getElementById('sig').onclick = () => { pista.append(pista.firstElementChild); marcar(); };
  document.getElementById('ant').onclick = () => { pista.prepend(pista.lastElementChild); marcar(); };
  btn.onclick = () => { sonido = !sonido; pintarBoton(); marcar(); };
  // Primer clic o toque en cualquier parte: se activa el sonido del video principal
  document.addEventListener('pointerdown', e => { if (!sonido && e.target !== btn) { sonido = true; pintarBoton(); marcar(); } }, { once: true });
  marcar();
}

// 6) Revelación de texto al hacer scroll (index.html)
const frase = document.querySelector('.frase');
if (frase) {
  const palabras = frase.textContent.trim().split(/\s+/).map(p => {
    const s = document.createElement('span');
    s.textContent = p + ' ';
    return s;
  });
  frase.replaceChildren(...palabras);

  const revelar = () => {
    const r = frase.getBoundingClientRect();
    const progreso = Math.max(0, Math.min(1, (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35)));
    const activas = Math.round(progreso * palabras.length);
    palabras.forEach((s, i) => s.classList.toggle('leido', i < activas));
  };
  addEventListener('scroll', revelar, { passive: true });
  addEventListener('resize', revelar);
  revelar();
}

// 7) Pines interactivos en el mapa de Chile (sobre-mi.html)
document.querySelectorAll('.pin-ciudad').forEach(btn => btn.addEventListener('click', () => {
  const activo = btn.classList.toggle('activo');
  btn.setAttribute('aria-pressed', activo);
}));
