# BAZR
## Link de figma:
https://www.figma.com/design/pzG5bZtHLw9pE1yLshPiK2/Horacio-Garc%C3%ADa-Jorge?node-id=1-3&t=i305Epk206d1zOoA-1
## Link página
https://horaciogarcia-cell.github.io/bzar/index.html

### Sobre el proyecto
El proyecto Bazar surge a través de un video de internet donde un usuario de Google maps marca diferentes cafeterías dentro de su ciudad y genera una ruta para conocerla, a través de estos registros, el usuario además expresaba su deseo por expandir estas rutas a otras ciudades, por lo que surgió la idea de realizar una página web que funcionara de una forma similar a este ejercicio. 

Bazr busca ser una recopilación de fotos, descripciones y comentarios de una ciudad, de forma que cuando otros usuarios lo deseen puedan acceder a esta información y descubrir lugares nuevos o incluso recordar lugares con los que ya han interactuado anteriormente, la página se compondrá de dos grandes apartados “Cafeterías con personalidad”, y “Gráfica Callejera”. Estos apartados serán similares a una galería de fotos, de cafeterías a lo largo de la ciudad, y de rincones, posters, fachadas, etc.

Como visión futura, espero poder ampliar este archivo digital a otras ciudades, haciendo un gran compilado de lugares, al que las personas puedan acceder.


La página funciona a través de cuatro secciones base permitirán al usuario responder las preguntas que se consideran importantes al momento de interactuar con la página, ¿Qué es BAZR?, ¿Cómo funciona?, ¿Qué contiene?.

- *Inicio*

- *Acerca de*

- *Gráfica callejera*

- *Cafeterías con personalidad*

## Moodboard
El moodboard explora la estética que se quiere utilizar dentro de la página, además de algunos botones que se quieren utilizar con ayuda de JavasScript

<img width="1920" height="1080" alt="Copia de Copia de moodboard 2026" src="https://github.com/user-attachments/assets/261f87d8-60db-4953-a62b-9ca8ff652a90" />

## Referentes

- [Cosmos](https://www.cosmos.so/)
  
  Cosmos fue parte importante del proceso de desarrollo tanto de la idea como de la estética que se desea incorporar en la página web, la página de inicio es uno de los referentes que se utilizó para pensar en la diagramación de la propia página de inicio de la página BAZR.
- [Are.na / MyMind](https://access.mymind.com/everything)

  MyMind funcionó como punto de referencia para realizar una galería de imágenes o un compilado de estas mismas, la forma de presentar los contenidos en Bazar, específicamente “Gráfica Callejera”, aspira a ser similar a la forma en que se presenta dentro del tablero de MyMind.
- [Awwwards](https://www.awwwards.com/)

  Awwwards fue un referente más específico, el botón que permite dar refresh que aparece en la parte inferior izquierda era una herramienta que quería implementar en la página web
- <img width="1000" height="500" alt="image" src="https://github.com/user-attachments/assets/f804684b-9508-444c-8d8a-4733da5ef985" />




## Uso de IA
**Proceso HTML**
## Prompt:

Ayúdame a crear el html paso a paso para no olvidar ningún apartado, comienzo con:
<!DOCTYPE html>
<html lang="es">
<head>
<title>BAZR</title>

Después de esto ya debería entrar con el body o aún faltan elementos dentro de el header?

## Respuesta:
Aún faltan elementos esenciales dentro de la etiqueta <head> antes de cerrarla y pasar al <body> (nota: el <header> va dentro del <body>, mientras que <head> es la cabecera de metadatos del documento).
Para que tu página BAZR se vea bien en celulares, cargue tildes/eñes sin errores y esté lista para estilos e íconos, asegúrate de incluir estas etiquetas dentro del <head>:
Paso 1: Completar el <head>
Codificación de caracteres (charset): Evita que las tildes o la "ñ" aparezcan como símbolos raros.
Diseño adaptable (viewport): Indispensable para que el sitio no se vea diminuto en dispositivos móviles.
Favicon (opcional): El ícono pequeño que aparece en la pestaña del navegador junto a "BAZR".
Hojas de estilo (CSS): Aquí enlazas tu archivo de estilos o tipografías (como Google Fonts).
Descripción (meta description): El resumen que muestra Google en los resultados de búsqueda.

A partir de mis apuntes de clase y otros ejercicios comencé a escribir el código, ¿puedes revisarlo para determinar si faltan contenidos?
<!DOCTYPE html>
<html lang="es">
<head>
  <title>BAZR</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!--CSS-->
  <link rel="stylesheet" href="Style.css">

  <!--Google Fonts-->
  <link rel="preeconect" href="https://fonts.googleapis.com">
  <link rel="preeconect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
</head>

<body>
    <!--Encabezado/Cabecera-->
    <header>
      <h1>BAZR.</h1>
      <nav>
        <a href="Index.html">Inicio</a>
        <!--Falta agregar flecha para regresar-->
      </nav>
    </header>

    <main>
      <!--Inicio-->
      <section>

        <h2>Siempre hay algo que descubrir</h2>
        <p>El lugar para quienes disfrutran EXPLORAR</p>

        <!--falta flecha de botón-->
        <button>EXPLORAR</button>

      </section>


      <!--ACERCA DE-->
      <section>
        <h2>ACERCA DE</h2>
        <P>Descubre lugares interesantes, rincones escondidos y detalles de la ciudad que quizás nunca habías notado.</P>
      </section>

    </main>

</body>

</html>


## Respuesta:
1. Correcciones técnicas en lo que ya escribiste
Error de ortografía en preconnect: Escribiste rel="preeconect" (con doble e y una c). Debe ser rel="preconnect" para que el navegador precargue las fuentes correctamente.

Mayúsculas en nombres de archivo y etiquetas:
En <a href="Index.html"> y href="Style.css", asegúrate de que los nombres coincidan exactamente con tus archivos reales (en la web se recomienda usar todo en minúsculas: index.html y style.css para evitar errores en servidores).
En la sección "ACERCA DE", escribiste <P> en mayúscula; aunque los navegadores lo entienden, por convención de HTML5 siempre se escribe en minúscula (<p>).
Error tipográfico en texto: En el primer párrafo dice "disfrutran" en lugar de "disfrutan".

## Prompt:

Revisa por favor este html y ayúdame a revisar si esta correcto para poder dar paso a aplicar los CSS, además explicame paso por paso en que se puede mejorar y cómo lo aplicarías.

## Respuesta:

1. Errores de sintaxis que debes corregir ya
Etiqueta <main> sin cerrar: Justo antes del botón flotante escribiste <main> en lugar de </main>. Esto hace que el navegador crea que abriste un segundo contenedor principal y puede romper la estructura del footer.
Etiqueta <body> sin cerrar y falta </html>: Al final del documento pusiste <body> en vez de </body> y te faltó cerrar el documento con </html>.
Sección de galería sin clases: Tienes <section><div>... sin atributos class. Si no le pones clases únicas, no podrás aplicarle CSS sin afectar a otras secciones de tu sitio.
Atributos alt vacíos (alt=""): Las 12 imágenes de la galería tienen el texto alternativo vacío. Es fundamental describir brevemente qué muestra cada imagen por accesibilidad y SEO.
2. Mejoras recomendadas antes de aplicar CSS
Nomenclatura limpia y reutilizable: Dale a la sección de galería clases descriptivas y específicas para esta página, como class="galeria-urbana" y class="galeria-urbana-grid", para que no choquen con la clase .galeria que ya usaste en index.html.
Carga diferida de imágenes (loading="lazy"): Como vas a mostrar 12 fotografías de golpe en esta sección, agregar loading="lazy" en las imágenes inferiores hará que la página cargue mucho más rápido.
Agrupación visual (<figure> o <div class="galeria-item">): Si en el CSS quieres aplicar bordes redondeados, efectos hover o tamaños distintos (como un diseño tipo masonry o collage editorial), envolver cada imagen o darles una clase individual (gc-item) te facilitará muchísimo el control. Si solo será una cuadrícula simple, dejar las <img> directas dentro del div con Grid es suficiente.



## Uso de IA

**Proceso CSS**


## Prompt:
A partir del siguiente HTML y la imagen de referencia ayúdame a construir paso por paso el CSS para que mi página web sea lo más similar con la referencia realizada en figma, durante el proceso agradecería que me expliques lo que vas haciendo para tenerlo en cuenta, ya revisamos el código html tu y yo asiq ue no debería tener mayor problema, pero si encuentras alguna sugerencia o mejora también marcala para que la modifique 



## Respuesta:

Explicación Técnica y Sugerencias de Mejora
Sugerencias de mejora detectadas en el HTML:
Rutas de imágenes con espacios: Archivos como IMG 1.1.jpeg o Recurso 1LOGO.png pueden generar errores de carga en servidores web. Se recomienda renombrarlos usando guiones (img-1-1.jpeg) o verificar que coincidan exactamente con la carpeta del proyecto.
Equilibrio visual en el Hero (11 vs. 12 fotos): En la referencia de Figma se aprecian 12 fotografías flotantes alrededor del título principal, mientras que el HTML incluye 11 (hero-foto-1 a hero-foto-11). Se sugiere duplicar una etiqueta <img> con la clase hero-foto hero-foto-12 para lograr la simetría inferior exacta.
Navegación fluida: Dado que existen enlaces internos (href="#cafeterias" y href="#top"), se incorporó scroll-behavior: smooth en el CSS para suavizar el desplazamiento.
Resumen de la construcción paso a paso del CSS:
Paso 1 (Variables y Reset Base): Se centralizó la paleta de colores en :root (#F2F2F2 de fondo, #18171C negro base, #DFFF00 amarillo neón y #2B7FFF azul acento) junto con las tipografías Archivo para títulos y Roboto para textos, eliminando márgenes por defecto del navegador.
Paso 2 (Encabezado): Se aplicó display: flex con justify-content: space-between y position: sticky sobre fondo gris medio (#8E8E93) para mantener el logo a la izquierda y el enlace Inicio ← a la derecha.
Paso 3 (Sección Hero y Collage Flotante): Se utilizó posicionamiento relativo en .hero y posicionamiento absoluto en porcentajes (top, left, right, bottom) para distribuir las fotografías alrededor del bloque central (z-index: 10), añadiendo pointer-events: none a las imágenes para evitar interferencias al hacer clic en los botones.
Paso 4 (Sección Acerca De): Se enmarcó el bloque central con dos barras horizontales redondeadas (border-radius: 999px) en amarillo neón (superior) y azul acento (inferior).
Paso 5 (Categorías y Galerías Escalonadas): Se estructuraron las galerías mediante CSS Grid de 3 columnas (repeat(3, 1fr)) aplicando desfases verticales (transform: translateY) con selectores :nth-child() para replicar la composición escalonada de Figma.
Paso 6 (Pie de Página): Se creó una barra superior con degradado lineal (linear-gradient) de magenta a azul y amarillo neón, seguida de un bloque oscuro centrado con la marca y el isotipo.
Paso 7 (Diseño Responsivo): Se añadieron Media Queries (900px y 680px) para reducir la opacidad u ocultar fotos laterales en pantallas móviles, y transformar las galerías de 3 columnas a 1 sola columna sin desfase vertical.

## Prompt:

El botón no es igual, el estado hover no se mira como el ejemplo que te di: empieza con el fondo blanco y luego cambia a negro, y la flecha cambia del lado derecho al lado izquierdo como estado hover. Además, lo único que debe cambiar de orientación es la flecha (el recuadro solo se corre a la izquierda), y necesito que su grosor y alineación sean idénticos a Figma sin quedar pegados al borde izquierdo.






## Uso de IA
**Proceso JS**

## Prompt:

Quiero que me ayudes a implementar una función de texto rotativo (palabra dinámica) en mi página web BAZR.
Te voy a compartir mis archivos HTML y CSS actuales. Necesito que los revises para entender cómo están estructurados y cómo puedo integrar esta función.
Lo que quiero conseguir:
En mi sección principal (Hero) tengo esta frase:
"El lugar para quienes disfrutan EXPLORAR"
Quiero que la palabra EXPLORAR cambie automáticamente por otras palabras, por ejemplo:
EXPLORAR
DESCUBRIR
OBSERVAR
RECORRER
Las palabras deben aparecer una después de otra, permanecer visibles unos instantes y cambiar mediante una transición suave y estética (puede ser un efecto de desvanecimiento o fade).

## Respuesta:


REGLAS IMPORTANTES:
NO modifiques, elimines, reorganices ni reescribas ninguna parte de mi HTML o CSS existente.
NO cambies nombres de clases, identificadores, estructuras ni rutas de imágenes.
Utiliza el elemento que ya tengo preparado en mi HTML: id="palabra-rotativa" y la clase texto-destacado.
Quiero que la funcionalidad se implemente únicamente con JavaScript.
El JavaScript debe agregarse al final de mi archivo HTML, inmediatamente antes de la etiqueta de cierre </body>, dentro de una etiqueta <script>.
No necesito crear archivos JavaScript externos ni modificar mi CSS actual. Si necesitas una transición, intenta resolverla desde JavaScript sin alterar los estilos existentes.
El código debe ser compatible con mi HTML y CSS actuales.
Cómo quiero que me ayudes:
Primero, revisa los dos archivos que te compartiré.
Después, explícame brevemente cómo funciona el código JavaScript que propones, ya que estoy aprendiendo programación.
Finalmente, dame únicamente el fragmento de JavaScript que debo pegar antes de </body>, sin volver a escribir mis archivos completos.
Quiero implementar esta función sin arriesgar nada de lo que ya tengo construido.

## Prompt: 
Se solicitó revisar y corregir el diseño responsivo (versión móvil y tablet) de la página principal (Home) y las subpáginas (Cafeterías con personalidad y Gráfica Callejera) para evitar que los títulos principales se cortaran y que las imágenes flotantes del Hero invadieran el texto central. Asimismo, se pidió implementar animaciones en JavaScript y CSS para que las fotografías de la galería principal aparezcan de forma escalonada, floten en trayectorias orbitales alrededor del texto y reaccionen con efecto parallax al movimiento del cursor.

## Respuesta: 

Solución y código implementado:
Ajuste de encabezados y grillas responsivas (CSS): Se corrigió la función clamp() de .intro-header h1 y se agregaron reglas dentro de @media (max-width: 48rem) para adaptar el tamaño de los títulos en subpáginas, reorganizar las tarjetas de cafeterías a una columna y ajustar la galería urbana a 2 y 1 columnas según el ancho de pantalla.
Reordenamiento del Hero en móvil (CSS): Dentro de @media (max-width: 42.5rem), se compactó el ancho del bloque central (.hero-contenido) para apilar el título en líneas cortas y se redistribuyeron las 13 imágenes flotantes hacia los bordes superiores, laterales e inferiores sin tapar el texto ni el botón de acción.
Animación de flotación orbital y efecto Parallax (CSS + JS): Se creó un archivo script.js vinculado al index.html y se añadieron @keyframes en CSS utilizando variables personalizadas (--x1, --y1, --duracion, --mx, --my) para lograr una aparición escalonada al cargar, movimiento orbital continuo y desplazamiento interactivo frente al cursor.

## OTRAS HERRAMIENTAS 

Se ocupó una calculadora para cambiar todos los valores de px a rem.
https://nekocalc.com/es/px-a-rem-conversor

## PROGRESO DE LOS CODIGOS 

https://docs.google.com/document/d/e/2PACX-1vQo11ljh3fS4NmK6JgtwmmB2fJipDSfCxmrvHslkNix1zj1EnqcB8r_6Kyixkt8Nk2op_Uawrx9wyxl/pub

## PROBLEMAS Y SOLUCIONES

Tuve problemas para escribir los codigos ya que muchos de estados aún resultan confusos para mi, lo solucione apoyándome de GEMINI, cada que escribía el código a partir de trabajos pasados y los apuntes de clase le o+pedía a la Ia que lo revisara, me diera mejoras y me explicara el proceso paso por paso, al final el resultado de la página web fue un conjunto de esto, equivocarme y después solicitar las revisiones pertinentes con asistencia de IA

## APRENDIZAJES

Aprendí demasiadas cosas con este trabajo, algunas otras las reforze, pues aunque era contenido que había realizado anteriormente en clases, el ritmo de las clases me hacía sentir que no comprendía de dónde venían algunas palabras o el uso de los signos dentro de los codigos, despues de este ejercicio he logrado diferenciar algunos de ellos a través de su lenguaje de programación.
Un aspecto que en definitiva me complace haber aprendido fue realizar las animaciones, las cuales en  su mayoría me parecían imposibles, pero con ayuda de asistencia por IA logre aprender algunos términos que antes desconocía.


