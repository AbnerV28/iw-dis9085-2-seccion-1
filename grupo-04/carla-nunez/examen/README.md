# Avance 1

## Links

- **Figma:** <https://www.figma.com/design/AMrK5AeX5KmZy4gzNrCmEm/examen-avance-1?node-id=0-1&t=OT3o6Z9XUIJ4prtH-1>

## 1. Descripción del proyecto

Mi proyecto es mi **portafolio personal** como diseñadora de producto, con un espacio de blog propio. El portafolio reúne cuatro trabajos de la carrera por ahora:

| # | Proyecto | Área | Año |
|---|---|---|---|
| 1 | El tincado: sintetizador de cuatro pasos | Electrónica aplicada al diseño | 2026 |
| 2 | Vitrina Sónica: sintetizador modular | Electrónica aplicada al diseño | 2026 |
| 3 | Torno Patero: fabricación de herramienta y torneado | Diseño de producto | 2024 |
| 4 | Réplica Silla Élé: ebanistería | Diseño de producto | 2025 |

**La idea.** Mi portafolio en PDF es sobrio y cerrado. Para la web quiero algo más personal: un sitio que sea mi portafolio y, a la vez, **un espacio propio tipo blog** que pueda ir editando y cambiando a medida que avanzo, con nuevos proyectos, procesos, ideas y notas. Quiero que se sienta mío y no como una vitrina terminada.

Visualmente busco colores llamativos, una tipografía con carácter y **mucha animación**: que se pueda interactuar con el sitio, que las cosas respondan al mouse y que moverse por él sea parte de la experiencia, sin perder una interfaz clara y agradable de usar. Cada proyecto tiene su propio color, y al pasar el mouse por una tarjeta el sitio se tiñe de ese color. Se que esto puede cambiar pero por ahora esa es mi propuesta.

El contenido (textos, fotos y datos) es real y viene de mis proyectos de la carrera, sin lorem ipsum. 

**Páginas previstas:** Inicio, Trabajo (portafolio), plantilla de Proyecto (una por cada trabajo), Blog (entradas que voy agregando) y Sobre mí.


## 2. Referentes

### Emele Collab — https://emelecollab.com
Lo que me gustó fue el **desenfoque y el movimiento** de las imágenes, y que el sitio se sienta vivo al recorrerlo. También me llamó la atención que se pueda ver el trabajo en tres vistas (lista, grilla y galería) y que el botón de contacto abra directamente un correo.
**Qué tomo:** el efecto de movimiento y desenfoque en las imágenes de los proyectos, y el botón de contacto que abre el correo (`mailto:`).

### Readymag — https://readymag.website/u2179522220/6089381/
Me encantó por su **interacción** y por sus colores. Su paleta es muy distinta a la que yo quiero.

**Qué tomo:** la forma en que se interactúa con el contenido, no los colores.

### ilovecreatives — https://ilovecreatives.com
Es un sitio con muchos referentes de **colores, interacción y mezcla de información** (cursos, perfiles, tienda, artículos y una sección de sitios favoritos, todo en una sola portada con un índice de secciones). Lo uso como fuente de inspiración.

**Qué tomo:** ideas para combinar información de distinta naturaleza en una misma página sin que se vea desordenada, y referencias de color e interacción ya que mis proyectos no siguen una linea continua de apariencia.

### Referentes iniciales (exploración)
Antes de elegir estos tres, exploré también a Liam Young (tarjetas flotantes y filtros por categoría), HAWRAF y Mia Brooks (tipografía enorme y navegación mínima). De ahí vienen las ideas de tarjetas que se pueden mover y del titulo gigante en la portada.


## 3. Proceso de diseño

### Cómo llegué al concepto
1. Partí de mi portafolio en PDF, que usé para identificar qué hay dentro de mi trabajo: electrónica, prototipos y materiales.
2. Mi primera idea fue un sitio sobrio en blanco, negro y azul. Después decidí que no quería tomar tanto mi portafolio como referente: quería algo más cool, con colores llamativos y mucha interacción.
3. Entre tres direcciones (divertido, eléctrico,artístico) elegí **electrico**.
4. Más adelante cambié el enfoque del sitio: en vez de una vitrina de proyectos, quiero que sea más personal, con mi portafolio y un blog que pueda ir editando, y con mucha animación para poder interactuar con él.

### Colores

Uso un fondo muy oscuro con texto claro, y cinco colores de alta saturación que funcionan como señal: cada proyecto tiene el suyo, y se "enciende" cuando el cursor pasa por encima. Regla de uso: aproximadamente 80% Noche y Hielo, y los colores de proyecto solo como bloques grandes o estados de interacción, de a uno por vez.

| Rol | Nombre | Hex | Dónde se usa | Texto encima |
|---|---|---|---|---|
| Fondo | Noche | `#0A0A1F` | Fondo de todas las páginas, texto sobre colores claros | Hielo |
| Texto | Hielo | `#F2F3FF` | Texto principal, bordes de botones y chips | n/a |
| Proyecto 1, El tincado | Azul eléctrico | `#2B3BFF` | Hover de su tarjeta, fondo de su página | Hielo |
| Proyecto 2, Vitrina Sónica | Naranja neón | `#FF4A1C` | Hover de su tarjeta y del botón, fondo de su página | Noche |
| Proyecto 3, Torno Patero | Violeta | `#7A3CFF` | Hover de su tarjeta, chip de filtro activo | Hielo |
| Proyecto 4, Silla Élé | Lima ácido | `#C8FF2E` | Hover de su tarjeta, estado pressed del botón | Noche |
| Línea y bordes | Hielo al 20% | `#F2F3FF` a 20% de opacidad | Bordes de tarjetas, chips y separadores | //// |

Los contrastes de la última columna son entre el texto y el color de fondo, y están elegidos para que se lea bien: el texto claro va sobre azul y violeta, y el texto oscuro sobre naranja y lima, porque el claro no se lee sobre esos dos. El azul y el violeta tienen poco contraste sobre Noche, así que los uso solo como fondo de bloques y nunca como color de texto.

### Tipografías

Las tres familias son de Google Fonts, gratuitas y disponibles en Figma y en la web.

| Familia | Pesos | Uso | Por qué |
|---|---|---|---|
| [Unbounded](https://fonts.google.com/specimen/Unbounded) | Medium y Bold | Títulos, botones y títulos de tarjeta | Es ancha, redondeada y futurista: le da carácter al sitio. Es muy ancha, así que la uso solo en titulares y no en párrafos largos |
| [DM Sans](https://fonts.google.com/specimen/DM+Sans) | Regular | Párrafos y texto corrido | Es neutra y clara, y equilibra a Unbounded en lecturas largas |
| [DM Mono](https://fonts.google.com/specimen/DM+Mono) | Regular, en mayúsculas | Etiquetas pequeñas (`01 / ELECTRÓNICA / 2026`), años y categorías | Aporta un toque técnico, ligado a mi trabajo con electrónica |

**Escala tipográfica**

| Estilo | Fuente y peso | Desktop (1440) | Mobile (390) | Interlineado |
|---|---|---|---|---|
| Display | Unbounded Bold | 96 | 36 | 100% |
| H1 | Unbounded Bold | 56 | 28 | 105% |
| H2 | Unbounded Medium | 32 | 20 | 115% |
| H3 (título de tarjeta) | Unbounded Medium | 22 | 18 | 120% |
| Botón | Unbounded Medium | 16 | 14 | 100% |
| Cuerpo | DM Sans Regular | 18 | 16 | 150% |
| Cuerpo pequeño | DM Sans Regular | 15 | 14 | 150% |
| Etiqueta | DM Mono Regular | 12 | 11 | 100% |


# Avance 2 

## Links 

- **Figma:** <https://www.figma.com/design/AMrK5AeX5KmZy4gzNrCmEm/examen-avance-1?node-id=7-4&t=0SXXTUf8lr179VRl-1>

El avance de esta clase estuvo complicado por distintos motivos, decidí en último momento cambiar la estética del proyecto casi por completo, me costó demasiado seguir el proyecto porque no sentía que fuera algo mio, no me representaba al 100%, de todas maneras seguiré cambiándole cosas hasta quedar conforme. 


# Portafolio Web

Diseño, desarrollo y despliegue del examen de diseño de interfaces web.

## 1. Enlaces del proyecto

* **Sitio publicado (GitHub Pages):** <https://ccarlabelenn.github.io/mi-portafolio/>
* **Archivo de Figma :** <https://www.figma.com/design/AMrK5AeX5KmZy4gzNrCmEm/examen?node-id=7-5&t=YiC7b6e4iZgkIVWg-1>
* **Link repositorio mi-portafolio :** <https://github.com/ccarlabelenn/mi-portafolio>

---

## 2. Registro por avance 

### Avance 1 (9 de noviembre) — Exploración inicial y sobrecarga visual
* **Qué presenté:** Una propuesta oscura, inspirada en referentes como *Emele Collab*, *Readymag* e *ilovecreatives*. La idea original buscaba mezclar un portafolio con un blog editable, utilizando tres familias tipográficas (`Unbounded`, `DM Sans` y `DM Mono`) y una paleta de cinco colores neón de alta saturación (azul eléctrico, naranja neón, violeta y lima ácido) que teñían la pantalla según cada proyecto.
* **Feedback y diagnóstico propio:** Al avanzar en el prototipo noté que la propuesta se sentía ajena a mi identidad como diseñadora. La mezcla de tantos colores neón, tipografías distintas y la estructura tipo blog competían visualmente con las fotografías de mis objetos físicos (electrónica, cerámicas y madera), haciendo que el sitio se viera recargado y poco coherente con mi trabajo material.

### Avance 2 (16 de noviembre) — Cambio de rumbo y síntesis editorial
* **Qué presenté:** Un rediseño casi total de la identidad visual en Figma, descartando el modo oscuro y el blog para volver a una estética limpia, luminosa y editorial que me representara al 100%.
* **Qué cambié para la entrega final:**
  * **Paleta cromática:** Pasé a un lienzo blanco (`#FFFFFF`) con tinta azul profundo (`#0A0A1F`) y dejé el **azul eléctrico (`#2B3BFF`)** como único color de acento para interacciones, enlaces y detalles tipográficos.
  * **Tipografía única:** Simplifiqué el sistema usando exclusivamente la familia **Unbounded** (pesos 300 a 800) cargada localmente, logrando una jerarquía contundente entre titulares grandes y textos de lectura
  * **Curaduría de proyectos:** Reemplacé el proyecto de ebanistería (*Silla Élé*) por *Irse y no volver* (objeto poético interactivo basado en Alejandra Pizarnik), consolidando cuatro proyectos que cruzan electrónica, programación y oficios: *Vitrina Sónica*, *El tincado*, *Irse y no volver* y *Torno*.
  * **Interacción lúdica sin ruido:** Mantuve el espíritu interactivo que buscaba desde el principio, pero de forma sutil: un cursor circular azul reactivo y elementos arrastrables (como el circuito en Contacto y el sticker/retrato en Sobre mí) que invitan a jugar sin distraer.

---

## 3. Arquitectura del código (HTML / CSS / JS)

El sitio está construido con **HTML5 semántico**, **CSS3 puro** (sin frameworks) y **JavaScript Vanilla**, dividido en 6 páginas enlazadas entre sí (`index.html`, `sobre-mi.html`, `vitrina.html`, `tincado.html`, `irse.html`, `torno.html`):

* **Escalado proporcional fiel a Figma (`styles.css`):** Para respetar exactamente las proporciones del lienzo diseñado en Figma (`1728px` de ancho), definí la unidad base `--u: calc(100vw/1728)`. Esto permite que márgenes, tipografías y bloques escalen de manera fluida en cualquier monitor de escritorio, cambiando a un sistema adaptado en móviles y tablets mediante `@media (max-width: 1024px)`.
* **Grillas asimétricas reutilizables (`--tx`, `--x`, `--mt`, `--g`, `--sx`):** Las cuatro páginas de proyectos comparten una misma hoja de estilos, pero cada una define sus propias variables CSS en línea en el `<body>` y utiliza la clase `.inv` para alternar la posición de la galería y el texto a izquierda o derecha.
* **Imágenes responsivas y rendimiento:** Uso de `loading="lazy"` en galerías, etiquetas `<picture>` con `<source media="(min-width:1025px)">` en *Vitrina Sónica* para servir distintas proporciones según el dispositivo, y `history.scrollRestoration = 'manual'` para controlar la posición de lectura.
* **Interactividad inteligente (`script.js`):**
  1. **Cursor personalizado (`.dot-cursor`):** Detecta dispositivos con puntero fino (`pointer: fine`), oculta el cursor normal y mueve un círculo azul mediante `requestAnimationFrame` y `pointermove`, ampliándose al pasar sobre enlaces o elementos interactivos.
  2. **Elementos arrastrables (`.draggable`):** Permite mover libremente el circuito, el retrato y el sticker usando eventos `pointerdown`, `pointermove` y `pointerup` con gestión dinámica de `z-index`, desactivándose automáticamente en pantallas táctiles (`pointer: coarse`) para no bloquear el desplazamiento vertical con el dedo.

---

## 4. Uso de Inteligencia Artificial

Durante el desarrollo utilicé **Claude** y **Gemini** como apoyo técnico puntual para la programación en JavaScript y la refactorización del código, mientras que el diseño visual en Figma, la identidad, la curaduría, las fotografías y la redacción de todos los contenidos son de autoría propia.

### Registro de herramientas y prompts

1. **Programación de interacciones en JavaScript (`script.js`)**
   * **Herramienta:** Claude / Gemini.
   * **Prompt utilizado:** *"Necesito un script en JavaScript vanilla para mi portafolio que reemplace el cursor por un círculo azul de 18px que crezca al pasar sobre enlaces, y que además permita arrastrar algunas imágenes (clase .draggable) por la pantalla sin que interfiera con el scroll en celulares."*
   * **Qué entregó la IA:** El código base con listeners de `mousemove` y eventos de arrastre con `setPointerCapture`.
   * **Qué ajusté y por qué:** Cambié `mousemove` por `pointermove` porque noté que al arrastrar una imagen el cursor azul se quedaba congelado; agregué `requestAnimationFrame` para que el movimiento fuera fluido y definí los selectores específicos de mi diseño (`.hero h1`, `.galeria-item`, `.draggable`) junto con el color `#2B3BFF` de mi paleta.

2. **Organización y limpieza del código (`styles.css` y HTML)**
   * **Herramienta:** Claude / Gemini.
   * **Prompt utilizado:** *"Ayúdame a ordenar este CSS y HTML para no repetir código en las cuatro páginas de mis proyectos, manteniendo las posiciones exactas que diseñé en Figma."*
   * **Qué entregó la IA:** La propuesta de abstraer las coordenadas individuales de cada proyecto mediante variables CSS en el `<body>` (`--tx`, `--x`, `--mt`, `--g`, `--sx`) y unificar las reglas en una sola hoja de estilos (`styles.css`).
   * **Qué ajusté y por qué:** Revisé y ajusté manualmente cada valor numérico en píxeles/unidades `--u` comparando pantalla a pantalla con mi prototipo en Figma, además de añadir soporte para `prefers-reduced-motion` y etiquetas `aria-label` para mejorar la accesibilidad.

3. **Áreas realizadas 100% sin IA**
   * Diseño de interfaz (UI Kit, componentes y prototipo desktop/mobile en Figma).
   * Redacción de biografía, descripción de proyectos, créditos de equipo y fotografía/edición de todas las imágenes.
   * Pseudocódigo y código inicial.

---

## 5. Problemas y soluciones

| Problema encontrado | Causa | Solución aplicada |
| :--- | :--- | :--- |
| **Falta de identidad en el diseño inicial** | El exceso de colores neón y el fondo oscuro opacaban las fotografías de mis prototipos físicos y no representaban mi estilo. | Pivote completo en el Avance 2 hacia una estética minimalista en blanco y azul eléctrico (`#2B3BFF`) con tipografía `Unbounded`. |
| **El cursor personalizado se congelaba al arrastrar elementos** | Al usar `setPointerCapture` en los elementos `.draggable` con `mousemove`, el navegador dejaba de disparar el evento de movimiento al documento. | Reemplacé `mousemove` por `pointermove` en `script.js`, permitiendo que el cursor siga al puntero incluso mientras se arrastra un objeto. |
| **Bloqueo del scroll en versión móvil** | Al tocar las imágenes arrastrables en pantallas táctiles, el evento `touch-action: none` impedía deslizar la página hacia abajo. | Incorporé una detección con `window.matchMedia('(pointer: coarse)').matches` para desactivar el arrastre en celulares y restaurar `touch-action: auto`. |
| **Descuadre de proporciones entre pantallas grandes y portátiles** | Usar medidas fijas en `px` rompía la composición asimétrica diseñada en Figma (`1728px`). | Implementé la variable escalable `--u: calc(100vw/1728)` para desktop y una media query unificada a partir de `1024px` para tablet y móvil. |

---

## 6. Aprendizajes

* **El diseño web debe servir al contenido:** Aprendí que un portafolio no necesita efectos estridentes para tener personalidad, reducir la paleta a blanco y azul eléctrico hizo que mis proyectos de electrónica y oficios cobraran mucho más valor visual y se sintieran más míos.
* **Pensar en sistemas y variables:** Traducir un diseño de Figma a código me enseñó a detectar patrones repetitivos (como las fichas de proyecto) y resolverlos con variables CSS en lugar de duplicar archivos.
* **Diseño responsivo real y táctil:** Comprendí que adaptar un sitio a móvil no es solo achicar cajas, sino repensar cómo interactúa el usuario (por ejemplo, reemplazar el *hover* y el *drag* de mouse por una navegación táctil limpia).
* **Criterio crítico frente a la IA:** Usar IA aceleró la resolución de problemas técnicos en JavaScript y CSS, pero requirió entender cómo funcionaba cada línea para depurar errores de interacción y mantener la fidelidad exacta con mi prototipo.
