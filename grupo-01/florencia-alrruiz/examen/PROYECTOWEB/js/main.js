/* =========================================================================
   Portafolio · Florencia Alrruiz Flores
   1. Menú
   2. Conóceme (se despliega el Frame 8)
   3. Carrusel guiado por scroll + filtros por categoría
   4. Cuadrícula animada (cuadrados rosados y fotos de la galería)
   5. Video de Florialé
   6. Visor de imágenes en las páginas de proyecto
   7. Estela de pétalos del cursor
   ========================================================================= */

const $ = (selector, base = document) => base.querySelector(selector);
const $$ = (selector, base = document) => [...base.querySelectorAll(selector)];
const pocoMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const esMobile = () => window.matchMedia('(max-width: 700px)').matches;
const azar = (lista) => lista[Math.floor(Math.random() * lista.length)];
const esperar = (ms) => new Promise((ok) => setTimeout(ok, ms));


/* ---------- 1. MENÚ ---------- */
const botonMenu = $('.boton-menu');
const menu = $('#menu');

function abrirMenu(abrir) {
  botonMenu.setAttribute('aria-expanded', String(abrir));
  botonMenu.setAttribute('aria-label', abrir ? 'Cerrar menú' : 'Abrir menú');
  menu.hidden = !abrir;
}

botonMenu.addEventListener('click', () => {
  abrirMenu(botonMenu.getAttribute('aria-expanded') !== 'true');
});
menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) abrirMenu(false);
});
document.addEventListener('click', (e) => {
  if (!menu.hidden && !e.target.closest('.menu, .boton-menu')) abrirMenu(false);
});


/* ---------- 2. CONÓCEME ---------- */
const seccionConoceme = $('.seccion-conoceme');
const pestana = $('.pestana-conoceme');

function conoceme(abrir) {
  if (!seccionConoceme || esMobile()) return;
  seccionConoceme.classList.toggle('abierto', abrir);
  pestana.setAttribute('aria-expanded', String(abrir));
}

if (seccionConoceme) {
  pestana.addEventListener('click', () => conoceme(true));
  $('.panel-conoceme__titulo').addEventListener('click', () => conoceme(false));
  // Se cierra al hacer clic fuera de la tarjeta
  document.addEventListener('click', (e) => {
    if (seccionConoceme.classList.contains('abierto') && !e.target.closest('.panel-conoceme, .pestana-conoceme, [data-abre-conoceme]')) {
      conoceme(false);
    }
  });
  // El enlace "Conóceme" del menú abre la tarjeta
  $$('[data-abre-conoceme]').forEach((enlace) => {
    enlace.addEventListener('click', (e) => {
      if (esMobile()) return;
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      conoceme(true);
    });
  });
  if (location.hash === '#conoceme') conoceme(true);
}

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  abrirMenu(false);
  conoceme(false);
});


/* ---------- 3. CARRUSEL GUIADO POR SCROLL + FILTROS ----------
   El escenario queda fijo mientras se recorre la sección. Con el scroll, la primera
   foto de la columna izquierda crece hasta el marco de esquinas rosadas, las demás
   suben un lugar y aparece la siguiente. Así se recorren todas las fotos de cada proyecto. */
const carrusel = $('.carrusel');
let galeria = null;   // se define en la parte 4

if (carrusel && typeof DATOS !== 'undefined') {
  const seccion = $('.seccion-proyectos');
  const escenario = $('.escenario');
  const principal = $('.carrusel__principal');
  const imgPrincipal = $('img', principal);
  const texto = $('.carrusel__texto');
  const capa = $('.carrusel__flotantes');
  const slots = () => $$('.carrusel__miniaturas li').filter((li) => getComputedStyle(li).display !== 'none');
  let pasos = [];            // una entrada por foto
  let proyectoActual = null;
  const flotantes = [];
  let rects = null;

  function armarPasos(lista) {
    pasos = [];
    lista.forEach((p) => p.imagenes.forEach((im, n) => {
      pasos.push({ p, src: im.src, mini: im.mini, alt: im.alt, n: n + 1, total: p.imagenes.length });
    }));
    pasos.forEach((paso) => { new Image().src = paso.src; });   // precarga
  }

  // Posición de cada miniatura y de la foto principal, relativa al carrusel
  function medir() {
    const base = carrusel.getBoundingClientRect();
    const r = (el) => { const b = el.getBoundingClientRect(); return { x: b.left - base.left, y: b.top - base.top, w: b.width, h: b.height }; };
    rects = { slots: slots().map(r), principal: r(imgPrincipal) };
    const n = rects.slots.length + 1;
    while (flotantes.length < n) {
      const img = document.createElement('img');
      img.className = 'flotante';
      img.alt = '';
      capa.appendChild(img);
      flotantes.push(img);
    }
    flotantes.forEach((f, k) => { f.style.display = k < n ? '' : 'none'; });
  }

  const mezclar = (a, b, t) => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, w: a.w + (b.w - a.w) * t, h: a.h + (b.h - a.h) * t });
  const suave = (t) => t * t * (3 - 2 * t);
  const poner = (el, r) => { el.style.left = r.x + 'px'; el.style.top = r.y + 'px'; el.style.width = r.w + 'px'; el.style.height = r.h + 'px'; };
  const fuente = (el, src) => { if (el.getAttribute('src') !== src) el.src = src; };

  // 0 al entrar a la sección, 1 al terminar su recorrido
  function progreso() {
    const total = seccion.offsetHeight - escenario.offsetHeight;
    const arriba = parseFloat(getComputedStyle(escenario).top);
    return Math.min(1, Math.max(0, (arriba - seccion.getBoundingClientRect().top) / total));
  }

  function mostrarTexto(paso) {
    $('.carrusel__contador').textContent = 'FOTO ' + paso.n + ' DE ' + paso.total;
    const p = paso.p;
    if (p === proyectoActual) return;
    proyectoActual = p;
    const cambiar = () => {
      principal.href = p.pagina;
      principal.classList.toggle('contener', p.contener);
      $('.carrusel__titulo a').textContent = p.titulo.toUpperCase();
      $('.carrusel__titulo a').href = p.pagina;
      $('.carrusel__resumen').textContent = p.resumen;
      $('.ver-proyecto').href = p.pagina;
    };
    if (pocoMovimiento) { cambiar(); return; }
    texto.classList.add('cambiando');
    setTimeout(() => { cambiar(); texto.classList.remove('cambiando'); }, 250);
  }

  function dibujar() {
    if (!rects) medir();
    const N = pasos.length;
    const f = progreso() * (N - 1);
    const i = Math.min(N - 1, Math.floor(f));
    const t = i >= N - 1 ? 0 : f - i;
    // cada foto descansa un momento y luego crece hasta el marco
    const e = pocoMovimiento ? (t > 0.5 ? 1 : 0) : suave(Math.min(1, Math.max(0, (t - 0.3) / 0.7)));
    const actual = pasos[i];
    fuente(imgPrincipal, actual.src);
    imgPrincipal.alt = actual.alt;
    mostrarTexto(e > 0.5 && pasos[i + 1] ? pasos[i + 1] : actual);

    const s = rects.slots;
    flotantes.forEach((el, k) => {
      const paso = pasos[i + 1 + k];
      if (!paso || k > s.length) { el.style.opacity = 0; return; }
      el.style.opacity = 1;
      el.classList.toggle('contener', paso.p.contener);
      if (k === 0) {                       // viaja hasta el marco rosado
        fuente(el, e > 0.05 ? paso.src : paso.mini);
        poner(el, mezclar(s[0], rects.principal, e));
      } else if (k < s.length) {           // sube un lugar
        fuente(el, paso.mini);
        poner(el, mezclar(s[k], s[k - 1], e));
      } else {                             // aparece al final de la columna
        fuente(el, paso.mini);
        poner(el, s[k - 1]);
        el.style.opacity = e;
      }
    });
    slots().forEach((li, k) => {
      const paso = pasos[i + 1 + k];
      li.classList.toggle('vacio', !paso);
      const b = $('.miniatura', li);
      b.dataset.paso = i + 1 + k;
      if (paso) b.setAttribute('aria-label', 'Ver ' + paso.p.titulo + ', foto ' + paso.n);
    });
  }

  // Lleva la página al punto del recorrido donde se ve esa foto
  function irA(indice) {
    const N = pasos.length;
    const total = seccion.offsetHeight - escenario.offsetHeight;
    const inicio = seccion.getBoundingClientRect().top + window.scrollY - parseFloat(getComputedStyle(escenario).top);
    const destino = inicio + total * (Math.min(N - 1, Math.max(0, indice)) / Math.max(1, N - 1)) + 2;
    window.scrollTo({ top: destino, behavior: pocoMovimiento ? 'auto' : 'smooth' });
  }

  $$('.miniatura').forEach((b) => b.addEventListener('click', () => irA(parseInt(b.dataset.paso, 10))));
  $('.carrusel__siguiente').addEventListener('click', () => irA(Math.floor(progreso() * (pasos.length - 1)) + 1));

  let pedido = false;
  const programar = () => {
    if (pedido) return;
    pedido = true;
    requestAnimationFrame(() => { pedido = false; dibujar(); });
  };
  window.addEventListener('scroll', programar, { passive: true });
  window.addEventListener('resize', () => { rects = null; programar(); });

  // Filtros por categoría
  const filtros = $$('.filtro');
  function filtrar(categoria) {
    filtros.forEach((f) => f.setAttribute('aria-pressed', String(f.dataset.cat === categoria)));
    armarPasos(categoria ? DATOS.proyectos.filter((p) => p.cat === categoria) : DATOS.proyectos);
    proyectoActual = null;
    irA(0);
    dibujar();
    if (galeria) galeria.filtrar(categoria);
  }
  filtros.forEach((boton) => boton.addEventListener('click', () => {
    const yaActivo = boton.getAttribute('aria-pressed') === 'true';
    filtrar(yaActivo ? null : boton.dataset.cat);    // un segundo clic muestra todo
  }));

  armarPasos(DATOS.proyectos);
  window.addEventListener('load', () => { rects = null; dibujar(); });
  dibujar();
  // Viene desde una página de proyecto con ?categoria=...
  const pedida = new URLSearchParams(location.search).get('categoria');
  if (pedida && filtros.some((f) => f.dataset.cat === pedida)) setTimeout(() => filtrar(pedida), 0);
}


/* ---------- 4. CUADRÍCULA ANIMADA ----------
   Los cuadrados rosados y las fotos se mueven siempre de una celda a otra:
   se desvanecen, cambian de celda y vuelven a aparecer. Nunca dos en la misma celda. */
const lienzo = $('.lienzo');
const COLUMNAS = 15;
const tamCelda = () => lienzo.getBoundingClientRect().width / COLUMNAS;
const vista = () => (esMobile() ? 'm' : 'd');
const varCol = () => (esMobile() ? '--mc' : '--c');
const varFila = () => (esMobile() ? '--mr' : '--r');
const leer = (el) => [parseInt(el.style.getPropertyValue(varCol()), 10), parseInt(el.style.getPropertyValue(varFila()), 10)];
const ubicar = (el, c, f) => { el.style.setProperty(varCol(), c); el.style.setProperty(varFila(), f); };

function celdas(filas, columnas) {
  const out = [];
  for (const f of filas) for (const c of columnas) out.push([c, f]);
  return out;
}
const rango = (a, b, paso = 1) => Array.from({ length: Math.floor((b - a) / paso) + 1 }, (_, i) => a + i * paso);

// Filas de la página que tapan franjas opacas (Florialé, footer): ahí no van cuadros
function filasTapadas() {
  const c = tamCelda();
  const top0 = lienzo.getBoundingClientRect().top;
  const out = new Set();
  $$('.franja, .contacto').forEach((el) => {
    const b = el.getBoundingClientRect();
    for (let f = Math.floor((b.top - top0) / c); f <= Math.ceil((b.bottom - top0) / c); f++) out.add(f);
  });
  return out;
}
// Zona de los cuadrados: toda la página, dentro de la cuadrícula
function zonaCuadros() {
  const filas = Math.floor(lienzo.getBoundingClientRect().height / tamCelda());
  const tapadas = filasTapadas();
  const libres = rango(1, Math.max(2, filas - 2)).filter((f) => !tapadas.has(f));
  const columnas = document.body.classList.contains('inicio') ? rango(0, 14) : [0, 14];
  return celdas(libres, columnas);
}
// Filas que se ven en pantalla en este momento
function filasEnPantalla(margen = 0) {
  const c = tamCelda();
  const top0 = lienzo.getBoundingClientRect().top;
  return [Math.floor(-top0 / c) - margen, Math.floor((window.innerHeight - top0) / c) + margen];
}

/* Cuadrados rosados: acompañan el recorrido de toda la página */
const cuadros = $$('.cuadro').filter((c) => getComputedStyle(c).display !== 'none');
const moviendoCuadro = new Set();

// Celdas ocupadas por otros cuadros o por fotos de la galería: nunca se superponen
function ocupadas() {
  const set = new Set(cuadros.map((c) => leer(c).join(',')));
  const c = tamCelda();
  const base = lienzo.getBoundingClientRect();
  $$('.celda-foto:not(.vacia)').forEach((li) => {
    const b = li.getBoundingClientRect();
    for (let f = Math.floor((b.top - base.top) / c); f < Math.round((b.bottom - base.top) / c); f++) {
      for (let k = Math.floor((b.left - base.left) / c); k < Math.round((b.right - base.left) / c); k++) set.add(k + ',' + f);
    }
  });
  return set;
}

// Se desliza a una celda vecina, en el sentido del scroll
async function deslizar(cuadro, bajando) {
  const [c0, f0] = leer(cuadro);
  const occ = ocupadas();
  const zona = new Set(zonaCuadros().map((x) => x.join(',')));
  const df = bajando ? 1 : -1;
  const opciones = [[c0, f0 + df], [c0 - 1, f0 + df], [c0 + 1, f0 + df], [c0 - 1, f0], [c0 + 1, f0]]
    .filter(([c, f]) => zona.has(c + ',' + f) && !occ.has(c + ',' + f));
  if (!opciones.length) return;
  moviendoCuadro.add(cuadro);
  const [c, f] = azar(opciones);
  ubicar(cuadro, c, f);
  await esperar(1400);
  moviendoCuadro.delete(cuadro);
}

// Se disuelve y reaparece en otra celda de la pantalla
async function reaparecer(cuadro, [fa, fb]) {
  const occ = ocupadas();
  const libres = zonaCuadros().filter(([c, f]) => f >= fa && f <= fb && !occ.has(c + ',' + f));
  if (!libres.length) return;
  moviendoCuadro.add(cuadro);
  cuadro.classList.add('salto', 'oculto');
  await esperar(1100);
  const [c, f] = azar(libres);
  ubicar(cuadro, c, f);
  await esperar(80);
  cuadro.classList.remove('oculto');
  await esperar(1100);
  cuadro.classList.remove('salto');
  moviendoCuadro.delete(cuadro);
}

/* Galería: fotos que se trasladan de un cuadro a otro */
const itemsGaleria = $$('.celda-foto');
if (itemsGaleria.length) {
  const seccionGaleria = $('.seccion-galeria');
  const originales = itemsGaleria.map((li) => ({ html: li.innerHTML, c: li.style.getPropertyValue('--c'), r: li.style.getPropertyValue('--r'), mc: li.style.getPropertyValue('--mc'), mr: li.style.getPropertyValue('--mr') }));
  let visible = false;
  const moviendo = new Set();

  const zonaGaleria = () => (vista() === 'm'
    ? celdas(rango(74, 82, 2), rango(0, 12, 2))      // en mobile, bloques de 2 x 2
    : celdas(rango(28, 33), rango(0, 14)));

  const activos = () => itemsGaleria.filter((li) => !li.classList.contains('vacia'));

  async function moverFoto(li) {
    if (moviendo.has(li) || pocoMovimiento) return;
    moviendo.add(li);
    const ocupadas = new Set(activos().map((x) => leer(x).join(',')));
    const [c0, f0] = leer(li);
    const libres = zonaGaleria().filter(([c, f]) => !ocupadas.has(c + ',' + f));
    if (libres.length) {
      const [c, f] = azar(libres);
      const paso = tamCelda() * 0.35;
      const dx = Math.sign(c - c0) * paso;
      const dy = Math.sign(f - f0) * paso;
      // se desliza y se disuelve…
      await li.animate([{ opacity: 1, transform: 'translate(0, 0)' }, { opacity: 0, transform: `translate(${dx}px, ${dy}px)` }],
        { duration: 1400, easing: 'ease-in', fill: 'forwards' }).finished;
      ubicar(li, c, f);
      // …y aparece en otra celda
      await li.animate([{ opacity: 0, transform: `translate(${-dx}px, ${-dy}px)` }, { opacity: 1, transform: 'translate(0, 0)' }],
        { duration: 1600, easing: 'ease-out', fill: 'forwards' }).finished;
    }
    moviendo.delete(li);
  }

  function llenar(li, foto) {
    const etiqueta = foto.href ? 'a' : 'span';
    li.innerHTML = `<${etiqueta} class="foto${foto.href ? '' : ' foto--sin-enlace'}${foto.contener ? ' contener' : ''}"${foto.href ? ` href="${foto.href}"` : ''}><img src="${foto.src}" alt="${foto.alt}"></${etiqueta}>`;
  }

  async function filtrar(categoria) {
    await Promise.all(itemsGaleria.map((li) => li.animate([{ opacity: 1 }, { opacity: 0 }], { duration: pocoMovimiento ? 0 : 500, fill: 'forwards' }).finished));
    if (!categoria) {
      itemsGaleria.forEach((li, i) => {
        const o = originales[i];
        li.innerHTML = o.html;
        li.classList.remove('vacia');
        li.style.setProperty('--c', o.c); li.style.setProperty('--r', o.r);
        li.style.setProperty('--mc', o.mc); li.style.setProperty('--mr', o.mr);
      });
    } else {
      const fotos = [];
      DATOS.proyectos.filter((p) => p.cat === categoria).forEach((p) => {
        p.imagenes.forEach((im) => fotos.push({ src: im.mini, alt: im.alt, href: p.pagina, contener: p.contener }));
      });
      const libres = zonaGaleria().sort(() => Math.random() - 0.5);
      itemsGaleria.forEach((li, i) => {
        const foto = fotos[i];
        li.classList.toggle('vacia', !foto);
        if (!foto) return;
        llenar(li, foto);
        const [c, f] = libres[i];
        ubicar(li, c, f);
      });
    }
    activos().forEach((li, i) => li.animate([{ opacity: 0 }, { opacity: 1 }], { duration: pocoMovimiento ? 0 : 700, delay: pocoMovimiento ? 0 : i * 70, fill: 'forwards' }));
  }

  galeria = { filtrar };

  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { rootMargin: '200px' }).observe(seccionGaleria);

  // Movimiento constante
  if (!pocoMovimiento) {
    setInterval(() => {
      if (visible && !document.hidden) moverFoto(azar(activos()));
    }, 1600);
  }
  // …y más movimiento mientras se hace scroll
  let acumulado = 0;
  let ultimoY = window.scrollY;
  window.addEventListener('scroll', () => {
    acumulado += Math.abs(window.scrollY - ultimoY);
    ultimoY = window.scrollY;
    if (acumulado > 160 && visible) {
      acumulado = 0;
      moverFoto(azar(activos()));
    }
  }, { passive: true });
}

/* Cuadrados: se mueven a medida que se desplaza la página */
if (cuadros.length && !pocoMovimiento) {
  let acumulado = 0;
  let ultimoY = window.scrollY;
  window.addEventListener('scroll', () => {
    const d = window.scrollY - ultimoY;
    ultimoY = window.scrollY;
    acumulado += Math.abs(d);
    if (acumulado < 70) return;
    acumulado = 0;
    const [fa, fb] = filasEnPantalla(1);
    const libres = cuadros.filter((c) => !moviendoCuadro.has(c));
    if (!libres.length) return;
    const enPantalla = libres.filter((c) => { const f = leer(c)[1]; return f >= fa && f <= fb; });
    const fuera = libres.filter((c) => !enPantalla.includes(c));
    const deseados = Math.min(cuadros.length, esMobile() ? 7 : 6);
    if (enPantalla.length < deseados && fuera.length) {
      reaparecer(azar(fuera), [fa + 1, fb - 1]);            // trae un cuadro que quedó atrás
    } else if (enPantalla.length) {
      const c = azar(enPantalla);
      if (Math.random() < 0.7) deslizar(c, d > 0);
      else reaparecer(c, [fa + 1, fb - 1]);
    }
  }, { passive: true });
}


/* ---------- 5. VIDEO DE FLORIALÉ ----------
   Se reproduce en bucle mientras la sección está en pantalla. */
const video = $('.floriale__video');
if (video) {
  video.muted = true;
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting) video.play().catch(() => {});
    else video.pause();
  }, { threshold: 0.2 }).observe(video);
}


/* ---------- 6. VISOR DE IMÁGENES (páginas de proyecto) ---------- */
const visor = $('.vista__principal img');
if (visor) {
  const minis = $$('.vista__mini');
  let indice = 0;

  function verImagen(i) {
    indice = (i + minis.length) % minis.length;
    const boton = minis[indice];
    minis.forEach((m) => m.classList.toggle('activa', m === boton));
    visor.classList.add('cambiando');
    setTimeout(() => {
      visor.src = boton.dataset.src;
      visor.alt = boton.dataset.alt;
      visor.removeAttribute('width');
      visor.removeAttribute('height');
      const listo = () => visor.classList.remove('cambiando');
      visor.complete ? listo() : visor.addEventListener('load', listo, { once: true });
    }, pocoMovimiento ? 0 : 250);
  }

  minis.forEach((m, i) => m.addEventListener('click', () => verImagen(i)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') verImagen(indice + 1);
    if (e.key === 'ArrowLeft') verImagen(indice - 1);
  });
}


/* ---------- 7. ESTELA DE PÉTALOS ----------
   Al mover el cursor se desprenden pequeños pétalos redondos (como los de la flor)
   que caen girando y se desvanecen. Sólo con mouse y si no se pidió menos movimiento. */
if (!pocoMovimiento && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const estela = document.createElement('div');
  estela.className = 'estela';
  estela.setAttribute('aria-hidden', 'true');
  document.body.appendChild(estela);
  const tonos = ['#dea2b0', '#f5cbd8', '#d095a7', '#f9e6ec'];
  let ultimoX = null;
  let ultimoY = null;
  let vivos = 0;

  window.addEventListener('pointermove', (e) => {
    if (ultimoX !== null && Math.hypot(e.clientX - ultimoX, e.clientY - ultimoY) < 22) return;
    ultimoX = e.clientX;
    ultimoY = e.clientY;
    if (vivos >= 30) return;

    const petalo = document.createElement('span');
    petalo.className = 'petalo';
    const ancho = 5 + Math.random() * 5;
    petalo.style.width = ancho + 'px';
    petalo.style.height = ancho * (0.8 + Math.random() * 0.4) + 'px';
    petalo.style.background = azar(tonos);
    petalo.style.left = e.clientX + (Math.random() - 0.5) * 10 + 'px';
    petalo.style.top = e.clientY + 8 + 'px';
    estela.appendChild(petalo);
    vivos++;

    const lado = (Math.random() - 0.5) * 60;     // se mece hacia un lado
    const caida = 60 + Math.random() * 70;
    const giro = (Math.random() - 0.5) * 360;
    petalo.animate([
      { transform: 'translate(0, 0) rotate(0deg) scale(1)', opacity: 0.9 },
      { transform: 'translate(' + lado * 0.6 + 'px, ' + caida * 0.45 + 'px) rotate(' + giro * 0.5 + 'deg) scale(0.9)', opacity: 0.75, offset: 0.45 },
      { transform: 'translate(' + lado + 'px, ' + caida + 'px) rotate(' + giro + 'deg) scale(0.5)', opacity: 0 },
    ], { duration: 1500 + Math.random() * 800, easing: 'cubic-bezier(0.3, 0.1, 0.4, 1)' })
      .finished.then(() => { petalo.remove(); vivos--; });
  }, { passive: true });
}
