Documentación README.md para Solemne 02 interfaces web

	1. Prototipo figma
	2. Herramientas usadas que hacen el trabajo más cómodo o práctico
	3. Escritura de código .html
	4. Redacción del prompt para la IA para .css
	5. Resultado final

---

# Documentación personal Solemne 02

## 1. Prototipo figma

Esta es una página de un evento ficticio de música electrónica, llamado RUIDO/0 SESSIONS el cual tiene la premisa de ser sesiones más que conciertos en sí, donde la gente comparte espacio con el dj.

Los colores que se usaron fueron rojo, blanco, gris y negro, para elementos destacados se usó el color rojo como el lineup.
La estructura de la página es: un header, una portada, una descripción que va de inmediato abajo de la portada, un lineup, un apartado de "descubrir sesiones" para que la gente pueda revisar sesiones de los djs, la sección de las fechas del evento, sección de escuchar y un footer en el cual se encuentra una opcion para volver al inicio, auspiciadores y el instagram.

[imágenes figma]

## 2. Herramientas que hacen el trabajo más práctico

### Hack.md

El primer paso fue crear un espacio en el que pudiéramos trabajar de manera paralela por lo que encontré este editor de texto que va guardando casi cómo un Google docs, pero en formato markdown, lo cuál lo hace mucho más cómodo para escribir código. ¿por qué no hacerlo directamente en GitHub? porque si bien, este trabaja por medio de control de versiones, no se puede trabajar de manera simultánea. Así que es una buena opción por el tiempo y para no tener que estar esperando a que una persona termine de escribir una parte del código, etc.

La plataforma o editor más bien se llama: HackMD, adjunto de todas maneras el link a la carpeta acá para que puedan ver el proceso:
 
[Nuestro espacio de trabajo](https://hackmd.io/join/r1iG4-n2Gx)

### Links para la página web

Sitios donde encontré íconos para la pagina:

https://www.svgrepo.com/

https://www.flaticon.es/

### Material complementario

#### PDFS:

* Clase 07 

* Material de apoyo

* Rúbrica solemne 02

#### GitHub:

Clase-03: prompts de Janis para pedir CSS a la IA

#### Links y material de ayuda:

Para hacer el carrusel > https://www.w3schools.com/howto/howto_js_slideshow.asp (enviado por Natassja)

### Gemini y Claude

Para preguntas específicas, ayuda con escritura de etiquetas, problemas, revisión y arreglos en el código.

## Código .HTML

* Lo primero primerísimo en el código es colocar la estructura base del archivo HTML, que este se realiza automático con el comando "alt + ! y tab", y así solo modificamos lo editable.

La estructura generada automáticamente del `head` tiene por defecto el idioma en inglés, por lo que debemos cambiarlo en el atributo de `lang`al español.

El título que se visualizará en la barra superior del navegador se hace también en el head: `<title>RUIDO/0 SESSIONS</title>`.

Terminado este espacio del `<head>`, comencemos a escribir el cuerpo y esto se hace en el `<body>`.

Dentro del cuerpo del HTML deben ir por lo menos 3 cosas: el header, el main y el footer, en ese orden respectivamente.

Para crear esta sección tomé de referencia el último código trabajado en clases (actividad 03), en el *header* coloqué la estructura `<nav> con ul > li > a` para crear el menú que navega hacia distintas secciones del sitio. Y que además nos va a aparecer enlistado hacia abajo, pero no importa porque luego eso se arregla en el CSS.

Luego en el *<main>* lo que haremos será empezar a dividir por secciones, en nuestra página contamos con 4 secciones,`<section class="hero"></section>` y esta corresponde a la portada.

* Problemas que tuve: se me ocurrió hacer el logo en canvas y no me di cuenta que para exportar en formato svg te pide premium, así que quedó en formato png.

* El lineup:

```cpp
<!-- Componente 2: Lineup -->
        <section id="LINEUP" class="seccion-lineup">
            <h2>LINEUP</h2>

            <ul class="lineup-container">
                <li class="artist-name">FOLAMOUR</li>
                <li class="artist-name">MALL GRAB</li>

                <li class="artist-name">OVERMONO</li>
                <li class="artist-name">JAYDA G</li>

                <li class="artist-name">SALUTE</li>
                <li class="artist-name">TSHA</li>
                <li class="artist-name">HAAI</li>

                <li class="artist-name">JOJO LORENZO</li>
                <li class="artist-name">TINZO</li>

                <li class="artist-name">VTSS</li>
                <li class="artist-name">CC:DISCO</li>
            </ul>
        </section>

Aquí la lógica es hacer un listado con <ul> con los nombres de los djs:

<section id="LINEUP" class="seccion-lineup">
            <h2>LINEUP</h2>
 
            <ul class="lineup-container">

```

Separé los listados cada dos para los headliners y para los sub-headliners, de a 2, de a 3 y de a 2 para organizarlos luego como aparecían en el prototipo de figma.

La jerarquización es por el "reconocimiento" de los djs, de más a menos.

En el caso de que no se conozca a alguno de los djs hay un apartado justamente debajo del lineup para descubrir a cada uno de los djs. 
Este es el de:

* Descubre las sesiones

Este la idea era que quedase en un tipo de carrusel y que las flechas que colocamos a los costados funcionen como botones para recorrer por las miniaturas de los videos.
Cada una de las imágenes re dirigen a links de Youtube.

* Problema que tuve: esto pasó realizando ya el css, pero el carrusel incluyó unas flechas automáticas con una barra de deslizamiento. Esto les pedí a mis compañeras que lo solucionaran para que hicieran funcionar los botones.

Luego sigue la sección de las fechas

```cpp
        <!-- Componente 4: Fechas -->
        <section id="FECHAS" class="fechas">
            <h2>FECHAS</h2>
            <h3>NOVIEMBRE 2026 <br> ESPACIO RIESCO, SANTIAGO</h3>

            <div class="grilla-fechas">

                <article class="fecha-dia">
                    <h4>14 NOV | SÁBADO</h4>
                    <p class="genero">HOUSE / DISCO</p>
                    <ul class="horarios">
                        <li>22:00 — JAYDA G</li>
                        <li>00:00 — FOLAMOUR</li>
                        <li>01:30 — CC:DISCO</li>
                    </ul>
                </article>

                <article class="fecha-dia">
                    <h4>15 NOV | DOMINGO</h4>
                    <p class="genero">DANCE / HOUSE</p>
                    <ul class="horarios">
                        <li>21:30 — TSHA</li>
                        <li>23:00 — SALUTE</li>
                        <li>01:00 — DJ SEINFELD</li>
                    </ul>
                </article>

                <article class="fecha-dia">
                    <h4>16 NOV | LUNES</h4>
                    <p class="genero">BOOK CLUB NIGHT</p>
                    <ul class="horarios">
                        <li>21:00 — TINZO</li>
                        <li>23:00 — JOJO LORENZO</li>
                        <li>01:00 — MALL GRAB</li>
                    </ul>
                </article>

                <article class="fecha-dia">
                    <h4>23 NOV | LUNES</h4>
                    <p class="genero">CLUB TECHNO & EXPERIMENTAL</p>
                    <ul class="horarios">
                        <li>21:00 — HAAI</li>
                        <li>22:30 — OVERMONO</li>
                        <li>00:30 — VTSS</li>
                    </ul>
                </article>

                <p>PRÓXIMAMENTE VENTA DE ENTRADAS VÍA</p>
                <img src="assets/punto-ticket.png" alt="Punto Ticket">

            </div>
        </section>

```

Los djs se separaron en 4 días por estilos musicales.

Para los días usé <article class="fecha-dia">

Y realicé la jerarquización así

Se le asigna <h2> a las fechas: <h2>FECHAS</h2>

<h3> al lugar del evento

y <h4> a las fechas como tal

luego dentro de los <h4> está el listado de los djs por cada día

* escuchar

* footer

---

Al finalizar el html le pedí a la IA que me hiciera un "roast me" o tipo auditara el código para saber si es que me estaba perdiendo de puntos específicos de la rúbrica.

## Consulta IA: Realizar un roast del código html final

### **Prompt usado:**
> Necesito que me ayudes auditando o haciendo un "roast" de este código de html que he escrito, considerando la rúbrica que te envío en este mismo mensaje.  Dime si es que identificas errores, inconsistencias o cualquier punto que deba corregir, para poder comenzar con el css.

### **Feedback:**
> Tu código HTML tiene una base excelente y cumple a la perfección con los requisitos del **Criterio 5: Estructura HTML5** para obtener el puntaje "Logrado". Utilizas correctamente las etiquetas semánticas obligatorias (`<header>`, `<main>` y `<footer>`) y cuentas con cinco etiquetas `<section>`, superando el mínimo exigido de dos.

Antes de pasar a tu hoja de estilos, debes corregir los siguientes detalles estructurales:

**Errores críticos de sintaxis**

* **Enlaces de YouTube mal formados:** En la sección "Descubre las sesiones", los atributos `href` de tus etiquetas `<a>` contienen sintaxis de Markdown mezclada con HTML. Actualmente dicen `href="[enlace](enlace)"`. Debes borrar los corchetes y paréntesis, dejando únicamente la URL limpia (ejemplo: `href="[https://www.youtube.com/watch?v=IMijKmhuA7E](https://www.youtube.com/watch?v=IMijKmhuA7E)..."`).
* **Anclas de navegación desconectadas:** En tu `<nav>` principal, los enlaces están apuntando a la nada (`href="#"`). Para que al hacer clic la página haga *scroll* hacia la sección correspondiente, debes enlazar los atributos `id` que ya creaste. Cambia `<a href="#">LINEUP</a>` por `<a href="#LINEUP">`, y repite la lógica con `#FECHAS` y `#ESCUCHAR`.

**Aciertos estructurales**

* Tienes un excelente uso de la etiqueta `<article>` para modular el contenido independiente, como los días del festival, las tarjetas de sesiones y los tracks de música.
* Todas tus etiquetas `<img>` incluyen el atributo `alt` describiendo la imagen, lo cual es una excelente práctica de accesibilidad y orden.

**Próximos pasos para CSS**
Para comenzar a trabajar en el **Criterio 6: Estilos CSS**, tu primer paso debe ser conectar este documento con tu archivo externo. Recuerda insertar la etiqueta `<link rel="stylesheet" href="nombre-de-tu-archivo.css">` dentro del `<head>` para poder aplicar Flexbox y los colores de Figma como exige la rúbrica.

4. CSS asistido con IA

5. Resultado final
