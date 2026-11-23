/* Un solo script corto: pone el progreso del scroll en variables CSS (--p, --crece) */
(function(){
  var raiz = document.documentElement;
  var hero = document.getElementById('inicio');
  var frase = document.getElementById('frase');
  var heroFijo = hero.querySelector('.hero-fijo');
  var ind = document.getElementById('indicador');
  var reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Envolver cada palabra de la frase en un <span class="w">
  var palabras = [];
  (function envolver(nodo){
    Array.prototype.slice.call(nodo.childNodes).forEach(function(n){
      if(n.nodeType === 3){
        var frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(function(t){
          if(!t.trim()){ frag.appendChild(document.createTextNode(t)); return; }
          var s = document.createElement('span'); s.className = 'w'; s.textContent = t;
          palabras.push(s); frag.appendChild(s);
        });
        nodo.replaceChild(frag, n);
      } else if(n.classList && n.classList.contains('k')){
        n.classList.add('w'); palabras.push(n);
      }
    });
  })(document.getElementById('textoFrase'));

  function progreso(sec){
    var r = sec.getBoundingClientRect();
    var total = r.height - window.innerHeight;
    return Math.min(1, Math.max(0, -r.top / total));
  }

  function actualizar(){
    var h = document.documentElement;
    raiz.style.setProperty('--scroll', (h.scrollTop / (h.scrollHeight - window.innerHeight || 1)).toFixed(4));
    if(reducido) return;
    var p = progreso(hero);
    heroFijo.style.setProperty('--p', p.toFixed(4));
    heroFijo.style.setProperty('--crece', Math.max(0, (p - 0.5) * 2).toFixed(4));
    var q = progreso(frase), n = palabras.length;
    palabras.forEach(function(w, i){
      var t = Math.min(1, Math.max(0, q * (n + 1) * 1.15 - i));
      w.style.opacity = (0.2 + 0.8 * t).toFixed(2);
    });
  }
  window.addEventListener('scroll', function(){ requestAnimationFrame(actualizar); }, {passive:true});
  window.addEventListener('resize', actualizar);
  actualizar();

  // Indicador de sección y entrada de filas del índice
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ ind.textContent = e.target.dataset.label; } });
  }, {rootMargin:'-45% 0px -45% 0px'});
  document.querySelectorAll('[data-label]').forEach(function(s){ io.observe(s); });

  var io2 = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io2.unobserve(e.target); } });
  }, {threshold:.2});
  document.querySelectorAll('.fila, .img').forEach(function(f){ io2.observe(f); });

  // Si una imagen aún no existe, se muestra el recuadro de color con "Tu imagen aquí"
  document.querySelectorAll('.img img').forEach(function(im){
    function vacia(){ im.parentNode.classList.add('vacia'); }
    im.addEventListener('error', vacia);
    if(im.complete && im.naturalWidth === 0) vacia();
  });

  // Menú
  var btn = document.getElementById('btnMenu'), menu = document.getElementById('menu');
  function alternar(abrir){
    menu.classList.toggle('abierto', abrir);
    btn.setAttribute('aria-expanded', abrir);
    btn.textContent = abrir ? 'Cerrar' : 'Menú';
  }
  btn.addEventListener('click', function(){ alternar(!menu.classList.contains('abierto')); });
  menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ alternar(false); }); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') alternar(false); });
})();