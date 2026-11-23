/* =====================================================================
   script.js — pumpkinguurl
   Un solo archivo para las 3 páginas. Cada parte revisa si su sección
   existe en la página antes de funcionar:
   1) Ruleta tipo tragamonedas      → index.html
   2) Flechas del carrusel           → index.html
   3) Galería infinita arrastrable   → galeria.html
   ===================================================================== */


/* ---------------------------------------------------------------------
   CONFIGURACIÓN COMPARTIDA — la usan la ruleta y la galería
   Si agregas o quitas fotos, solo cambias TOTAL_FOTOS aquí.
   --------------------------------------------------------------------- */
const CARPETA_FOTOS = "imgruleta/"; // carpeta donde están img1, img2, img3...
const TOTAL_FOTOS = 78;             // cuántas fotos hay en total
const EXTENSION = ".jpg";           // extensión que tienen la mayoría de tus fotos

// Si una foto no carga con la extensión de arriba, el código prueba con estas otras
const OTRAS_EXTENSIONES = [".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG"];
const EXTENSIONES = [EXTENSION, ...OTRAS_EXTENSIONES]; // lista completa, en orden de prueba


/* ---------------------------------------------------------------------
   CONFIGURACIÓN DE LA GALERÍA
   --------------------------------------------------------------------- */
const COLUMNAS = 8;       // cuántas columnas tiene cada baldosa
const MEZCLAR = true;     // true = las fotos cambian de orden cada vez que entras

// Medidas en "anchos de columna" (así funciona en cualquier pantalla).
// Si cambias --separacion en el CSS, cambia también SEPARACION.
const SEPARACION = 0.4;   // espacio entre fotos = 0.4 veces el ancho de una columna
const DESFASES = [0, 0.9, 0.35, 1.2, 0.6, 1.5, 0.2, 1.0]; // cuánto se corre cada columna hacia arriba (para que las fotos no queden alineadas)


/* ---------------------------------------------------------------------
   AYUDANTES COMPARTIDOS
   --------------------------------------------------------------------- */

// Si la persona tiene activado "reducir movimiento" en su computador, las animaciones son cortitas
const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Convierte píxeles a rem (para respetar la regla de usar rem)
function aRem(pixeles) {
    const tamanoBase = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return pixeles / tamanoBase;
}

/* =====================================================================
   1. RULETA
   ===================================================================== */

const ruleta = document.querySelector(".ruleta");
const botonGirar = document.querySelector(".btn-girar");

// Solo se ejecuta si la página tiene ruleta (en portafolio.html y galeria.html se salta)
if (ruleta && botonGirar) {

    const columnas = ruleta.querySelectorAll(".columna");
    const FOTOS_VISIBLES = 5;       // cuántas fotos se ven en cada columna
    const POSICION_GANADORA = 2;    // la del medio (se cuenta desde 0: 0, 1, [2], 3, 4)

    const extensionQueFunciona = {}; // aquí se anota qué extensión tiene cada foto, para no volver a adivinar

    // Arma la ruta de una foto, por ejemplo: imgruleta/img27.jpg
    function rutaFoto(numero, extension) {
        return CARPETA_FOTOS + "img" + numero + extension;
    }

    // Prepara una foto para que, si no carga, pruebe sola con otra extensión
    function activarRespaldo(foto, numero) {
        foto.dataset.numero = numero; // guarda en la foto qué número es
        foto.dataset.intento = EXTENSIONES.indexOf(extensionQueFunciona[numero] || EXTENSION);

        // Si falla: prueba con la siguiente extensión de la lista
        foto.addEventListener("error", function () {
            const siguiente = Number(foto.dataset.intento) + 1;
            if (siguiente < EXTENSIONES.length) {
                foto.dataset.intento = siguiente;
                foto.src = rutaFoto(numero, EXTENSIONES[siguiente]);
            } else {
                console.warn("No se encontró la foto img" + numero + " con ninguna extensión"); // aviso en la consola (F12)
            }
        });

        // Si carga bien: anota la extensión que funcionó
        foto.addEventListener("load", function () {
            extensionQueFunciona[numero] = EXTENSIONES[Number(foto.dataset.intento)];
        });
    }

    // Devuelve un número al azar entre 1 y TOTAL_FOTOS
    function numeroAlAzar() {
        return Math.floor(Math.random() * TOTAL_FOTOS) + 1;
    }

    // Crea una etiqueta <img> nueva con la foto indicada
    function crearFoto(numero) {
        const foto = document.createElement("img");
        activarRespaldo(foto, numero); // primero el respaldo, por si falla al tiro
        foto.src = rutaFoto(numero, extensionQueFunciona[numero] || EXTENSION);
        foto.alt = "Foto tomada por Martina";
        return foto;
    }

    // Elige 3 fotos distintas (una por columna)
    function elegirTrio() {
        const elegidas = new Set();          // un Set no permite repetidos
        while (elegidas.size < 3) {
            elegidas.add(numeroAlAzar());
        }
        return [...elegidas];
    }

    // PREPARACIÓN: mete las 5 fotos de cada columna dentro de una "tira" que se puede mover
    columnas.forEach(function (columna) {
        const tira = document.createElement("div");
        tira.className = "tira";
        tira.append(...columna.querySelectorAll("img"));
        columna.append(tira);
    });

    // Las 15 fotos que ya vienen en el HTML también reciben el respaldo de extensiones
    ruleta.querySelectorAll("img").forEach(function (foto) {
        const coincidencia = foto.getAttribute("src").match(/img(\d+)\.\w+$/); // saca el número del nombre
        if (!coincidencia) return;
        const numero = Number(coincidencia[1]);
        activarRespaldo(foto, numero);
        // Si la foto ya había fallado antes de que cargara este archivo, la vuelve a intentar
        if (foto.complete && foto.naturalWidth === 0) {
            foto.dispatchEvent(new Event("error"));
        }
    });

    // Hace girar UNA columna y termina mostrando la foto ganadora al medio
    function girarColumna(columna, ganadora, indice) {
        return new Promise(function (terminar) {
            const tira = columna.querySelector(".tira");

            // Cada columna gira un poco más que la anterior, como en las tragamonedas
            const cantidadRelleno = 18 + indice * 8;
            const duracion = reducirMovimiento ? 0.4 : 2 + indice * 0.7; // en segundos

            // 1) Fotos al azar que pasan rápido
            for (let i = 0; i < cantidadRelleno; i++) {
                tira.append(crearFoto(numeroAlAzar()));
            }

            // 2) Las 5 fotos donde se va a detener (la del medio es la ganadora)
            const finales = [];
            for (let i = 0; i < FOTOS_VISIBLES; i++) {
                const numero = i === POSICION_GANADORA ? ganadora : numeroAlAzar();
                const foto = crearFoto(numero);
                finales.push(foto);
                tira.append(foto);
            }

            // 3) Dos fotos extra al final para que nunca se vea un hueco vacío
            tira.append(crearFoto(numeroAlAzar()), crearFoto(numeroAlAzar()));

            // Mide cuánto hay que subir la tira para que aparezcan las 5 fotos finales
            const distancia = finales[0].getBoundingClientRect().top - tira.getBoundingClientRect().top;

            // Mueve la tira hacia arriba con una animación que frena al final
            tira.style.transition = "transform " + duracion + "s cubic-bezier(0.15, 0.6, 0.2, 1)";
            tira.style.transform = "translateY(-" + aRem(distancia) + "rem)";

            // Cuando termina el giro, limpia la tira y deja solo las 5 fotos finales
            setTimeout(function () {
                [...tira.children].forEach(function (foto) {
                    if (!finales.includes(foto)) {
                        foto.remove();
                    }
                });
                tira.style.transition = "none";        // vuelve a su lugar sin animación...
                tira.style.transform = "translateY(0)"; // ...así no se nota el cambio
                finales[POSICION_GANADORA].alt = "Foto ganadora de la ruleta";
                terminar();
            }, duracion * 1000 + 50);
        });
    }

    // Al presionar "Girar"
    botonGirar.addEventListener("click", async function () {
        botonGirar.disabled = true;        // no se puede apretar mientras gira
        ruleta.classList.add("girando");   // activa el desenfoque del CSS

        const trio = elegirTrio();

        // Las 3 columnas giran al mismo tiempo; esperamos a que paren todas
        await Promise.all([...columnas].map(function (columna, i) {
            return girarColumna(columna, trio[i], i);
        }));

        ruleta.classList.remove("girando");
        botonGirar.disabled = false;
    });
}


/* =====================================================================
   2. FLECHAS DEL CARRUSEL (el deslizamiento ya funciona solo con CSS;
      esto solo hace que los botones ← → muevan una foto)
   ===================================================================== */

const carruselFotos = document.querySelector(".carrusel-fotos");
const flechaIzq = document.querySelector(".flecha-izq");
const flechaDer = document.querySelector(".flecha-der");

if (carruselFotos && flechaIzq && flechaDer) {

    // Cuánto mide "un paso": el ancho de una foto + el espacio entre fotos
    function pasoCarrusel() {
        const foto = carruselFotos.querySelector("img");
        const espacio = parseFloat(getComputedStyle(carruselFotos).columnGap) || 0;
        return foto.offsetWidth + espacio;
    }

    flechaIzq.addEventListener("click", function () {
        carruselFotos.scrollBy({ left: -pasoCarrusel(), behavior: "smooth" }); // una foto a la izquierda
    });

    flechaDer.addEventListener("click", function () {
        carruselFotos.scrollBy({ left: pasoCarrusel(), behavior: "smooth" }); // una foto a la derecha
    });

    // Al cargar, deja la 2ª foto al centro (como en el diseño de Figma)
    carruselFotos.scrollTo({ left: pasoCarrusel(), behavior: "instant" });
}


/* =====================================================================
   3. GALERÍA INFINITA (solo en galeria.html)
   Cómo funciona, en simple:
   1) Carga las fotos y anota la forma de cada una (vertical u horizontal).
   2) Las reparte en 8 columnas para que todas queden de un alto parecido.
      Ese bloque de 8 columnas es una "baldosa".
   3) Pone 4 copias de la baldosa (2 arriba y 2 abajo) dentro del "mundo".
   4) Al arrastrar, mueve el mundo. Cuando avanzas una baldosa completa,
      vuelve sin que se note: por eso parece infinito.
   ===================================================================== */

const lienzo = document.querySelector(".lienzo");

// Solo se ejecuta si la página tiene el lienzo de la galería
if (lienzo) {

    const mundo = document.querySelector(".mundo");
    const textoCargando = document.querySelector(".cargando");
    const contador = document.querySelector(".contador");
    const visor = document.querySelector(".visor");
    const visorFoto = document.querySelector(".visor-foto");
    const visorCerrar = document.querySelector(".visor-cerrar");


    /* =====================================================================
       3.1 CARGAR LAS FOTOS
       ===================================================================== */

    // Intenta cargar una foto probando cada extensión. Devuelve sus datos, o null si no existe.
    function cargarFoto(numero) {
        return new Promise(function (listo) {
            let intento = 0;
            const prueba = new Image();

            prueba.onload = function () {
                listo({
                    numero: numero,
                    src: prueba.src,
                    proporcion: prueba.naturalWidth / prueba.naturalHeight // mayor que 1 = horizontal
                });
            };

            prueba.onerror = function () {
                intento++;
                if (intento < EXTENSIONES.length) {
                    prueba.src = CARPETA_FOTOS + "img" + numero + EXTENSIONES[intento]; // prueba la siguiente extensión
                } else {
                    console.warn("No se encontró img" + numero); // aviso en la consola (F12)
                    listo(null);
                }
            };

            prueba.src = CARPETA_FOTOS + "img" + numero + EXTENSIONES[0];
        });
    }

    // Desordena una lista al azar (método de Fisher-Yates)
    function mezclar(lista) {
        for (let i = lista.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [lista[i], lista[j]] = [lista[j], lista[i]];
        }
        return lista;
    }


    /* =====================================================================
       3.2 ARMAR LA BALDOSA
       ===================================================================== */

    // Decide qué tan ancha va cada foto según su forma (medido en anchos de columna)
    function anchoSegunForma(proporcion) {
        if (proporcion > 1.15) return 1.6;  // horizontal: más ancha (sobresale un poco de su columna)
        if (proporcion > 0.85) return 1.2;  // casi cuadrada
        return 1;                           // vertical
    }

    // Reparte las fotos en columnas: cada foto va a la columna que esté más bajita en ese momento
    function repartir(fotos) {
        const columnas = [];
        const altos = [];

        for (let c = 0; c < COLUMNAS; c++) {
            columnas.push([]);
            altos.push(0); // todas parten vacías
        }

        fotos.forEach(function (foto) {
            const ancho = anchoSegunForma(foto.proporcion);
            const alto = ancho / foto.proporcion;
            const masBajita = altos.indexOf(Math.min(...altos)); // número de la columna más bajita
            columnas[masBajita].push({ ...foto, ancho: ancho });
            altos[masBajita] += alto + SEPARACION;
        });

        return columnas;
    }

    // Crea el HTML de una baldosa (8 columnas con sus fotos)
    function crearBaldosa(columnas) {
        const baldosa = document.createElement("div");
        baldosa.className = "baldosa";

        columnas.forEach(function (fotosDeColumna, c) {
            const columna = document.createElement("div");
            columna.className = "columna-galeria";
            // Desfase: la columna sube (margen negativo arriba) y devuelve ese espacio abajo.
            // Así cada columna queda corrida, pero entre una copia y la siguiente no se abre un hueco.
            // Usa el ancho de columna del CSS, así se mantiene proporcional en el celular.
            const desfase = DESFASES[c % DESFASES.length];
            columna.style.marginTop = "calc(var(--col) * -" + desfase + ")";
            columna.style.marginBottom = "calc(var(--col) * " + desfase + ")";

            fotosDeColumna.forEach(function (foto) {
                const img = document.createElement("img");
                img.src = foto.src;
                img.alt = "Foto tomada por Martina";
                img.draggable = false;                                  // evita que el navegador "arrastre" la imagen
                img.decoding = "async";                                 // la decodifica sin trabar la página
                img.style.width = (foto.ancho * 100) + "%";             // ancho según su forma
                img.style.aspectRatio = String(foto.proporcion);        // alto según su forma real (sin recortarla)
                img.dataset.numero = foto.numero;
                columna.append(img);
            });

            baldosa.append(columna);
        });

        return baldosa;
    }

    // Pone 4 copias de la baldosa: 2 en la fila de arriba y 2 en la de abajo
    function llenarMundo(baldosa) {
        for (let f = 0; f < 2; f++) {
            const fila = document.createElement("div");
            fila.className = "fila-mundo";
            fila.append(baldosa.cloneNode(true), baldosa.cloneNode(true));
            mundo.append(fila);
        }
        // Las copias no son importantes para lectores de pantalla (solo la primera)
        mundo.querySelectorAll(".baldosa").forEach(function (b, i) {
            if (i > 0) b.setAttribute("aria-hidden", "true");
        });
    }


    /* =====================================================================
       3.3 MOVER EL MUNDO (arrastrar, rueda del mouse y teclado)
       ===================================================================== */

    let anchoBaldosa = 0;  // se mide cuando la baldosa ya existe
    let altoBaldosa = 0;

    const meta = { x: 0, y: 0 };    // a dónde queremos llegar
    const actual = { x: 0, y: 0 };  // dónde está ahora (se acerca a la meta suavemente)

    // "Da la vuelta" a un número para que siempre quede entre -tamaño y 0 (el truco del infinito)
    function darVuelta(valor, tamano) {
        return ((valor % tamano) + tamano) % tamano - tamano;
    }

    // Se repite en cada cuadro de animación (unas 60 veces por segundo)
    function animar() {
        const suavidad = reducirMovimiento ? 1 : 0.12; // qué tan rápido alcanza la meta (1 = de golpe)
        actual.x += (meta.x - actual.x) * suavidad;
        actual.y += (meta.y - actual.y) * suavidad;

        if (anchoBaldosa > 0 && altoBaldosa > 0) {
            const x = darVuelta(actual.x, anchoBaldosa);
            const y = darVuelta(actual.y, altoBaldosa);
            mundo.style.transform = "translate(" + aRem(x) + "rem, " + aRem(y) + "rem)";
        }

        requestAnimationFrame(animar);
    }

    // --- Arrastrar con mouse o con el dedo ---
    let arrastrando = false;
    let inicioX = 0;
    let inicioY = 0;
    let ultimoX = 0;
    let ultimoY = 0;
    let fotoTocada = null; // la foto donde se empezó a presionar (para abrir el visor si no se arrastró)

    lienzo.addEventListener("pointerdown", function (e) {
        if (e.button !== 0) return; // solo clic izquierdo o dedo
        arrastrando = true;
        inicioX = ultimoX = e.clientX;
        inicioY = ultimoY = e.clientY;
        fotoTocada = e.target.tagName === "IMG" ? e.target : null;
        lienzo.classList.add("arrastrando");
    });

    window.addEventListener("pointermove", function (e) {
        if (!arrastrando) return;
        meta.x += e.clientX - ultimoX; // suma lo que se movió desde la última vez
        meta.y += e.clientY - ultimoY;
        ultimoX = e.clientX;
        ultimoY = e.clientY;
    });

    window.addEventListener("pointerup", function (e) {
        if (!arrastrando) return;
        arrastrando = false;
        lienzo.classList.remove("arrastrando");

        // Si casi no se movió, fue un clic: abre la foto en grande
        const distancia = Math.hypot(e.clientX - inicioX, e.clientY - inicioY);
        if (distancia < 6 && fotoTocada) {
            abrirVisor(fotoTocada);
        }
        fotoTocada = null;
    });

    // --- Rueda del mouse o trackpad ---
    lienzo.addEventListener("wheel", function (e) {
        e.preventDefault();  // evita que la página haga scroll normal
        meta.x -= e.deltaX;
        meta.y -= e.deltaY;
    }, { passive: false });

    // --- Flechas del teclado (accesibilidad) ---
    lienzo.addEventListener("keydown", function (e) {
        const paso = 200;
        if (e.key === "ArrowLeft") meta.x += paso;
        else if (e.key === "ArrowRight") meta.x -= paso;
        else if (e.key === "ArrowUp") meta.y += paso;
        else if (e.key === "ArrowDown") meta.y -= paso;
        else return;
        e.preventDefault();
    });


    /* =====================================================================
       3.4 VISOR (foto en grande)
       ===================================================================== */

    function abrirVisor(img) {
        visorFoto.src = img.src;
        visorFoto.alt = img.alt;
        visor.showModal(); // <dialog> se abre encima de todo sin necesidad de position
    }

    visorCerrar.addEventListener("click", function () {
        visor.close();
    });

    // Si haces clic fuera de la foto (en el fondo oscuro), se cierra
    visor.addEventListener("click", function (e) {
        if (e.target === visor) visor.close();
    });


    /* =====================================================================
       3.5 EMPEZAR
       ===================================================================== */

    async function empezar() {
        // Carga todas las fotos y va mostrando el porcentaje
        let cargadas = 0;
        const promesas = [];
        for (let n = 1; n <= TOTAL_FOTOS; n++) {
            promesas.push(cargarFoto(n).then(function (foto) {
                cargadas++;
                textoCargando.textContent = Math.round((cargadas / TOTAL_FOTOS) * 100) + "%";
                return foto;
            }));
        }

        let fotos = (await Promise.all(promesas)).filter(Boolean); // quita las que no se encontraron
        if (MEZCLAR) fotos = mezclar(fotos);

        contador.textContent = fotos.length + " fotos";

        if (fotos.length === 0) {
            textoCargando.textContent = "No se encontraron fotos en " + CARPETA_FOTOS;
            return;
        }

        // Arma la baldosa y sus copias
        llenarMundo(crearBaldosa(repartir(fotos)));
        textoCargando.remove();
        lienzo.classList.remove("cargando-fotos");

        // Mide la baldosa (y la vuelve a medir si cambia el tamaño de la ventana)
        const primeraBaldosa = mundo.querySelector(".baldosa");
        function medir() {
            anchoBaldosa = primeraBaldosa.offsetWidth;
            altoBaldosa = primeraBaldosa.offsetHeight;
        }
        medir();
        new ResizeObserver(medir).observe(primeraBaldosa);

        // Posición inicial: un poco hacia adentro, para que no parta pegado a la esquina
        meta.x = actual.x = -anchoBaldosa * 0.3;
        meta.y = actual.y = -altoBaldosa * 0.15;

        requestAnimationFrame(animar);
    }

    empezar();
}
