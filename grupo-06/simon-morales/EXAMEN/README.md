**Descripción proyecto:
Portafolio con selección de trabajos destacados de diseño gráfico, diseño editorial y motion graphics.

**Trabajos:
Melovenus (2024)
Anexo (2025)
Ediciones Remolino (2025)
Yungay (2026)
Marea (2026)

**Referentes:
https://visuelle.co.uk/ ==> efecto imágenes hover
https://millermccormick.com/info ==> estética dibujos
https://daria-stolyarova.com/ ==> botón de contact
https://bydmb.com/` ==> transiciones entre páginas

**Link de Figma: https://www.figma.com/design/ajPwUyZBkSguejDumhRU7a/Portafolio-Examen-Int-Web-ALTA?node-id=8-51&t=fQAdSUyOcO12TRzB-1

**LINK SITIO WEB: https://semc06.github.io/zusooe-portafolio/


9/11
***¿Qué hice en el sitio?
Hice los wireframes de baja resolución en Figma para la página de inicio y about, a la vez de conformar un UI kit

***¿Qué dificultades tuve y cómo las resolví? (Indica qué recursos usaste: IA, MDN, material
complementario entregado en clase, compañeros, ayudante, etc.)
Tuve dificultades en la creación de botones para cada uno de los proyectos, pero logré resolverlo por mí mismo. También tuve dificultades en la búsqueda de referentes, lo que resolví por medio de Cosmos y Behance

***¿Qué aprendí?
Aprendí a generar mejores guías para las mesas de trabajo en Figma, además de que, por medio de los referentes, pude conocer maneras nuevas de disponer elementos en páginas web, estilos de cursor, objetos 3D, etc.



16/11
***¿Qué hice en el sitio?
Corregí los wireframes de baja calidad en base a correciones sobre la navegación en el sitio, creando así una página estilo catálogo y páginas individuales para cada proyecto, así estando más ordenada la información.

***¿Qué dificultades tuve y cómo las resolví? (Indica qué recursos usaste: IA, MDN, material
complementario entregado en clase, compañeros, ayudante, etc.)
Tuve complicaciones con la creación de componentes del banner, esto por el uso de Auto-Layout. Solucioné esto mediante tutoriales de Youtube e intentos varios.

***¿Qué aprendí?
Aprendí a ordenar mejor los componentes dentro de la página web y ordenar las secciones con Auto-Layout.


21/11
***¿Qué hice en el sitio?
Programé los archivos de la página y corregí los wireframes de alta calidad según las posibilidades que se me dieron en la construcción del sitio web, descartando así los carruseles por proyecto y en cambio colocando las imágenes sueltas para otorgar mayor visualización de las piezas gráficas, también descartando el botón de cambiar idioma.

***¿Qué dificultades tuve y cómo las resolví? (Indica qué recursos usaste: IA, MDN, material
complementario entregado en clase, compañeros, ayudante, etc.)
Tuve complicaciones en el uso de css y sus propiedades, especialmente cuando se usan imagenes, también se me dificultó la implementación de videos y un poco el uso de Javascript. Lo resolví mediante el uso de IA, revisando material de clase (actividades hechas en clase y material complementario) y viendo tutoriales de YouTube.

Tutoriales revisados:
https://www.youtube.com/watch?v=_gKEUYarehE
https://www.youtube.com/watch?v=SpUoe5_VqcU
https://www.youtube.com/watch?v=xYznKvatw9I


## Consulta IA: Galería proyecto individual

**Código antes:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../styles.css">
<title>Cositas — Portafolio Zusooe</title>
</head>
<style>
body {
background-image: url("../assets/papel-4-azul.png");
background-repeat: no-repeat;
background-attachment: fixed;
}
</style>

<body>

<header class="encabezado">
<nav>
<ul class="navegador">
<li><a href="../index.html">Inicio</a></li>
<li><a href="../cositas.html">Cositas c:</a></li>
<li><a href="../sobremi.html">Sobre mí</a></li>
</ul>
</nav>
</header>

<main>
<section id="info-proyecto" class="secciones">
<nav class="breadcrumbs" aria-label="ruta-de-navegacion">
<a href="../index.html">Inicio</a> / <a href="../cositas.html">Cositas c:</a> / <span>Melovenus</span>
</nav>

<h2 class="titulo-pagina">Melovenus</h2>
<h3>Desde 2023</h3>
<div class="info-proyectoconimagen1">
<p>Proyecto de <strong>visualización de datos y Motion Graphics</strong> con enfoque en la industria del K-POP.
Trabajo independiente realizado con After Effects, Adobe Premiere y Photoshop, acompañado de código simple y automatización.</p>
<img class="proyecto-imagen1" src="../assets/melovenus1.png" alt="Proyecto Melovenus 1">
</div>
<div class="mas-imagenes">
<img class="proyecto-imagen2" src="../assets/melovenus2.png" alt="Proyecto Melovenus 2">
<img class="proyecto-imagen2" src="../assets/melovenus3.png" alt="Proyecto Melovenus 3">
</div>

</section>
</main>

<footer>
<div class="footer-info">
<p><a href="../index.html">Inicio</a></p>
<p><a href="../cositas.html">Cositas c:</a></p>
<p><a href="../sobremi.html">Sobre mí</a></p>
<p><a href="../sobremi.html#contacto">Contacto</a></p>
</div>
</footer>

</body>
</html>

```

```css

.info-proyectoconimagen1 {
width: 100%;
display: flex;
padding-top: 4rem;
gap: 4rem;
}

.titulo-pagina {
padding-bottom: 0rem;
}

.proyecto-imagen1 {
max-height: 30rem;
object-fit: cover;
}

.mas-imagenes {
width: 100%;
display: flex;
gap: 4rem;
padding-top: 4rem;
}

.proyecto-imagen2 {
width: 32vw;
object-fit: cover;
align-items: center;
}

```

**Prompt usado:**
> ¿Cómo puedo mejorar el código de esta página? Quiero que haya una imagen principal al lado del texto y abajo las demás imagenes del proyecto. Quiero que, además de arreglar temas de oficio digital, hacer responsive la página, y que me ayudes a alinear las imagenes de abajo con el contenido de arriba me ayudes a generar la opción de hacer click en alguna de las imágenes y que esta se haga más grande por encima del contenido de la página.

**Código después:**
```html

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles.css">
    <title>Melovenus — Portafolio Zusooe</title>
</head>
<body class="fondo-papel">

    <header class="encabezado">
        <nav>
            <ul class="navegador">
                <li><a href="../index.html">Inicio</a></li>
                <li><a href="../cositas.html">Cositas c:</a></li>
                <li><a href="../sobremi.html">Sobre mí</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="info-proyecto" class="seccion-proyecto">
            <nav class="breadcrumbs" aria-label="Ruta de navegación">
                <a href="../index.html">Inicio</a> / <a href="../cositas.html">Cositas c:</a> / <span>Melovenus</span>
            </nav>

            <header class="cabecera-proyecto">
                <h1 class="titulo-proyecto">MELOVENUS</h1>
                <p class="fecha-proyecto">Desde 2023</p>
            </header>

            <!-- Bloque superior: Texto a la izquierda + Imagen principal a la derecha -->
            <div class="info-proyectoconimagen1">
                <div class="descripcion-proyecto">
                    <p>Proyecto de <strong>visualización de datos y Motion Graphics</strong> con enfoque en la industria del K-POP. Trabajo independiente realizado con After Effects, Adobe Premiere y Photoshop, acompañado de código simple y automatización.</p>
                </div>
                <div class="contenedor-imagen-principal">
                    <img class="proyecto-imagen1 imagen-ampliable" src="../assets/melovenus1.png" alt="Visualización de datos Melovenus — pantalla principal">
                </div>
            </div>

            <!-- Galería inferior: Alineada exactamente con el bloque de arriba -->
            <div class="mas-imagenes">
                <img class="proyecto-imagen2 imagen-ampliable" src="../assets/melovenus2.png" alt="Detalle de interfaz Melovenus 2">
                <img class="proyecto-imagen2 imagen-ampliable" src="../assets/melovenus3.png" alt="Detalle de interfaz Melovenus 3">
            </div>
        </section>
    </main>

    <!-- Visor Lightbox para ampliar imágenes -->
    <div id="lightbox" class="lightbox" aria-hidden="true" role="dialog">
        <button id="lightbox-cerrar" class="lightbox-cerrar" aria-label="Cerrar imagen">&times;</button>
        <img id="lightbox-img" class="lightbox-contenido" src="" alt="">
    </div>

    <footer>
        <div class="footer-info">
            <p><a href="../index.html">Inicio</a></p>
            <p><a href="../cositas.html">Cositas c:</a></p>
            <p><a href="../sobremi.html">Sobre mí</a></p>
            <p><a href="../sobremi.html#contacto">Contacto</a></p>
        </div>
    </footer>

    <script>
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const btnCerrar = document.getElementById('lightbox-cerrar');
        const imagenes = document.querySelectorAll('.imagen-ampliable');

        imagenes.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('activo');
                lightbox.setAttribute('aria-hidden', 'false');
            });
        });

        function cerrarLightbox() {
            lightbox.classList.remove('activo');
            lightbox.setAttribute('aria-hidden', 'true');
        }

        btnCerrar.addEventListener('click', cerrarLightbox);

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) cerrarLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('activo')) {
                cerrarLightbox();
            }
        });
    </script>

</body>
</html>

```

```css
/* =========================================
   PROYECTO INDIVIDUAL (proyectos/*.html)
   ========================================= */
.seccion-proyecto {
  width: 100%;
  padding: 2rem 4.5rem 6rem;
  display: flex;
  flex-direction: column;
}

.breadcrumbs {
  text-align: center;
  font-size: 1rem;
  color: #6B6B83;
  margin-bottom: 2.5rem;
}

.breadcrumbs a:hover {
  font-size: 100%; /* Evita el salto de tamaño del hover global */
  opacity: 0.6;
}

.cabecera-proyecto {
  margin-bottom: 2.5rem;
}

.titulo-proyecto {
  margin: 0;
  width: 100%;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.05;
  text-align: left;
}

.fecha-proyecto {
  margin: 0.25rem 0 0 0;
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  font-weight: 400;
  opacity: 0.85;
}

/* Grilla superior: 1 parte de texto a la izquierda, 2.2 partes de imagen a la derecha */
.info-proyectoconimagen1 {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2.2fr;
  gap: 3rem;
  align-items: start;
}

.descripcion-proyecto p {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

.contenedor-imagen-principal {
  width: 100%;
}

.proyecto-imagen1 {
  width: 100%;
  height: auto;
  max-height: 34rem;
  object-fit: cover;
  display: block;
}

/* Galería inferior: 2 columnas iguales alineadas con los bordes de arriba */
.mas-imagenes {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-top: 3rem;
}

.proyecto-imagen2 {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}

/* Interacción hover en imágenes ampliables */
.imagen-ampliable {
  cursor: zoom-in;
  transition: transform 0.35s ease, opacity 0.35s ease;
}

.imagen-ampliable:hover {
  transform: scale(1.015);
  opacity: 0.92;
}

/* =========================================
   VISOR LIGHTBOX (Imagen ampliada)
   ========================================= */
.lightbox {
  position: fixed;
  inset: 0;
  background-color: rgba(30, 30, 30, 0.85);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.lightbox.activo {
  opacity: 1;
  pointer-events: auto;
}

.lightbox-contenido {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  transform: scale(0.95);
  transition: transform 0.3s ease;
}

.lightbox.activo .lightbox-contenido {
  transform: scale(1);
}

.lightbox-cerrar {
  position: absolute;
  top: 1.5rem;
  right: 2.5rem;
  background: none;
  border: none;
  color: #DCDCFA;
  font-size: 3rem;
  line-height: 1;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.lightbox-cerrar:hover {
  opacity: 0.6;
}

```

```js
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const btnCerrar = document.getElementById('lightbox-cerrar');
const imagenes = document.querySelectorAll('.imagen-ampliable');

if (lightbox && lightboxImg && btnCerrar) {
    imagenes.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('activo');
            lightbox.setAttribute('aria-hidden', 'false');
        });
    });

    function cerrarLightbox() {
        lightbox.classList.remove('activo');
        lightbox.setAttribute('aria-hidden', 'true');
    }

    btnCerrar.addEventListener('click', cerrarLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) cerrarLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('activo')) {
            cerrarLightbox();
        }
    });
}

```


## Consulta IA: Imagenes verticales galería inferior

**Código antes:**
```css
.seccion-proyecto {
  width: 100%;
  padding: 2rem 4.5rem 6rem;
  display: flex;
  flex-direction: column;
}

.breadcrumbs {
  text-align: center;
  font-size: 1rem;
  color: #6B6B83;
  margin-bottom: 2.5rem;
}

.breadcrumbs a:hover {
  font-size: 100%; /* Evita el salto de tamaño del hover global */
  opacity: 0.6;
}

.cabecera-proyecto {
  margin-bottom: 2.5rem;
}

.titulo-proyecto {
  margin: 0;
  width: 100%;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.05;
  text-align: left;
}

.fecha-proyecto {
  margin: 0.25rem 0 0 0;
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  font-weight: 400;
  opacity: 0.85;
}

/* Grilla superior: 1 parte de texto a la izquierda, 2.2 partes de imagen a la derecha */
.info-proyectoconimagen1 {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2.2fr;
  gap: 3rem;
  align-items: start;
}

.descripcion-proyecto p {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

.contenedor-imagen-principal {
  width: 100%;
}

.proyecto-imagen1 {
  width: 100%;
  height: auto;
  max-height: 34rem;
  object-fit: cover;
  display: block;
}

/* Galería inferior: 2 columnas iguales alineadas con los bordes de arriba */
.mas-imagenes {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-top: 3rem;
}

.proyecto-imagen2 {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}

/* Interacción hover en imágenes ampliables */
.imagen-ampliable {
  cursor: zoom-in;
  transition: transform 0.35s ease, opacity 0.35s ease;
}

.imagen-ampliable:hover {
  transform: scale(1.015);
  opacity: 0.92;
}

/* =========================================
   VISOR LIGHTBOX (Imagen ampliada)
   ========================================= */
.lightbox {
  position: fixed;
  inset: 0;
  background-color: rgba(30, 30, 30, 0.85);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.lightbox.activo {
  opacity: 1;
  pointer-events: auto;
}

.lightbox-contenido {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  transform: scale(0.95);
  transition: transform 0.3s ease;
}

.lightbox.activo .lightbox-contenido {
  transform: scale(1);
}

.lightbox-cerrar {
  position: absolute;
  top: 1.5rem;
  right: 2.5rem;
  background: none;
  border: none;
  color: #DCDCFA;
  font-size: 3rem;
  line-height: 1;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.lightbox-cerrar:hover {
  opacity: 0.6;
}

```

**Prompt usado:**
> En la galería inferior también voy a agregar imagenes verticales, cómo puedo hacer para que no se deformen? explícame

**Código después:**
```css
/* Galería inferior: respeta la proporción natural de cada imagen */
.mas-imagenes {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-top: 3rem;
  align-items: start; /* Evita que Grid estire una imagen para igualar la altura de la otra */
}

.proyecto-imagen2 {
  width: 100%;
  height: auto;       /* Calcula el alto automáticamente según la proporción original */
  display: block;
}
```


## Consulta IA: Imagenes verticales muy grandes

**Código antes:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles.css">
    <title>Melovenus — Portafolio Zusooe</title>
</head>
<body class="fondo-papel">

    <header class="encabezado">
        <nav>
            <ul class="navegador">
                <li><a href="../index.html">Inicio</a></li>
                <li><a href="../cositas.html">Cositas c:</a></li>
                <li><a href="../sobremi.html">Sobre mí</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="info-proyecto" class="seccion-proyecto">
            <nav class="breadcrumbs" aria-label="Ruta de navegación">
                <a href="../index.html">Inicio</a> / <a href="../cositas.html">Cositas c:</a> / <span>Melovenus</span>
            </nav>

            <header class="cabecera-proyecto">
                <h1 class="titulo-proyecto">MELOVENUS</h1>
                <p class="fecha-proyecto">Desde 2023</p>
            </header>

            <!-- Bloque superior: Texto a la izquierda + Imagen principal a la derecha -->
            <div class="info-proyectoconimagen1">
                <div class="descripcion-proyecto">
                    <p>Proyecto de <strong>visualización de datos y Motion Graphics</strong> con enfoque en la industria del K-POP. Trabajo independiente realizado con After Effects, Adobe Premiere y Photoshop, acompañado de código simple y automatización.</p>
                </div>
                <div class="contenedor-imagen-principal">
                    <img class="proyecto-imagen1 imagen-ampliable" src="../assets/melovenus1.png" alt="Visualización de datos Melovenus — pantalla principal">
                </div>
            </div>

            <!-- Galería inferior: Alineada exactamente con el bloque de arriba -->
            <div class="mas-imagenes">
                <img class="proyecto-imagen2 imagen-ampliable" src="../assets/melovenus2.png" alt="Detalle de interfaz Melovenus 2">
                <img class="proyecto-imagen2 imagen-ampliable" src="../assets/melovenus3.png" alt="Detalle de interfaz Melovenus 3">
            </div>
        </section>
    </main>

    <!-- Visor Lightbox para ampliar imágenes -->
    <div id="lightbox" class="lightbox" aria-hidden="true" role="dialog">
        <button id="lightbox-cerrar" class="lightbox-cerrar" aria-label="Cerrar imagen">&times;</button>
        <img id="lightbox-img" class="lightbox-contenido" src="" alt="">
    </div>

    <footer>
        <div class="footer-info">
            <p><a href="../index.html">Inicio</a></p>
            <p><a href="../cositas.html">Cositas c:</a></p>
            <p><a href="../sobremi.html">Sobre mí</a></p>
            <p><a href="../sobremi.html#contacto">Contacto</a></p>
        </div>
    </footer>

    <script>
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const btnCerrar = document.getElementById('lightbox-cerrar');
        const imagenes = document.querySelectorAll('.imagen-ampliable');

        imagenes.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('activo');
                lightbox.setAttribute('aria-hidden', 'false');
            });
        });

        function cerrarLightbox() {
            lightbox.classList.remove('activo');
            lightbox.setAttribute('aria-hidden', 'true');
        }

        btnCerrar.addEventListener('click', cerrarLightbox);

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) cerrarLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('activo')) {
                cerrarLightbox();
            }
        });
    </script>

</body>
</html>

```

```js

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const btnCerrar = document.getElementById('lightbox-cerrar');
const imagenes = document.querySelectorAll('.imagen-ampliable');

if (lightbox && lightboxImg && btnCerrar) {
    imagenes.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('activo');
            lightbox.setAttribute('aria-hidden', 'false');
        });
    });

    function cerrarLightbox() {
        lightbox.classList.remove('activo');
        lightbox.setAttribute('aria-hidden', 'true');
    }

    btnCerrar.addEventListener('click', cerrarLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) cerrarLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('activo')) {
            cerrarLightbox();
        }
    });
}

```

**Prompt usado:**
> Y si quiero añadir algún video dentro de esta galeria inferior

**Código después:**
```html
<!-- Galería inferior -->
<div class="mas-imagenes">
    <img class="proyecto-imagen2 imagen-ampliable" src="../assets/melovenus2.png" alt="Detalle de interfaz Melovenus 2">
    
    <!-- Video con la misma altura que las imágenes -->
    <video class="proyecto-imagen2 imagen-ampliable" src="../assets/Melovenus-reel.mp4" autoplay loop muted playsinline></video>
</div>
```
```html
<!-- Visor Lightbox para imágenes y videos -->
<div id="lightbox" class="lightbox" aria-hidden="true" role="dialog">
    <button id="lightbox-cerrar" class="lightbox-cerrar" aria-label="Cerrar vista ampliada">&times;</button>
    <img id="lightbox-img" class="lightbox-contenido" src="" alt="">
    <video id="lightbox-video" class="lightbox-contenido" controls playsinline></video>
</div>
```

```css
/* Oculta por defecto hasta que JS active el que corresponda */
#lightbox-img,
#lightbox-video {
  display: none;
}
```

```js
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxVideo = document.getElementById('lightbox-video');
const btnCerrar = document.getElementById('lightbox-cerrar');
const elementos = document.querySelectorAll('.imagen-ampliable');

if (lightbox && btnCerrar) {
    elementos.forEach(el => {
        el.addEventListener('click', () => {
            if (el.tagName === 'VIDEO' && lightboxVideo) {
                if (lightboxImg) lightboxImg.style.display = 'none';
                lightboxVideo.style.display = 'block';
                lightboxVideo.src = el.currentSrc || el.src;
                lightboxVideo.play();
            } else if (lightboxImg) {
                if (lightboxVideo) {
                    lightboxVideo.style.display = 'none';
                    lightboxVideo.pause();
                }
                lightboxImg.style.display = 'block';
                lightboxImg.src = el.src;
                lightboxImg.alt = el.alt;
            }
            lightbox.classList.add('activo');
            lightbox.setAttribute('aria-hidden', 'false');
        });
    });

    function cerrarLightbox() {
        lightbox.classList.remove('activo');
        lightbox.setAttribute('aria-hidden', 'true');
        if (lightboxVideo) {
            lightboxVideo.pause();
            lightboxVideo.src = '';
        }
    }

    btnCerrar.addEventListener('click', cerrarLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) cerrarLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('activo')) {
            cerrarLightbox();
        }
    });
}
```

***¿Qué aprendí?
Aprendí mucho de css y sus etiquetas, a importar tipografías y poder usarlas, a crear un modo oscuro usando javascript, usar colores como variables, a generar galerías de fotos y videos que se puedan hacer zoom por medio de javascript, a agregar iconos externos al sitio web y repasé contenido sobre media queries.
