/* =========================================================
   script.js — Portafolio Isidora Álvarez 2026
   Único archivo de JavaScript del sitio.
   Script clásico (sin módulos): funciona en GitHub Pages
   y también abriendo index.html con doble clic.

   ÍNDICE
   0.  PROYECTOS ........ datos de las estampillas y del detalle
   1.  Utilidades
   2.  Reloj ............ hora en la barra superior
   3.  Titular .......... palabra que rota (toca/usa/habita/sostiene)
   4.  Ventanas ......... arrastrar ventanas .win (pointer events)
   5.  Estampillas ...... render + filtros + scroll horizontal + progreso
   6.  Detalle .......... ventana flotante con el proyecto (#proyecto/<id>)
   7.  Pieza ............ ventana "pieza-interactiva" con "ver otra"
   8.  Contacto ......... copiar al portapapeles
   9.  Sección activa ... dock y menú según la sección visible
   10. Revelar .......... aparición suave al hacer scroll
   11. Inicio
   ========================================================= */

(function () {
  "use strict";

  /* =======================================================
     0. PROYECTOS
     Para editar un proyecto cambia solo este bloque.

     id       → dirección del detalle: index.html#proyecto/<id>
     cod/anio → cabecera de la estampilla
     tipo     → línea en mayúsculas bajo el título
     cats     → filtros: mobiliario · prototipos · electronica · web
     portada  → foto de la estampilla ("" = recuadro gris)
     ajuste   → "cover" (llena el cuadro) o "contain" (se ve entera)
     proceso  → fotos de la fila "proceso — bocetos y croquis"
     bloques  → textos 01 problema · 02 proceso · 03 resultado
     ======================================================= */
  var RUTA = "imagenes/";

  var PROYECTOS = [
    {
      id: "gestos",
      titulo: "Gestos",
      cod: "E01",
      anio: "2026",
      tipo: "web / interacción",
      cats: ["web"],
      portada: "",
      ajuste: "contain",
      materiales: "HTML, CSS, JS",
      proceso: [],
      bloques: ["[qué problema aborda · por escribir]", "[cómo lo desarrollé · por escribir]", "[qué resultó · por escribir]"]
    },
    {
      id: "dos-realidades",
      titulo: "Dos realidades",
      cod: "E02",
      anio: "2026",
      tipo: "multirealidades.sys / web",
      cats: ["web"],
      portada: "multirealidades.png",
      ajuste: "contain",
      materiales: "HTML, CSS, JS",
      proceso: [],
      bloques: ["[qué problema aborda · por escribir]", "[cómo lo desarrollé · por escribir]", "[qué resultó · por escribir]"]
    },
    {
      id: "escuchar-la-imagen",
      titulo: "Escuchar la imagen",
      cod: "T06",
      anio: "2026",
      tipo: "oír la luz / web",
      cats: ["web"],
      portada: "wii.png",
      ajuste: "contain",
      materiales: "HTML, CSS, JS",
      proceso: [],
      bloques: ["[qué problema aborda · por escribir]", "[cómo lo desarrollé · por escribir]", "[qué resultó · por escribir]"]
    },
    {
      id: "tocar-la-imagen",
      titulo: "Tocar la imagen",
      cod: "E04",
      anio: "2026",
      tipo: "web / tacto",
      cats: ["web"],
      portada: "contrapresion.png",
      ajuste: "contain",
      materiales: "HTML, CSS, JS, MQTT",
      proceso: [],
      bloques: ["[qué problema aborda · por escribir]", "[cómo lo desarrollé · por escribir]", "[qué resultó · por escribir]"]
    },
    {
      id: "banquito-zapatero",
      titulo: "Banquito zapatero modular",
      cod: "M03",
      anio: "2025",
      tipo: "mobiliario / prototipo",
      cats: ["mobiliario", "prototipos"],
      portada: "banco_zapatero.jpeg",
      ajuste: "cover",
      materiales: "madera",
      proceso: ["banco_zapatero2.jpeg", "banco_zapatero3.jpeg"],
      bloques: ["[qué problema aborda · por escribir]", "[cómo lo desarrollé · por escribir]", "[qué resultó · por escribir]"]
    },
    {
      id: "sin-te",
      titulo: "Sintetizador modular Sin-Te",
      cod: "E03",
      anio: "2026",
      tipo: "sintetizador modular / electrónica",
      cats: ["electronica", "prototipos"],
      portada: "sin_tes.jpeg",
      ajuste: "cover",
      materiales: "acrílico, impresión 3D, PCB, madera",
      proceso: ["sin_te.jpeg", "sintes.jpeg", "sintess.jpeg", "sinte.jpeg", "sinte2.jpeg"],
      bloques: ["[qué problema aborda · por escribir]", "[cómo lo desarrollé · por escribir]", "[qué resultó · por escribir]"]
    },
    {
      id: "tostadora",
      titulo: "Tostadora inestable",
      cod: "E05",
      anio: "2026",
      tipo: "sintetizador / electrónica",
      cats: ["electronica", "prototipos"],
      portada: "tostadora.jpeg",
      ajuste: "cover",
      materiales: "cartón, electrónica",
      proceso: [],
      bloques: ["[qué problema aborda · por escribir]", "[cómo lo desarrollé · por escribir]", "[qué resultó · por escribir]"]
    },
    {
      id: "silla",
      titulo: "Silla",
      cod: "M01",
      anio: "2025",
      tipo: "mobiliario",
      cats: ["mobiliario"],
      portada: "silla.jpeg",
      ajuste: "cover",
      materiales: "madera",
      proceso: [],
      bloques: ["[qué problema aborda · por escribir]", "[cómo lo desarrollé · por escribir]", "[qué resultó · por escribir]"]
    },
    {
      id: "banca",
      titulo: "Banca",
      cod: "M02",
      anio: "2025",
      tipo: "mobiliario",
      cats: ["mobiliario"],
      portada: "banca.jpeg",
      ajuste: "cover",
      materiales: "madera",
      proceso: ["banca2.jpeg", "plano_banca.jpeg"],
      bloques: ["[qué problema aborda · por escribir]", "[cómo lo desarrollé · por escribir]", "[qué resultó · por escribir]"]
    },
    {
      id: "ave",
      titulo: "Ave",
      cod: "O01",
      anio: "2025",
      tipo: "madera / objeto",
      cats: ["prototipos"],
      portada: "ave.jpeg",
      ajuste: "cover",
      materiales: "madera",
      proceso: ["ave2.jpeg", "ave3.jpeg", "ave4.jpeg"],
      bloques: ["[qué problema aborda · por escribir]", "[cómo lo desarrollé · por escribir]", "[qué resultó · por escribir]"]
    },
    {
      id: "comedero",
      titulo: "Comedero",
      cod: "O02",
      anio: "2025",
      tipo: "objeto / madera",
      cats: ["prototipos"],
      portada: "comedero.jpeg",
      ajuste: "cover",
      materiales: "madera",
      proceso: ["comedero2.jpeg", "comedero3.jpeg", "comedero4.jpeg"],
      bloques: ["[qué problema aborda · por escribir]", "[cómo lo desarrollé · por escribir]", "[qué resultó · por escribir]"]
    },
    {
      id: "lampara",
      titulo: "Lámpara",
      cod: "O03",
      anio: "2025",
      tipo: "iluminación / objeto",
      cats: ["prototipos"],
      portada: "lampara.jpeg",
      ajuste: "cover",
      materiales: "[materiales]",
      proceso: ["lampara2.jpeg", "lampara3.jpeg", "lampara4.jpeg"],
      bloques: ["[qué problema aborda · por escribir]", "[cómo lo desarrollé · por escribir]", "[qué resultó · por escribir]"]
    }
  ];


  /* =======================================================
     1. Utilidades
     ======================================================= */
  var reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(txt) {
    return String(txt).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function dosDigitos(n) { return String(n).padStart(2, "0"); }
  function barraWin(titulo, extra) {
    return '<div class="tb"><span class="tb__puntos"><i></i><i></i><i></i></span>' +
           '<span class="tb__titulo">' + esc(titulo) + "</span>" + (extra || "") + "</div>";
  }


  /* =======================================================
     2. Reloj
     ======================================================= */
  function reloj() {
    var el = $("[data-reloj]");
    if (!el) return;
    var fmt = new Intl.DateTimeFormat("es-CL", {
      weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    });
    function tick() {
      var ahora = new Date();
      el.textContent = fmt.format(ahora).replace(/\./g, "").replace(",", " ·");
      el.setAttribute("datetime", ahora.toISOString());
    }
    tick();
    setInterval(tick, 30000);
  }


  /* =======================================================
     3. Titular dinámico
     Cambia cada 1,8 s con blur + fade (sin cajas de fondo).
     Clic en la palabra = siguiente. Se pausa con la pestaña oculta.
     ======================================================= */
  function titular() {
    var caja = $(".palabra-caja");
    if (!caja) return;
    var palabra = $(".palabra", caja);
    var lista = (caja.dataset.palabras || "toca").split(",");
    var i = 0;
    var INTERVALO = 1800;
    var SALIDA = 380;
    var timer = null;
    var ocupado = false;

    function siguiente() {
      if (ocupado) return;
      ocupado = true;
      i = (i + 1) % lista.length;

      var anchoActual = caja.getBoundingClientRect().width;
      caja.style.width = anchoActual + "px";
      palabra.classList.add("sale");

      setTimeout(function () {
        palabra.textContent = lista[i];
        caja.style.width = "auto";
        var anchoNuevo = caja.getBoundingClientRect().width;
        caja.style.width = anchoActual + "px";
        void caja.offsetWidth;                  // fuerza reflow
        caja.style.width = anchoNuevo + "px";

        palabra.classList.remove("sale");
        palabra.classList.add("entra");
        void palabra.offsetWidth;
        palabra.classList.remove("entra");
        ocupado = false;
      }, reducirMovimiento ? 0 : SALIDA);
    }

    function detener() { if (timer) clearInterval(timer); timer = null; }
    function iniciar() { detener(); timer = setInterval(siguiente, INTERVALO); }

    caja.addEventListener("click", function () { siguiente(); iniciar(); });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) detener(); else iniciar();
    });
    window.addEventListener("resize", function () { caja.style.width = "auto"; });

    iniciar();
  }


  /* =======================================================
     4. Ventanas arrastrables (.win[data-arrastrable])
     Se arrastran desde la barra .tb. Doble clic = vuelve a su sitio.
     ======================================================= */
  var zTop = 10;

  function hacerArrastrable(win) {
    var barra = $(".tb", win);
    if (!barra || win.dataset.arrastreListo) return;
    win.dataset.arrastreListo = "1";

    var x = 0, y = 0, inicioX = 0, inicioY = 0, limites = null, activo = false;

    function aplicar() { win.style.translate = x + "px " + y + "px"; }

    barra.addEventListener("pointerdown", function (e) {
      if (e.button !== 0 || e.target.closest("button, a")) return;
      e.preventDefault();
      activo = true;
      barra.setPointerCapture(e.pointerId);
      inicioX = e.clientX - x;
      inicioY = e.clientY - y;

      // deja al menos 80 px de la ventana dentro de la pantalla
      var r = win.getBoundingClientRect();
      var alto = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--alto-header")) || 58;
      limites = {
        minX: x - r.left - r.width + 80,
        maxX: x + (window.innerWidth - r.right) + r.width - 80,
        minY: y - r.top + alto
      };

      win.classList.remove("volviendo");
      win.classList.add("arrastrando");
      win.style.zIndex = ++zTop;
    });

    barra.addEventListener("pointermove", function (e) {
      if (!activo) return;
      x = Math.min(limites.maxX, Math.max(limites.minX, e.clientX - inicioX));
      y = Math.max(limites.minY, e.clientY - inicioY);
      aplicar();
    });

    function soltar(e) {
      if (!activo) return;
      activo = false;
      win.classList.remove("arrastrando");
      if (barra.hasPointerCapture(e.pointerId)) barra.releasePointerCapture(e.pointerId);
    }
    barra.addEventListener("pointerup", soltar);
    barra.addEventListener("pointercancel", soltar);

    barra.addEventListener("dblclick", function () {
      x = 0; y = 0;
      win.classList.add("volviendo");
      aplicar();
    });

    win.addEventListener("pointerdown", function () { win.style.zIndex = ++zTop; });
  }

  function ventanas() { $$("[data-arrastrable]").forEach(hacerArrastrable); }


  /* =======================================================
     5. Estampillas: render, filtros, scroll horizontal, progreso
     ======================================================= */
  function crearEstampilla(p) {
    var a = document.createElement("a");
    a.className = "sx";
    a.href = "#proyecto/" + p.id;
    a.dataset.cats = p.cats.join(" ");
    a.setAttribute("aria-label", p.titulo + " — " + p.tipo + ", " + p.anio);

    var imagen = p.portada
      ? '<div class="sx__img' + (p.ajuste === "contain" ? " sx__img--contain" : "") + '">' +
          '<img src="' + RUTA + esc(p.portada) + '" alt="" loading="lazy" decoding="async" draggable="false">' +
        "</div>"
      : '<div class="sx__img sx__img--vacia"><span class="mono">[imagen por definir]</span></div>';

    a.innerHTML =
      '<div class="sx__papel">' +
        '<div class="sx__cab"><span>' + esc(p.cod) + "</span><span>" + esc(p.anio) + "</span></div>" +
        imagen +
        '<div class="sx__pie">' +
          '<div class="sx__textos">' +
            '<h3 class="sx__titulo">' + esc(p.titulo) + "</h3>" +
            '<p class="sx__tipo">' + esc(p.tipo) + "</p>" +
          "</div>" +
          '<span class="sx__flecha" aria-hidden="true"></span>' +
        "</div>" +
      "</div>";
    return a;
  }

  function estampillas() {
    var srow = $("#srow");
    if (!srow) return;

    var frag = document.createDocumentFragment();
    PROYECTOS.forEach(function (p) { frag.appendChild(crearEstampilla(p)); });
    srow.appendChild(frag);

    var total = $("[data-total]");
    if (total) total.textContent = PROYECTOS.length;

    /* --- barra de progreso --- */
    var avance = $("[data-progreso]");
    var pendiente = false;
    function actualizarProgreso() {
      pendiente = false;
      if (!avance) return;
      var visto = (srow.scrollLeft + srow.clientWidth) / (srow.scrollWidth || 1);
      avance.style.width = Math.min(100, visto * 100) + "%";
    }
    function pedirProgreso() {
      if (!pendiente) { pendiente = true; requestAnimationFrame(actualizarProgreso); }
    }
    srow.addEventListener("scroll", pedirProgreso, { passive: true });
    window.addEventListener("resize", pedirProgreso);
    window.addEventListener("load", pedirProgreso);
    actualizarProgreso();

    /* --- rueda del mouse: vertical → horizontal mientras queda fila --- */
    srow.addEventListener("wheel", function (e) {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;        // trackpad horizontal: nativo
      var max = srow.scrollWidth - srow.clientWidth;
      var puede = (e.deltaY > 0 && srow.scrollLeft < max - 1) || (e.deltaY < 0 && srow.scrollLeft > 0);
      if (!puede) return;                                            // en los extremos sigue la página
      e.preventDefault();
      srow.scrollLeft += e.deltaY;
    }, { passive: false });

    /* --- arrastrar con el mouse (touch usa el scroll nativo) --- */
    var abajo = false, movio = false, x0 = 0, scroll0 = 0, idPuntero = null;

    srow.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      abajo = true; movio = false;
      x0 = e.clientX; scroll0 = srow.scrollLeft; idPuntero = e.pointerId;
    });
    srow.addEventListener("pointermove", function (e) {
      if (!abajo) return;
      var dx = e.clientX - x0;
      if (!movio && Math.abs(dx) > 6) {
        movio = true;
        srow.classList.add("arrastrando");
        srow.setPointerCapture(idPuntero);
      }
      if (movio) srow.scrollLeft = scroll0 - dx;
    });
    function soltar() {
      if (!abajo) return;
      abajo = false;
      srow.classList.remove("arrastrando");
      if (idPuntero !== null && srow.hasPointerCapture(idPuntero)) srow.releasePointerCapture(idPuntero);
    }
    srow.addEventListener("pointerup", soltar);
    srow.addEventListener("pointercancel", soltar);
    srow.addEventListener("lostpointercapture", soltar);

    // si hubo arrastre, el clic no abre el proyecto
    srow.addEventListener("click", function (e) {
      if (movio) { e.preventDefault(); e.stopPropagation(); movio = false; }
    }, true);
    srow.addEventListener("dragstart", function (e) { e.preventDefault(); });

    /* --- filtros --- */
    var botones = $$("[data-filtro]");
    var timerFiltro = null;

    botones.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var filtro = btn.dataset.filtro;
        botones.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });

        var tarjetas = $$(".sx", srow);
        tarjetas.forEach(function (t) {                 // 1) salen las que no corresponden
          var ok = filtro === "todos" || t.dataset.cats.split(" ").indexOf(filtro) !== -1;
          t.classList.toggle("fuera", !ok);
          t.dataset.ok = ok ? "1" : "0";
        });

        clearTimeout(timerFiltro);
        timerFiltro = setTimeout(function () {         // 2) se ocultan y entran las que sí
          tarjetas.forEach(function (t) {
            var ok = t.dataset.ok === "1";
            t.classList.toggle("oculta", !ok);
            if (ok) t.classList.add("fuera");
          });
          srow.scrollTo({ left: 0, behavior: "auto" });
          requestAnimationFrame(function () {
            tarjetas.forEach(function (t) { if (t.dataset.ok === "1") t.classList.remove("fuera"); });
            pedirProgreso();
          });
        }, reducirMovimiento ? 0 : 260);
      });
    });
  }


  /* =======================================================
     6. Detalle de proyecto (ventana flotante .win--detalle)
     Se abre con la dirección #proyecto/<id>, así funcionan
     los botones atrás/adelante del navegador y los enlaces directos.
     Cierra con ✕, Esc o clic fuera.
     ======================================================= */
  function detalle() {
    var capa = $("#detalle");
    if (!capa) return;
    var cuerpo = $("[data-d-cuerpo]", capa);
    var archivo = $("[data-d-archivo]", capa);
    var focoPrevio = null;
    var timerCierre = null;

    function buscar(id) {
      for (var i = 0; i < PROYECTOS.length; i++) if (PROYECTOS[i].id === id) return i;
      return -1;
    }

    function pintar(indice) {
      var p = PROYECTOS[indice];
      var ant = PROYECTOS[(indice - 1 + PROYECTOS.length) % PROYECTOS.length];
      var sig = PROYECTOS[(indice + 1) % PROYECTOS.length];
      var etiquetas = ["01 — problema", "02 — proceso", "03 — resultado"];

      var hero = p.portada
        ? '<img src="' + RUTA + esc(p.portada) + '" alt="' + esc(p.titulo) + '" data-d-hero>'
        : '<span class="mono">[imagen principal · por definir]</span>';

      // proceso: fotos reales o 4 ventanas marcadoras (como en el Figma)
      var fotos = p.proceso && p.proceso.length ? p.proceso : [null, null, null, null];
      var proceso = fotos.map(function (f, i) {
        var n = dosDigitos(i + 1);
        var visual = f
          ? '<img src="' + RUTA + esc(f) + '" alt="' + esc(p.titulo) + ", boceto " + n +
            '" loading="lazy" decoding="async" draggable="false" data-d-foto="' + esc(f) + '">'
          : '<span class="proceso__etiqueta">[boceto / croquis ' + n + "]</span>";
        return '<article class="win proceso__boceto">' + barraWin("boceto-" + n + ".jpg") +
               '<div class="proceso__visual">' + visual + "</div></article>";
      }).join("");

      archivo.textContent = p.id + ".proyecto";
      cuerpo.innerHTML =
        '<p class="etiqueta">Nº' + dosDigitos(indice + 1) + " — " + esc(p.tipo) + "</p>" +
        '<h2 class="detalle__titulo" id="detalle-titulo">' + esc(p.titulo) + "</h2>" +

        '<div class="metadatos">' +
          [["código", p.cod], ["año", p.anio], ["tipo", p.tipo], ["materiales", p.materiales]].map(function (m) {
            return '<div class="meta"><span class="mono">' + esc(m[0]) + '</span><span class="meta__valor">' + esc(m[1] || "—") + "</span></div>";
          }).join("") +
        "</div>" +

        '<figure class="detalle__hero">' + hero + "</figure>" +

        '<div class="bloques">' +
          p.bloques.map(function (b, i) {
            return '<div class="bloque"><p class="etiqueta">' + etiquetas[i] + '</p><p class="cuerpo-s">' + esc(b) + "</p></div>";
          }).join("") +
        "</div>" +

        '<section class="proceso">' +
          '<p class="etiqueta">proceso — bocetos y croquis</p>' +
          '<div class="proceso__fila" tabindex="0" aria-label="Bocetos y croquis (desliza horizontalmente)">' + proceso + "</div>" +
        "</section>" +

        '<nav class="detalle__nav" aria-label="Otros proyectos">' +
          '<a class="btn btn--secundario" href="#proyecto/' + ant.id + '">← ' + esc(ant.titulo) + "</a>" +
          '<a class="btn btn--primario" href="#proyecto/' + sig.id + '">' + esc(sig.titulo) + " →</a>" +
        "</nav>";

      cuerpo.scrollTop = 0;
    }

    function abrir(indice) {
      clearTimeout(timerCierre);
      pintar(indice);
      if (capa.hidden) {
        focoPrevio = document.activeElement;
        capa.hidden = false;
        document.documentElement.classList.add("con-modal");
        void capa.offsetWidth;               // fuerza reflow para que corra la transición
        capa.classList.add("abierto");
      }
      $("[data-cerrar].tb__cerrar", capa).focus({ preventScroll: true });
    }

    function cerrar() {
      if (capa.hidden) return;
      capa.classList.remove("abierto");
      document.documentElement.classList.remove("con-modal");
      timerCierre = setTimeout(function () { capa.hidden = true; }, reducirMovimiento ? 0 : 400);
      if (focoPrevio && focoPrevio.focus) focoPrevio.focus({ preventScroll: true });
    }

    // la dirección manda: #proyecto/<id> abre, cualquier otra cierra
    function segunDireccion() {
      var m = location.hash.match(/^#proyecto\/(.+)$/);
      var indice = m ? buscar(decodeURIComponent(m[1])) : -1;
      if (indice !== -1) abrir(indice); else cerrar();
    }

    function salir() {
      // vuelve a #trabajos sin saltar de posición
      history.replaceState(null, "", "#trabajos");
      cerrar();
    }

    window.addEventListener("hashchange", segunDireccion);
    $$("[data-cerrar]", capa).forEach(function (el) { el.addEventListener("click", salir); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !capa.hidden) salir();
    });

    // clic en una foto de proceso → pasa a la imagen principal
    cuerpo.addEventListener("click", function (e) {
      var img = e.target.closest("[data-d-foto]");
      if (!img) return;
      var hero = $("[data-d-hero]", cuerpo);
      if (!hero) return;
      $$(".proceso__boceto", cuerpo).forEach(function (b) { b.classList.toggle("activo", b.contains(img)); });
      hero.classList.add("cambiando");
      setTimeout(function () {
        hero.src = RUTA + img.dataset.dFoto;
        hero.onload = function () { hero.classList.remove("cambiando"); };
      }, 200);
      hero.scrollIntoView({ behavior: reducirMovimiento ? "auto" : "smooth", block: "center" });
    });

    segunDireccion();       // por si se entra directo con #proyecto/<id>
  }


  /* =======================================================
     7. Pieza interactiva (portada) — "ver otra ↻"
     ======================================================= */
  function pieza() {
    var img = $("[data-pieza-img]");
    if (!img) return;
    var caja = img.closest(".pieza");
    var enlace = $("[data-pieza-enlace]");
    var etiqueta = $("[data-pieza-etiqueta]");
    var titulo = $("[data-pieza-titulo]");
    var boton = $("[data-pieza-otra]");

    var lista = PROYECTOS.filter(function (p) { return p.portada; });
    if (!lista.length) return;
    var actual = -1;

    function mostrar(indice) {
      actual = indice;
      var p = lista[indice];
      img.classList.remove("lista");

      setTimeout(function () {
        var nueva = new Image();
        nueva.onload = function () {
          img.src = nueva.src;
          img.style.objectFit = p.ajuste === "contain" ? "contain" : "cover";
          img.alt = p.titulo;
          caja.classList.add("con-imagen");
          img.classList.add("lista");
        };
        nueva.src = RUTA + p.portada;
        enlace.href = "#proyecto/" + p.id;
        enlace.setAttribute("aria-label", "ver proyecto " + p.titulo);
        etiqueta.textContent = "[" + p.titulo + " · " + p.anio + "]";
        titulo.textContent = "pieza-interactiva — " + p.portada;
      }, img.src ? 250 : 0);
    }

    function aleatoria() {
      var n;
      do { n = Math.floor(Math.random() * lista.length); } while (lista.length > 1 && n === actual);
      return n;
    }

    boton.addEventListener("click", function () { mostrar(aleatoria()); });
    mostrar(aleatoria());
  }


  /* =======================================================
     8. Copiar contacto (vuelve a "copiar" tras 1,5 s)
     ======================================================= */
  function copiarTexto(txt) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(txt);
    return new Promise(function (ok, mal) {
      var area = document.createElement("textarea");
      area.value = txt;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try { document.execCommand("copy") ? ok() : mal(); } catch (err) { mal(err); }
      area.remove();
    });
  }

  function contacto() {
    $$("[data-copiar]").forEach(function (btn) {
      var original = btn.textContent;
      var timer = null;
      btn.addEventListener("click", function () {
        copiarTexto(btn.dataset.copiar).then(function () {
          btn.textContent = "copiado ✓";
          btn.classList.add("copiado");
        }, function () {
          btn.textContent = "no se pudo";
        }).then(function () {
          clearTimeout(timer);
          timer = setTimeout(function () {
            btn.textContent = original;
            btn.classList.remove("copiado");
          }, 1500);
        });
      });
    });
  }


  /* =======================================================
     9. Sección activa (dock + menú)
     ======================================================= */
  function seccionActiva() {
    var secciones = ["contacto", "sobre-mi", "trabajos"]
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    if (!secciones.length) return;
    var enlaces = $$("[data-seccion]");
    var pendiente = false;

    function calcular() {
      pendiente = false;
      var centro = window.innerHeight * 0.5;
      var activa = null;
      for (var i = 0; i < secciones.length; i++) {
        var r = secciones[i].getBoundingClientRect();
        if (r.top <= centro && r.bottom >= centro) { activa = secciones[i].id; break; }
      }
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 4) activa = "contacto";
      enlaces.forEach(function (a) { a.classList.toggle("activo", a.dataset.seccion === activa); });
    }

    window.addEventListener("scroll", function () {
      if (!pendiente) { pendiente = true; requestAnimationFrame(calcular); }
    }, { passive: true });
    window.addEventListener("resize", calcular);
    calcular();
  }


  /* =======================================================
     10. Revelar al hacer scroll
     ======================================================= */
  function revelar() {
    var items = $$(".revelar");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 60 + "ms";
      io.observe(el);
    });
  }


  /* =======================================================
     11. Inicio
     ======================================================= */
  document.documentElement.classList.add("js");
  reloj();
  titular();
  estampillas();
  detalle();
  pieza();
  ventanas();
  contacto();
  seccionActiva();
  revelar();
})();
