LINK FIGMA FLORENCIA ALRRUIZ https://www.figma.com/design/fzRnlbloZgh5nw5rnRrtaB/Florencia-Alrruiz-%E2%80%93-Portafolio?node-id=0-1&t=H98PrAZ6iHvI7S9t-1
CLASE 09/11/26
Mi trabajo en este equipo fue diseñar y estructurar la página web en figma en wireframe de baja y adaptar el formato desktop a mobile 
Una de las principales dificultades de este trabajo fue pasar el diseño de figma al codigo. me costo lograr que las imagenes y las columnas quedaran ordenadas como en el prototipo, sobre todo al usar flexbox, porque algunos elementos se desordenaban o cambiaban de tamaño sin que entendiera bien porque. 
También fue difícil la parte de la colección: quería que las imágenes de la derecha se agrandaran al lado izquierdo al hacer scroll. Para esa parte, la de las imágenes con movimiento utilice inteligencia artificial, ya que no sabia como hacer la animación con mis conocimientos actuales. sin embargo, embargo el diseño que genere con esas imágenes no quedo tan estético visualmente como esperaba, por lo que mi compañera Jerliana opto por modificarlo.

Uso de IA: animación de las imágenes en La Colección

*Herramienta: Claude (IA de Anthropic)

Prompt usado:

Estoy desarrollando la versión para celular de una página web para un trabajo universitario sobre la colección de muebles de Schiaparelli. La versión de escritorio ya está terminada y necesito adaptar la sección "La Colección", que tiene los textos de las piezas en una columna y cuatro fotografías en otra.
Según mi diseño de Figma, en celular la sección debe verse así:
Las fotografías aparecen primero y los textos debajo.
 Cada fotografía se presenta como una tarjeta de color verde, con las esquinas redondeadas y el nombre de la pieza debajo, en color dorado.
 Los textos se adaptan al ancho de la pantalla.
  
Resultado:
La IA hizo que, al bajar por la página, la imagen que pasaba por el centro se agrandara y se moviera a un visor grande a la izquierda.

Rechazado: el resultado no quedó tan estético visualmente y usaba código que no habíamos visto en clases (JavaScript), así que se descartó.
  
Qué se corrigió:
Desarrolla la sección de imágenes interactivas empleando exclusivamente HTML y CSS. Se debe excluir el uso de JavaScript, dado que no corresponde a los contenidos abordados. Además, conserva sin alteraciones el diseño y el formato de las imágenes adjuntas.

Vuelvo a recalcar, esta parte del diseño no se conservó y fue modificado por mi compañera Jerliana Martinez.

Por mi parte, logré comprender la mayoría de los contenidos revisados en clases, como la estructura de una página en HTML, la aplicación de estilos mediante CSS y el uso de flexbox para organizar los elementos. Sin embargo, reconozco que todavía tengo vacíos y dudas en algunos aspectos. Una de mis principales dificultades fue memorizar qué código o propiedad corresponde a cada función, lo que muchas veces me obligó a volver a revisar el material de clases y otros recursos de apoyo. También me costó organizar correctamente la estructura de la página, sobre todo al ordenar las secciones y lograr que los elementos se ubicaran según el diseño de Figma. Aun así, este trabajo me permitió reforzar lo aprendido y darme cuenta de los contenidos que debo seguir practicando para manejarlos con mayor seguridad.



CLASE 16/11/2026
1. Trabajo realizado en este avance

UI Kit
Para este avance desarrollé el UI Kit en Figma, tomando como referencia los elementos gráficos que había definido en el primer avance.
Organicé los colores en una colección de variables, manteniendo la paleta original del boceto, que incluye tonos verdes, rosados, gris, negro y blanco. También definí una colección de espaciados y organicé los estilos tipográficos para desktop y mobile, utilizando Roboto y 42dot Sans.
Además, preparé los íconos principales del sitio como componentes, incluyendo el menú, cerrar, flechas, redes sociales y correo.
Por otra parte, trabajé en los componentes interactivos del sitio. Definí los estados Default y Hover para los botones de contacto, menú y redes sociales. También incorporé este comportamiento a las seis piezas del portfolio (T.P.U, Rámpora, Miau Armchair, Rokae, CNX-13 y Pionera), haciendo que sus nombres aparezcan dentro de los globos solamente cuando se pasa el cursor sobre ellas.

Prototipo del Home
Desarrollé el prototipo de alta fidelidad del Home para desktop y mobile, intentando mantener lo más fielmente posible la composición del boceto original.
En esta etapa trabajé en incorporar Auto Layout a las distintas secciones del sitio, como el header, las columnas de imágenes y texto, las fotografías de Floriale, el footer y la galería. En el collage inicial mantuve la distribución libre de los elementos para no modificar su composición.
También agregué algunas interacciones, como los cambios de color al pasar el cursor por los botones y la aparición de los nombres de las piezas. El botón CONTACTO permite desplazarse directamente hasta el footer.
Los prototipos quedaron configurados para poder revisarlos desde el modo Presentación de Figma.

Ubicación de los archivos:
Desktop: página "wireframe Desktop", frame "Prototipo · Home Desktop" (1512 × 3704 px).
Mobile: página "wireframe mobile", frame "Prototipo · Home Mobile" (409 × 2009 px).
Los bocetos originales se mantuvieron sin modificaciones. Debido al límite de tres páginas del plan gratuito de Figma, trabajé los prototipos dentro de las mismas páginas donde se encuentran los bocetos.

Desarrollo del sitio

Comencé a trasladar el diseño a código dentro de la carpeta sitio/. Para esto trabajé con HTML y CSS, utilizando las medidas y la distribución de los elementos que ya había definido en Figma.
La carpeta contiene el archivo index.html, la hoja de estilos css/styles.css y las imágenes exportadas desde Figma en la carpeta img/.
En el CSS se establecieron las versiones desktop y mobile, utilizando una variable para escalar los elementos según el ancho de pantalla y mantener la composición del diseño.
Por ahora, la versión mobile contempla el inicio, Conóceme y Miau Armchair. Todavía falta adaptar Floriale, la galería y el footer.

2. Uso de inteligencia artificial

Durante este avance utilicé Claude como apoyo para resolver algunas tareas en Figma y avanzar en el desarrollo del sitio. Principalmente recurrí a la herramienta cuando me encontraba con funciones que todavía no manejo del todo o que me cuesta configurar por mi cuenta.
Tarea
Cómo utilicé la IA
Interacciones en Figma

Me apoyó en la configuración de los estados Hover y Default, especialmente en los botones y en la aparición de los nombres de las piezas. Son funciones que todavía me cuestan recordar y configurar correctamente.

Auto Layout
La utilicé como apoyo para organizar las secciones del Home sin alterar la composición original del diseño.

HTML y CSS
Me ayudó a generar una primera estructura de código a partir del diseño realizado en Figma.

Reflexión

En este avance la inteligencia artificial me sirvió principalmente como una herramienta de apoyo para resolver dudas y avanzar en funciones que todavía no manejo con tanta facilidad. Por ejemplo, en Figma hay algunas interacciones, como los estados Hover y las animaciones, que todavía me cuesta configurar o recordar cómo realizar. En esos casos, Claude me ayudó a entender cómo implementarlas y a resolver algunos problemas que fueron apareciendo.


3. Pendientes para el próximo avance

Reemplazar los enlaces de Instagram, LinkedIn y GitHub por los perfiles reales.
Subir la carpeta sitio/ al repositorio de GitHub, dejando index.html en la raíz.
Completar el diseño mobile, incorporando Floriale, la galería y el footer.
Desarrollar las demás páginas del portfolio: detalle de proyectos, Floriale y contacto.
Revisar los tamaños de texto en mobile, especialmente aquellos que quedaron entre 6 y 8 px.
Revisar el contraste de los textos claros sobre los fondos rosados.
