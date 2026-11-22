# Bitácora – Portafolio ANTO LOCH

## Links del proyecto

| Recurso | Link |
|---|---|
| Figma | https://www.figma.com/design/YHWCjI7XMQea2wS5oOlocJ/antonia-loch?node-id=0-1&p=f&t=9ZjHQ2B6HFUc2Amp-0 |
| GitHub Pages | https://antoloch.github.io/mi-portafolio/ |
| Repositorio | https://github.com/antoloch/mi-portafolio |



## 1. Descripción del proyecto

Portafolio web de Diseño Industrial pensado para mostrar mis proyectos, presentar quién soy y ofrecer una vía de contacto. Busca tener identidad propia y no verse como una página genérica: estética editorial, fondo rosado con grano, color fucsia como acento, y tipografías Helvetica Neue (Bold, Medium y Regular) y Courier Prime (Bold y Regular). También incluye elementos interactivos para que recorrer la página sea parte de la experiencia.

### Estructura del sitio

Cuatro secciones con una navegación común (logo arriba a la izquierda y menú PROJECTS, INDEX y ABOUT).

- **Home:** presentación con el nombre ANTO LOCH como elemento central, con un efecto de profundidad y movimiento, y un texto breve de introducción a la derecha.
- **Projects:** galería/carrusel interactivo de proyectos distribuidos en distintos planos. Al hacer clic en una foto se abre la página del proyecto.
- **Index:** lista ordenada y numerada de proyectos, como alternativa directa a la galería.
- **About:** presentación personal con estética de tarjeta de identidad, fotografía, enlaces a GitHub e Instagram y formulario de contacto "Escríbeme".
- **Páginas individuales de proyecto:** imagen principal, nombre, categoría, descripción y galería de fotos.


## 2. Registro de avances

### Avance 1 – 9 de noviembre

**Entregables pedidos:** bitácora iniciada con descripción del proyecto, 3 sitios de referencia, link a Figma, boceto y wireframes de baja de las páginas, y UI kit base (colores, tipografías, botones y componentes).

**Qué hice**
- Inicié la bitácora con la descripción del proyecto.
- Documenté cuatro sitios de referencia, con el link y lo que tomo de cada uno.
- Definí la estructura del sitio: Home, Projects, Index, About y páginas individuales de proyecto.
- Definí la línea visual inicial: estética editorial y combinación de Helvetica Neue con Courier Prime.
- Armé el archivo de Figma con el boceto y los wireframes.

#### Referentes visuales y de diseño

##### Janis Sepúlveda
🔗 https://janisepulveda.cl/contacto.html

Me llamó la atención la manera sencilla en que organiza la navegación, separando trabajos, sobre mí, contacto y CV, y un formulario de contacto directo con nombre, correo y mensaje.

**Tomo de este sitio:**
- La claridad de la estructura y la navegación.
- La separación entre trabajos e información personal.
- La simplicidad del formulario de contacto.

##### Catarina V. Nery
🔗 https://www.catarinavnery.com/

Presenta sus proyectos con imágenes y pequeñas descripciones. Me interesó cómo explica el desarrollo de cada trabajo, mostrando el concepto y las decisiones detrás, no solo el resultado final.

**Tomo de este sitio:**
- La presentación visual de los proyectos.
- La combinación de imágenes y textos descriptivos.
- La importancia de mostrar el proceso y no solamente el resultado.

##### UNVEIL
🔗 https://unveil.fr/

Estudio creativo que trabaja con tecnología e inteligencia artificial. Su sitio propone una experiencia experimental, donde la navegación es parte del contenido.

**Tomo de este sitio:**
- La exploración de nuevas formas de navegación.
- La interacción como parte de cómo se muestran los proyectos.
- La sensación de profundidad y movimiento.
- La idea de que recorrer un portafolio sea descubrir su contenido.

##### Jacky Boehm
🔗 https://jackyboehm.com

Artista, diseñadora y directora de arte. Su portafolio da gran protagonismo a las imágenes.

**Tomo de este sitio:**
- El protagonismo de las imágenes.
- La organización visual de cada trabajo.
- La forma de mostrar una identidad personal a través de los proyectos.

##### Relación de los referentes con mi proyecto

Combino una navegación clara y sencilla (Janis Sepúlveda, Jacky Boehm) con una presentación más experimental y con profundidad de los proyectos (UNVEIL), y con la idea de mostrar proceso y concepto (Catarina V. Nery).

**Feedback recibido (Aarón)**
- El trabajo estaba bien encaminado, pero no debía adelantarme tanto con el proceso: era mejor avanzar paso a paso.
- Me sugirió experimentar con la presentación de los proyectos, por ejemplo incorporando elementos similares a perros de ropa dentro de los efectos visuales.
- Conversamos la sección de contacto: qué información personal conviene incluir y cómo presentarla.

**Cambios a partir del feedback:** ordené el trabajo por etapas y dejé para más adelante los aspectos que todavía no eran necesarios. La sección de contacto quedó integrada en About, con un formulario en vez de datos personales expuestos.

### Avance 2 – 16 de noviembre

**Entregables pedidos:** UI kit en Figma con colores, tipografías, iconos y al menos 2 componentes base con sus estados; prototipo de alta interactivo solo del Home (mobile y desktop) con auto layout y animaciones de cambio de estados; `index.html` del Home en GitHub; bitácora actualizada con el feedback y la documentación del uso de IA.

**Qué hice**
- Creé los botones del Home en Figma con sus tres estados: normal, hover y presionado.
- Desarrollé la animación principal del Home: el texto "ANTO LOCH" tiene un movimiento sutil donde cada letra flota de forma independiente. Al pasar el cursor, las letras se deshacen en puntos y rayitas que se dispersan y se recomponen solas.
- Usé el agente de IA de Figma para generar esta interacción (prompt en la [sección 3.1](#31-agente-de-ia-de-figma--animación-del-home-avance-2)).

**Feedback recibido**

Durante la revisión del Avance 2 me comentaron que, en general, todo se veía bien: los botones con sus estados y la animación del Home iban en la dirección correcta. Sin embargo, me señalaron que debía ordenar mi archivo de Figma, ya que lo tenía desordenado: los frames y las capas no tenían una organización clara, lo que dificultaba entender el archivo y trabajar con él. Esto se relaciona directamente con la dificultad que ya había identificado con Auto Layout y con la organización de los frames.

También conversamos sobre el cursor personalizado que quería incorporar al sitio. Me explicaron que ese efecto no se resuelve dentro de Figma, sino que se programa con JavaScript: se oculta el cursor normal y se reemplaza por un elemento propio que sigue la posición del mouse.

**Cambios a partir del feedback**

- **Orden del archivo de Figma:** ordenar los frames, las capas y los nombres del archivo, y retomar Auto Layout con esa base, para que el prototipo y el UI kit sean más claros y fáciles de mantener.
- **Cursor personalizado:** como me indicaron, dejé de pensarlo como algo de Figma y lo trabajé directamente en código. Lo construí con un elemento propio y un archivo `cursor.js` que lo mueve siguiendo el mouse. El detalle de cómo lo hice y cómo lo fui ajustando está en el Avance 3 y en los prompts 19 a 22 de la sección 3.2.

### Avance 3

**Qué hice**
- Pasé el diseño a código y construí el sitio completo: Home, Projects, Index, About y nueve páginas de proyecto (después eliminé una, quedando ocho).
- Organicé el código por función: `styles.css` (estilos comunes), `projects.css` (carrusel), `pages.css` (páginas internas), `cursor.css` y archivos `.js` para el comportamiento.
- Creé un cursor personalizado: un punto fucsia que sigue al mouse y, en Projects, muestra el nombre del proyecto.
- Desarrollé el carrusel de proyectos con efecto hover (la foto se aclara y pierde el desenfoque), apertura del proyecto con un clic y arrastre solo a partir de 8 px de movimiento.
- Organicé el Home en código: fondo blanco con baños de fucsia y grano de película, el título ANTO LOCH dibujado en canvas con letras pixeladas que flotan y se dispersan al acercar el cursor o el dedo, menú fijo y texto vertical en loop (prompt 1).
- Agregué en About una animación parecida a la del Home: se deshace al pasar el cursor, o el dedo en móvil, y baja la opacidad (prompt 18).
- Rehice la navegación: el INDEX del menú superior abre la lista de proyectos desde cualquier página, y cada foto y título llevan a su página propia.
- Rediseñé About como una tarjeta de identidad crema con foto con marco de esquinas, sello rosado, datos en Courier Prime, texto de presentación y formulario con envío por correo (`mailto`).
- Apliqué las tipografías definidas: Helvetica Neue (Bold, Medium, Regular) y Courier Prime (Bold, Regular).
- Cambié la estética a fondo rosado con grano y fucsia como acento, en lugar del blanco, negro y rojo planteados en el Avance 1. [AGREGAR el motivo del cambio]



## 3. Uso de IA documentado

Herramientas usadas: el agente de IA de Figma (animación del Home) y Claude (construcción y corrección del código del sitio).

### 3.1 Agente de IA de Figma – animación del Home (Avance 2)

**Prompt:**

```text
Quiero agregar animaciones e interacciones a mi Home de ANTO LOCH, manteniendo completamente el diseño, la composición, los colores y las tipografías actuales.

Quiero que:

El texto principal ANTO LOCH tenga un movimiento sutil de letras, como si flotaran ligeramente. Cada letra flota suavemente todo el tiempo, subiendo y bajando con un leve giro, cada una a su propio ritmo. Al pasar el cursor, las letras se deshacen en puntos y rayitas que se dispersan y después se recomponen solas.
```

- **Resultado:** la animación principal del Home, que mantuvo el diseño, colores y tipografías.

### 3.2 Claude – construcción del sitio (Avance 3)

Para construir y corregir el código del sitio usé Claude (Anthropic). Los prompts están en orden cronológico. Los del cursor personalizado van juntos, porque lo trabajé casi al final del proceso.

| N.º | Qué pedí | Qué respondió la IA | Mi ajuste |
|---|---|---|---|
| 0 | Ayuda para organizar un portafolio con proyectos, About y contacto, con fondo rosado con grano, logo arriba a la izquierda, menú PROJECTS / INDEX / ABOUT y carrusel de fotos, usando Helvetica Neue, Courier Prime y fucsia. Cómo organizar el proyecto y el HTML. | Dividir la información en páginas (Home, Projects con carrusel e INDEX, About) y separar el código por función: `styles.css`, `projects.css` y archivos `.js`. | Adopté esa estructura y fui agregando el resto por etapas. |
| 1 | Crear la portada (Home) en HTML, CSS y JS puro, sin librerías, con especificaciones detalladas de tipografías, colores, fondo con baños de fucsia y grano de película, el título ANTO LOCH dibujado en canvas con efecto pixelado y flotación, interacción que dispersa los píxeles al acercar el cursor, menú fijo, texto vertical y accesibilidad. [Prompt completo abajo](#prompt-1--home-prompt-completo). | La IA generó el `index.html` del Home con todo lo pedido: fondo y grano animado, título en canvas hecho de píxeles que flotan y se dispersan con el cursor o el dedo, menú superior con estados, texto vertical en loop y soporte para `prefers-reduced-motion`. | **[COMPLETAR: qué ajustaste después]** |
| 2 | Sacar los botones INDEX y OVERVIEW de la esquina inferior, dejar el INDEX superior con la misma función, que cada foto y título del INDEX abran la página del proyecto y crear About vacío. | El INDEX superior abre y cierra la lista; se crearon `proyecto-01.html` a `proyecto-09.html` con título, descripción y galería de 3 fotos, y `about.html`. | Eliminé un proyecto más adelante (prompt 9). |
| 3 | Cómo subir las imágenes y dónde ponerlas en el código. | En la carpeta `images/` con los nombres que espera el código (`01.jpg` a `09.jpg`; `01-1.jpg`, `01-2.jpg`, etc.), definidos en `projects.js` y en cada `proyecto-XX.html`. | Renombré mis archivos para que coincidieran. |
| 4 | En qué HTML estaban las fotos, porque no se veían. | Las del carrusel están en `projects.js` y las de cada proyecto en su HTML. Causas comunes: nombre o extensión distintos (incluidas mayúsculas), carpeta mal ubicada, zip sin descomprimir o `images/` sin subir al hosting. | Revisé nombres, extensiones y ubicación de la carpeta. |
| 5 | Que la imagen se vea sólida, sin transparencia, al pasar el cursor. | En `projects.js` se cambió el cálculo de opacidad y desenfoque: al hacer hover sube a opacidad 1 y pierde el blur, con vuelta gradual. | Quedó en opacidad 1 (podía dejarse al 90%). |
| 6 | Arreglar que el clic en las fotos del carrusel no abría bien el proyecto. | Dos causas: el primer clic solo traía la foto al frente y un pequeño movimiento de la mano se contaba como arrastre. | Un clic abre el proyecto; solo hay arrastre si el mouse se mueve más de 8 px. |
| 7 | Solución a que el carrusel se movía con doble clic y costaba abrir el proyecto. | El carrusel se movía con cualquier movimiento mientras el botón estaba apretado y la foto se desplazaba bajo el cursor. | Ahora solo se mueve al arrastrar de verdad y el clic usa la foto bajo el cursor. |
| 8 | Las líneas exactas de `projects.js` a modificar y luego el código completo. | Indicó los bloques (aprox. líneas 70 a 98, arrastre y clic) y entregó el archivo completo. | Reemplacé el archivo completo. |
| 9 | Cómo quitar la navegación inferior, porque eliminé el proyecto Dispositivo Electrónico Interactivo. | Era el bloque `<nav class="step">`. Opciones: ocultarlo con `.step{display:none}` en `pages.css` o borrarlo en cada HTML; además corregir los dos enlaces al proyecto 09 eliminado. | Corregí los enlaces que apuntaban al proyecto eliminado. |
| 10 | Poner "Vitrina Sónica" a la derecha y el otro enlace a la izquierda. | Se reemplazó la regla general por una clase `.right` con `margin-left:auto`, aplicada solo al enlace de la derecha. | Apliqué la clase solo a ese enlace. |
| 11 | Un About según mi boceto, con nombre, presentación, foto, GitHub, Instagram y formulario ESCRÍBEME. | Tarjeta con presentación, espacio para foto, enlaces a GitHub e Instagram y formulario con barra fucsia y botón ENVIAR. | Lo usé como base para el rediseño siguiente. |
| 12 | Cómo hacer que el mensaje llegue a mi mail. | Se configuró con `mailto`, que abre el correo del visitante. Para recibir mensajes sin eso hace falta un servicio externo como Formspree. | Dejé `mailto`, porque un sitio estático no guarda mensajes. |
| 13 | Confirmar si solo cambiaba `about.html` para no descargar todo el zip. | Para el correo bastaba con `about.html`; si faltaba el About, también el bloque nuevo de `pages.css`. | Actualicé solo esos archivos. |
| 14 | El código final con mi info (pegando mi `pages.css`). | Entregó `about.html` y `pages.css` completos, conservando mis cambios (como `.step a.right`) y agregando el bloque nuevo del About. | Reemplacé ambos archivos. |
| 15 | Que el About fuera como la tarjeta que yo había diseñado en Figma, ordenado y que se viera lindo, y dónde subir la foto. | Se construyó el About en código a partir de la tarjeta de mi diseño en Figma. La foto va en `images/about.jpg`. Se verificó en computador y celular. | Subí mi foto con ese nombre exacto. |
| 16 | Courier en el campo del nombre y dónde subir la foto. | Se reemplazó la letra manuscrita por Courier Prime (`var(--mono)`) en `pages.css`, con la línea exacta a cambiar. | Hice el cambio en esa línea. |
| 17 | Cambiar ese tipo de letra, que no se había actualizado. | Mi copia de `pages.css` todavía tenía la letra manuscrita. Se entregó el archivo corregido y se sugirió recargar con Ctrl+Shift+R por la caché. | Reemplacé el archivo y recargué sin caché. |
| 18 | Una animación en About parecida a la del Home: que las letras se deshagan al pasar el cursor, o el dedo en móvil, y que baje la opacidad. | **[COMPLETAR]** | **[COMPLETAR]** |
| 19 | **Cursor:** cómo se hace el cursor rosado personalizado y cómo funciona. | Un `div` en el HTML, estilos en `cursor.css` (círculo de 12 px, `position:fixed`, `pointer-events:none`, `cursor:none`) y `cursor.js`, que mueve el punto con `requestAnimationFrame`. En Projects el punto lleva un `span` con el nombre del proyecto. | Lo implementé en todas las páginas. |
| 20 | **Cursor:** cursor rosado sin delay. | En `cursor.js` el factor de suavizado era 0.15; se cambió a 1 para seguir al mouse al instante. | Dejé el valor en 1. |
| 21 | **Cursor:** arreglar el cursor en About. | El cursor del sistema seguía visible sobre campos y botón: `cursor.css` solo lo ocultaba en algunos elementos y un `cursor:pointer` en el botón pesaba más. | Se amplió la regla a `input`, `textarea`, `button`, `select` y `label`, y se borró el `cursor:pointer`. |
| 22 | **Cursor:** revisión de mi `about.html` pegado, porque el cursor seguía sin funcionar. | El archivo estaba cortado al final: faltaban el cierre del script, el `<div id="cursor">` y `<script src="cursor.js">`. | Pegué la parte faltante. |
| 23 | Qué es el archivo `desktop.ini`. | Lo crea Windows para guardar la vista de la carpeta; no es parte del sitio y se puede borrar. Además detectó que `about.png` no coincide con `about.jpg` y que `08.JPG` debía llamarse `08.jpg` para cargar al publicar. | Renombré los archivos y borré `desktop.ini`. |

### Prompt 1 – Home (prompt completo)

```text
Crea la portada (home) de un portafolio en HTML, CSS y JS puro, sin librerías.

TIPOGRAFÍAS Y COLORES
- Helvetica Neue ExtraBold (peso 800, fallback Helvetica, Arial) para ANTO LOCH.
- Courier Prime (Google Fonts) para menú y texto vertical.
- Fucsia #EA2274, negro #111111, blanco #FFFFFF.

FONDO
- Blanco con baños de fucsia (#EA2274 al 60% de opacidad) que salen de la esquina superior izquierda y de la inferior derecha. Centro casi blanco. Viñeta suave en los bordes.
- Grano de película encima de todo: SVG feTurbulence como data-URI, opacidad .2, mix-blend-mode multiply. Se anima con steps(6) cada .9s moviendo el background-position. Pointer-events none.

TÍTULO "ANTO / LOCH" (efecto principal)
- Dibujado en un <canvas> a pantalla completa, centrado. Dos líneas: ANTO arriba, LOCH abajo.
- Ancho de ANTO: 86% de la pantalla en desktop y 90% en móvil, limitado a 40% del alto. Separación entre líneas de 0.98 × el tamaño de la fuente. Tracking apretado (-0.03em).
- Para que se vea ExtraBold aunque el sistema no tenga el peso, usa fillText + strokeText con lineWidth = 3.5% del tamaño de la fuente.
- Cada letra se rasteriza en un canvas fuera de pantalla y se convierte en una grilla de cuadrados (píxeles) de tamaño st = max(3, round(ancho/115)). El resultado es una tipografía pixelada con bordes escalonados.
- Los píxeles se dibujan en coordenadas enteras (Math.round) y con tamaño st+1 para que no queden rendijas entre ellos. No rotes las letras, porque eso rompe la grilla.
- Flotación: cada letra se mueve con senos de fase distinta, solo en traslación. Amplitud vertical de 6% del tamaño de la fuente y horizontal de 2%.
- Interacción: al acercar el cursor o el dedo (radio 7% del ancho en desktop, 16% en móvil) los píxeles se deshacen. Cada uno sale despedido en dirección contraria al cursor, con ángulo aleatorio ±0.8 rad y velocidad entre 1 y 4.5. La fricción es 0.97 por frame. Dura entre 70 y 180 frames. Después vuelve a su posición con easing de 0.1. El 40% se ven como rayitas (2.6·st × 0.6·st) y el resto como puntos (0.9·st).
- Recalcula todo al redimensionar, con debounce de 150 ms. En móvil usa touch-action: none sobre el canvas.

MENÚ SUPERIOR (fijo)
- Izquierda: ANTO LOCH en Helvetica Bold 16 px (14 px en móvil), tracking -0.045em. Negro; en hover o presionado, fucsia.
- Derecha: PROJECTS · INDEX · ABOUT en Courier 14 px (12 px en móvil), mayúsculas, tracking .12em, padding 3px 8px, separados por clamp(18px, 4.5vw, 56px). Negro y sin fondo. En hover o presionado, fondo fucsia con letras blancas. En la página actual (aria-current="page"), letras fucsia sin fondo.
- Hover solo dentro de @media (hover:hover). Foco con teclado: outline 2px negro, offset 3px.

TEXTO VERTICAL A LA DERECHA
- "DISEÑO DE OBJETOS, INTERACCIONES Y ESPACIOS — " repetido muchas veces, en Courier 12 px (10 px en móvil), writing-mode vertical-rl, para que se lea de arriba hacia abajo.
- Pegado al borde derecho (right: 14px), desde 58px del borde superior hasta 24px del inferior, con overflow hidden.
- Loop infinito: animación translateY de 0 a -50% en 60s, linear.

ACCESIBILIDAD
- H1 oculto visualmente con "Anto Loch — Diseño de objetos, interacciones y espacios". Canvas con aria-hidden.
- Con prefers-reduced-motion: sin flotación, sin dispersión, sin grano animado y sin texto vertical animado.
```


## 4. Problemas y soluciones

| Problema | Solución |
|---|---|
| **Auto Layout en Figma:** no lograba organizar bien los frames. | Lo dejé pendiente y pedí ayuda en clase. |
| **De Figma a código HTML:** no sabía cómo pasar el diseño a código. | Construí el sitio por etapas con apoyo de IA, separando HTML, CSS y JS. |
| **Las fotos no aparecían:** nombres, extensiones o ubicación de la carpeta no coincidían con el código. | Igualar nombres exactos (`08.JPG` → `08.jpg`, `about.png` → `about.jpg`) y subir `images/` al hosting. |
| **Imagen demasiado transparente al hacer hover.** | Subir la opacidad a 1 y quitar el blur en `projects.js`. |
| **Cursor con retraso:** el suavizado era 0.15. | Cambiarlo a 1 en `cursor.js`. |
| **Clic que no abría el proyecto:** se confundía con arrastre. | Margen de 8 px antes de contar un arrastre y clic sobre la foto bajo el cursor. |
| **Carrusel que se movía con doble clic.** | Mover el carrusel solo durante un arrastre real. |
| **Navegación inferior apuntando al proyecto eliminado.** | Ocultar o borrar el bloque `nav.step` y corregir los enlaces. |
| **Cursor del sistema visible en el formulario:** `cursor.css` no cubría todos los elementos y el botón tenía `cursor:pointer`. | Ampliar la regla y borrar esa línea. |
| **About con el archivo cortado:** faltaban el cierre del script, el cursor y `cursor.js`. | Pegar la parte faltante. |
| **Tipografía que no se actualizaba:** mi copia de `pages.css` era antigua y el navegador guardaba la versión anterior. | Reemplazar el archivo y recargar con Ctrl+Shift+R. |
| **Helvetica Neue en Windows y Android:** no es fuente web y se ve como Arial. | Aceptarlo como limitación y mantener Courier Prime, que sí se descarga. |
| **Formulario sin servidor:** un sitio estático no guarda mensajes. | Usar `mailto`, con Formspree como opción futura. |


## 5. Aprendizajes

- **Cada archivo tiene su función.** El HTML es la estructura, el CSS es el aspecto y el JavaScript es el comportamiento. Para saber qué archivo cambiar, primero hay que pensar si el problema es de estructura, de aspecto o de comportamiento.
- **Los nombres de archivo deben coincidir exactamente.** Las fotos solo aparecen si nombre, extensión y carpeta son los que el código espera. `08.JPG` no es lo mismo que `08.jpg` cuando el sitio está publicado.
- **Cómo funciona un cursor personalizado.** Se esconde el cursor normal con `cursor:none` y se pone un elemento propio con `pointer-events:none`. Con JavaScript se le da la posición del mouse; un solo número de suavizado cambia cómo se siente.
- **Los estados hover.** Pasar el cursor sobre una foto cambia cómo se ve, igual que los estados de un componente en Figma. La transición gradual evita que se vea brusca.
- **Clic no es lo mismo que arrastrar.** El navegador puede confundirlos si el mouse se mueve un poco, por eso se usa un margen de 8 px.
- **Una regla más específica le gana a una más general.** A veces el arreglo es borrar una línea, no agregar otra.
- **Verificar que los archivos estén completos.** Si algo no funciona, hay que revisar primero que lo copiado y pegado esté entero.
- **El formulario sin servidor.** Un sitio estático no puede guardar mensajes: `mailto` abre el correo del visitante y recibirlos directo requiere un servicio externo como Formspree.
- **Tipografías.** Courier Prime se descarga y se ve igual en todos los dispositivos; Helvetica Neue solo viene instalada en dispositivos Apple.
- **Pedirle a la IA algo concreto funciona mejor.** Indicar qué archivo, qué parte y qué quería lograr dio respuestas más precisas, y pegar mi propio código ayudó a encontrar errores que yo no veía.
- **Avanzar paso a paso.** El feedback de Aarón me ayudó a no apresurarme y a trabajar por etapas.
- **Pendiente por mejorar:** dominar Auto Layout y la organización de frames en Figma.
