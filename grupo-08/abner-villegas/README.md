 # Bitácora de Proceso Individual — Solemne 2

Estamos aprendiendo a usar ia para poder hacer la solemne, exactamente el componente .css 

## 1. ¿Qué hice en el sitio?

En este proyecto grupal para la marca **MAREA**, mi trabajo estuvo enfocado principalmente en **ordenar la estructura en HTML5** y **organizar los estilos en CSS** para lograr que la página se adaptara y se viera muy bien en pantallas de teléfonos celulares (*mobile-first*).

De manera específica, mis tareas en la página fueron:

* **Reestructurar el código HTML:** Revisé el archivo original y lo dividí en secciones semánticas claras usando etiquetas como `<header>`, `<main>`, `<section>` y `<footer>`. También agregué contenedores (`<div>`) para cada tarjeta de producto y paso del proceso, lo que nos facilitó mucho la aplicación de estilos después.
* **Diseño para celulares con Flexbox:** Usé Flexbox (`display: flex`, `flex-direction: column`, `gap`) para pasar el diseño horizontal de computadora a una versión vertical ordenada para celulares.
* **Ajustar el tamaño de las imágenes:** Modifiqué el código de las fotos de los productos para que no se vieran pequeñas ni estiradas, logrando que ocupen bien el ancho de la pantalla móvil.
* **Poner las líneas de onda (SVG):** Coloqué los divisores en forma de ola entre cada sección para mantener la misma línea gráfica que teníamos en el prototipo de Figma.
* **Acomodar la cabecera:** Rediseñé el botón de "Comprar" del menú superior para que tuviera un tamaño adecuado y no chocara con el logo en pantallas pequeñas.
* **Hacer la página interactiva (links):** Envolví las fotos de los productos, los botones y los textos del pie de página en enlaces (`<a>`) conectados con anclas (`#id`) y bajada suave (`scroll-behavior: smooth`) para que la gente pueda navegar fácilmente por la página al hacer clic.

## 2. ¿Qué dificultades tuve y cómo las resolví?

Durante el trabajo me encontré con tres problemas principales de diseño y organización que tuve que ir resolviendo:

### Dificultad 1: El código inicial estaba desordenado y las fotos se veían muy pequeñas
* **El problema:** Al probar la vista de celular por primera vez, las fotos de los productos se veían exageradamente pequeñas y desalineadas. Intentar arreglarlo con CSS era muy confuso porque la estructura del HTML inicial no tenía bloques claros para cada producto.
* **Recursos utilizados:** Apuntes de la clase sobre HTML y Flexbox (UDP), la guía web de MDN y la ayuda de mis compañeros de grupo.
* **Cómo lo solucioné:** Lo primero que hice fue reorganizar el archivo `pagina.html`. Agrupé cada producto con su foto, texto, precio y botón dentro de su propia caja. Con esa estructura ordenada, fui al archivo CSS y quité las medidas fijas, aplicando `width: 100%`, `aspect-ratio: 1 / 1` y `object-fit: cover`. Con esto, las imágenes pasaron a verse cuadradas, grandes y bien enfocadas en la pantalla del celular sin deformarse.

### Dificultad 2: Las curvas de las olas (SVG) se cortaban o se veían feas
* **El problema:** Las líneas divisoras con forma de onda se veían pixeladas, cortadas a los lados o con líneas muy gruesas dependiendo del tamaño del celular.
* **Recursos utilizados:** Guía sobre gráficos vectoriales de **MDN Web Docs**.
* **Cómo lo solucioné:** Dejé de usar bordes de CSS y puse el código `<svg>` directamente en el HTML. Le agregué la propiedad `preserveAspectRatio="none"` en el código y le di un alto fijo de `20px` en CSS. Gracias a esto, la ola se estira suavemente a lo largo de cualquier celular manteniendo siempre un trazo delgado y limpio (`stroke-width: 2`).

### Dificultad 3: El botón "Comprar" del header quedó demasiado grande
* **El problema:** En la vista móvil, el botón "Comprar" del menú ocupaba mucho espacio y se veía más grande que el propio logo de MAREA, rompiendo el equilibrio de la parte superior.
* **Declaración del uso de IA:** Le pedí ayuda a una Inteligencia Artificial para entender cómo achicar el botón sin desarmar la alineación del menú.

> **Prompt utilizado:**  
> *"Las líneas de onda en SVG se nos ven pixeladas y el botón 'Comprar' del header quedó muy grande en la pantalla del celular. ¿Cómo podemos hacer que las ondas se vean nítidas y achicar el botón para que mantenga una buena jerarquía visual?"*

* **Lo que tuve que corregir a mano:** La IA me recomendó bajar los márgenes del botón y achicar la letra, pero al probar ese código en mi pantalla, el botón seguía quedando desalineado con respecto al logo. Tuve que ajustar manualmente los estilos en CSS: bajé el relleno a `padding: 0.25rem 0.65rem`, la letra a `font-size: 0.65rem` y usé `align-items: center` en la caja del header para que el botón y el logo quedaran perfectamente centrados uno al lado del otro.

## 3. ¿Qué aprendí?

Este proyecto me dejó varios aprendizajes para seguir armando sitios web:

1. **Un HTML ordenado hace que el CSS sea mucho más fácil:** Aprendí que no sirve de nada intentar arreglar todo con estilos si la estructura de etiquetas está desordenada. Tener un HTML limpio ahorra mucho tiempo y dolores de cabeza.
2. **Cómo usar Flexbox en celulares:** Entendí cómo acomodar elementos fácilmente usando Flexbox y cómo usar medidas flexibles (`%`, `rem`, `aspect-ratio`) para que la página se adapte bien a cualquier teléfono sin romper el diseño.
3. **Manejar vectores SVG:** Aprendí a integrar líneas y figuras en código SVG para que no pierdan calidad ni se vean pixeladas en pantallas de alta resolución.
4. **Usar la IA como apoyo y no como solución definitiva:** Confirmé que la IA ayuda mucho para darte ideas o destrabar problemas, pero siempre hay que probar el código, hacer ajustes a mano y comprobar que realmente se vea como lo planeamos en Figma.




