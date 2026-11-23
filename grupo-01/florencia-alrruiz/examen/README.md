LINK FIGMA FLORENCIA ALRRUIZ https://www.figma.com/design/fzRnlbloZgh5nw5rnRrtaB/Florencia-Alrruiz-%E2%80%93-Portafolio?node-id=0-1&t=H98PrAZ6iHvI7S9t-1

LINK PÁGINA WEB http://floalrruiz.cl/

# Registro por avance: observaciones y mejoras implementadas

### 09 de noviembre de 2026 · Avance y correcciones con profesor Aarón

Durante la revisión con el profesor Aarón, uno de los principales comentarios fue la importancia de comenzar el proceso mediante un prototipo de baja fidelidad, antes de avanzar directamente hacia una propuesta visual más desarrollada. Esto permitiría evaluar primero la distribución de los componentes, la jerarquía de los contenidos y la organización general de la página, sin concentrar los esfuerzos iniciales en los detalles gráficos.

En mi caso, había comenzado trabajando directamente en una propuesta de alta fidelidad, por lo que fue necesario replantear parte del proceso y considerar una etapa previa de estructuración. Esta observación me permitió comprender la importancia de validar primero la composición y el funcionamiento del sitio antes de desarrollar sus detalles visuales e interacciones.

### 16 de noviembre de 2026 · Inasistencia

### 16/11/26- 23/11/2026 Trabajo de examen

Desarrollo y finalización del portafolio web, incorporando las correcciones realizadas durante el proceso, los ajustes de diseño, las animaciones y la adaptación de los componentes a las versiones de escritorio y móvil.

**Figma**

Se realizaron ajustes y se completó el prototipo interactivo, incorporando nuevos componentes y elementos necesarios para representar el funcionamiento final del sitio web.

- **Actualización del boceto:** se agregaron los botones de categorías sobre el carrusel y el espacio destinado a la animación de Florialé.
- **UI Kit:** se desarrollaron componentes con sus respectivos estados e interacciones: botón CONTACTO, botón de menú, botones de redes sociales, seis piezas gráficas (silueta y nombre en estado hover), botones de categoría (Default, Hover y Activo) y visor de proyecto (Foto 1 y Foto 2).
- **Prototipo interactivo en desktop y mobile:**
  - **Inicio:** se desarrollaron los prototipos «Prototipo · Home Desktop» y «Prototipo · Home Mobile».
  - **Página de proyecto:** se crearon «Prototipo · Proyecto Desktop» y «Prototipo · Proyecto Mobile». Como todas las páginas de proyecto comparten la misma estructura y solo cambia su contenido, se diseñó una plantilla utilizando Miau Armchair como ejemplo.
  - **Navegación entre pantallas:** las siluetas, las fotografías del carrusel, el botón «VER PROYECTO» y las imágenes de la galería permiten acceder a las páginas individuales de cada proyecto. Por otra parte, «Volver a proyectos» y el logo permiten regresar al inicio, mientras que CONTACTO dirige al footer.
  - **Completar versión mobile:** el boceto inicial llegaba hasta Miau Armchair, por lo que se incorporaron las secciones de Florialé, la galería y el footer, manteniendo las mismas dimensiones y estructura de referencia de la versión de escritorio.
- **Organización de prototipos:** debido al límite de tres páginas del plan gratuito de Figma, los prototipos interactivos se organizaron dentro de las páginas de wireframe, junto a los bocetos originales.

**Sitio web**

Se desarrolló el sitio web completo, compuesto por 12 páginas: `index.html` y una página individual para cada proyecto. Todas se encuentran conectadas mediante el menú, el carrusel, las siluetas, la galería y los enlaces de navegación anterior y siguiente.

- **Fidelidad al diseño de Figma:** se mantuvo la distribución visual definida en el boceto, respetando la posición, el tamaño, las proporciones y los colores de los elementos del inicio.
- **Estructura y organización:** se utilizó Flexbox para organizar las secciones y sus contenidos, incluyendo los textos del inicio, Conóceme, los filtros, el carrusel, Florialé, el footer y las páginas individuales de proyecto.
- **Interacciones y animaciones:**
  - **Conóceme:** al seleccionar la pestaña rosada se despliega una tarjeta con mis datos personales y fotografía, siguiendo la referencia del Frame 8 de Figma.
  - **Siluetas verdes:** al pasar el cursor sobre ellas cambian a un tono más claro y muestran el nombre del proyecto. Al hacer clic, dirigen a su página correspondiente.
  - **Carrusel guiado por scroll:** la sección permanece fija mientras se desplaza la página. Las fotografías de la columna izquierda aumentan progresivamente de tamaño hasta ocupar el marco de esquinas rosadas, permitiendo recorrer las imágenes de cada proyecto sin necesidad de hacer clic.
  - **Filtros:** las categorías Madera, Cerámica y tela, Exploración material y Digital permiten filtrar los proyectos del carrusel y la galería.
  - **Cuadrícula animada:** los cuadrados rosados acompañan el recorrido por la página, mientras que las fotografías de la galería se desplazan entre los recuadros mediante transiciones con efecto de disolución.
  - **Video de Florialé:** se reproduce en bucle mientras la sección permanece en pantalla.
  - **Cursor personalizado:** se incorporó un cursor con forma de flor y una estela de pétalos que acompaña el movimiento del puntero.
  - **Estados hover:** se agregaron cambios de color rosado claro al interactuar con CONTACTO, el menú, los filtros y los botones de redes sociales.
- **Diseño responsive:** se adaptó el sitio a dos formatos de visualización: desktop, desde 701 px, y mobile, hasta 700 px, utilizando una media query para ajustar la distribución de los componentes a pantallas más pequeñas.

---

# Uso de inteligencia artificial

**Herramienta:** Claude (Anthropic), utilizado desde la aplicación de escritorio, con acceso a mi archivo de Figma y a la carpeta del proyecto.

Utilicé la inteligencia artificial como herramienta de apoyo, principalmente para resolver aspectos técnicos de programación e implementar interacciones. El diseño, el contenido y las decisiones estéticas del portafolio son míos; la IA trabajó a partir de mi boceto de Figma y de las indicaciones que le fui entregando, y cada resultado fue revisado y corregido hasta que respondiera a lo que había diseñado.

### Registro de uso

| Tarea                                  | Indicación entregada (síntesis)                                                                                                                                                         | Resultado y problemas detectados                                                                                                                                       | Ajustes y mi participación                                                                                                                                                                                                                  |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Maquetación del sitio (HTML y CSS)** | Implementar el inicio y las páginas de proyecto respetando el boceto de Figma: distribución, dimensiones, proporciones, tipografías y colores; adaptar el diseño a desktop y mobile.    | La primera implementación reinterpretaba la composición: cambiaba tamaños, orden de imágenes y distribución. Además, la tipografía 42dot Sans no mostraba tildes ni ñ. | Revisé el resultado contra el boceto y pedí reproducir exactamente la composición original. Elegí mantener la versión organizada con flexbox después de comprobar que se veía igual que la versión con posiciones absolutas.                |
| **Animación de la cuadrícula**         | Programar el movimiento de los cuadrados rosados para que se desplacen por la página a medida que se navega, dentro de los límites de la cuadrícula.                                    | Al inicio el movimiento se limitaba a la primera sección.                                                                                                              | Pedí que los cuadrados recorrieran toda la página, con deslizamientos y disoluciones sutiles, sin deformarse ni salir de las celdas.                                                                                                        |
| **Carrusel de proyectos**              | Desarrollar una interacción vinculada al scroll, en la que las fotografías de la columna izquierda se desplazan y amplían progresivamente dentro del marco de esquinas rosadas.         | Los filtros, al quedar fijos en pantalla, se ubicaban demasiado arriba y cerca del encabezado.                                                                         | Definí el comportamiento del recorrido y pedí bajar los filtros, alinearlos desde el borde de las fotografías hasta el final del texto y distribuirlos de forma proporcional.                                                               |
| **Galería de imágenes**                | Programar la animación final, en la que las fotografías se trasladan entre los recuadros y aparecen y desaparecen mediante transiciones.                                                | Las imágenes debían ajustarse a cada recuadro sin cortes incorrectos ni superposiciones.                                                                               | Las fotografías de la galería provienen de mi diseño en Figma, y la clasificación de los proyectos por categoría la definí yo. Las tres imágenes cuyo proyecto no está confirmado quedaron sin enlace para evitar asociaciones incorrectas. |
| **Cursor personalizado**               | Crear un cursor con forma de flor y una estela de pétalos que se desprenden al mover el cursor, de manera delicada y sin interferir con la navegación.                                  | La primera versión se construyó a partir de la flor del logotipo de Florialé, cuyo dibujo está cruzado por el trazo de la letra F.                                     | Decidí reemplazarla por una flor a partir de una imagen de referencia que entregué, y definí el tono rosado de la identidad visual y el carácter sutil de la estela.                                                                        |
| **Integración audiovisual**            | Incorporar el video de Florialé en el espacio destinado a la animación y reproducirlo en bucle.                                                                                         | El archivo original (.mov en formato HEVC) no se reproduce en todos los navegadores.                                                                                   | Produje la animación de Florialé y definí su ubicación. La IA asistió en la conversión del video a un formato web compatible y en su reproducción automática.                                                                               |
| **Prototipo en Figma**                 | Reconstruir el prototipo con auto layout sin alterar la apariencia, crear componentes con estados, diseñar la plantilla de página de proyecto y conectar la navegación entre pantallas. | La versión mobile del prototipo quedó incompleta en un primer momento.                                                                                                 | Revisé el prototipo y pedí completar la versión mobile con las mismas secciones del desktop.                                                                                                                                                |
| **Organización y redacción**           | Ordenar la información del proceso y redactar el README de manera clara.                                                                                                                | —                                                                                                                                                                      | Usé la IA para estructurar mis ideas y mejorar la claridad de los textos. Revisé y ajusté la redacción final.                                                                                                                               |


# Aprendizajes durante el proyecto

El desarrollo del portafolio web me permitió acercarme a herramientas y recursos de programación que no habíamos trabajado en profundidad durante las clases. Debido a que mi propuesta incluía animaciones, interacciones y comportamientos específicos que buscaba replicar desde Figma, fue necesario explorar nuevas posibilidades de CSS y JavaScript, utilizando Claude como apoyo tanto para su implementación como para comprender, en la medida de lo posible, su funcionamiento.

Uno de los principales aprendizajes fue entender que desarrollar una página web no consiste solamente en trasladar un diseño visual a código, sino también en comprender cómo se relacionan sus elementos, cómo se comportan frente a las acciones del usuario y cómo se adaptan a diferentes dispositivos.

**1. Organización y composición mediante CSS**

Durante el proyecto pude profundizar en distintas formas de organizar y posicionar elementos. Aprendí a reconocer las diferencias entre Flexbox y el posicionamiento absoluto, comprendiendo que cada uno responde a necesidades distintas. Mientras Flexbox permite organizar contenidos de manera flexible, el posicionamiento absoluto me permitió mantener composiciones específicas, como el collage de siluetas y la galería de imágenes.

También conocí propiedades como `position: sticky`, utilizada para mantener fijo el carrusel durante el desplazamiento de la página, y otras como `object-fit` y `filter`, que permiten controlar la visualización de las fotografías y modificar el aspecto de ciertos elementos al interactuar con ellos.

Además, incorporé variables CSS y unidades personalizadas para mantener las proporciones del diseño en distintos tamaños de pantalla.

**2. Animaciones e interacciones mediante JavaScript**

Uno de los aprendizajes más importantes fue conocer las posibilidades de JavaScript para desarrollar interacciones más complejas. Con ayuda de Claude pude implementar animaciones vinculadas al desplazamiento de la página, controlar el movimiento y tamaño de las fotografías del carrusel y desarrollar transiciones entre las imágenes de la galería.

También conocí herramientas como `element.animate()`, `async/await` e `IntersectionObserver`, que permiten controlar animaciones, organizar acciones en secuencia y detectar cuándo un elemento se encuentra dentro del área visible de la pantalla.

Sin embargo, aunque pude implementar estos recursos y comprender de manera general su propósito, todavía necesito profundizar en su funcionamiento interno. En varias ocasiones dependí de las explicaciones y del código generado por la IA para conseguir el resultado esperado, sin tener completamente claro cómo reproducirlo desde cero o modificarlo de manera independiente.

**3. Organización de información y navegación**

Durante el desarrollo también pude comprender mejor la importancia de organizar la información y mantener una estructura coherente entre las distintas páginas del sitio. Aprendí cómo utilizar archivos externos para separar los contenidos de los proyectos de su presentación visual y cómo conservar información mediante parámetros en las direcciones URL, permitiendo que los filtros seleccionados se mantuvieran al regresar desde una página individual.

A pesar de haber conseguido implementar estas funciones, considero que todavía debo profundizar en la organización del código JavaScript y en la relación entre los distintos archivos, especialmente para poder comprender y mantener estructuras más complejas sin depender constantemente de la IA.

**4. Accesibilidad y adaptación de las interacciones**

Otro aspecto que pude conocer fue la importancia de considerar la accesibilidad durante el desarrollo web. Incorporé recursos para respetar la preferencia de reducir movimiento configurada en los dispositivos y permitir que ciertos elementos pudieran utilizarse mediante teclado.

También comprendí que los componentes interactivos deben comunicar correctamente su estado, por ejemplo, indicando si un menú está abierto o qué filtro se encuentra seleccionado.

Si bien pude implementar estas características con ayuda de Claude, es un área que me gustaría seguir estudiando, ya que inicialmente mi atención estuvo más concentrada en la apariencia visual y las animaciones que en la accesibilidad del sitio.

**5. Preparación y optimización de recursos**

También aprendí que el desarrollo web requiere preparar los recursos gráficos y audiovisuales para asegurar su correcta visualización en distintos navegadores. Durante el proyecto fue necesario adaptar la tipografía 42dot Sans para incorporar caracteres como las tildes y la ñ, además de convertir algunos archivos de video e imágenes a formatos compatibles con la web.

En este punto, la IA también utilizó herramientas y procesos que no conocía previamente para automatizar algunas tareas, como la generación de las páginas individuales de los proyectos a partir de una estructura común. Si bien esto permitió agilizar el desarrollo y evitar la repetición de código, considero que fue uno de los aspectos que menos alcancé a comprender. Me faltó profundizar en cómo funcionaba ese proceso, qué herramientas utilizaba y cómo podría realizarlo o modificarlo por mi cuenta.

**Reflexión final**

En general, este proyecto me permitió ampliar mis conocimientos sobre desarrollo web y experimentar con recursos que inicialmente no sabía cómo implementar. Sin embargo, también pude reconocer que utilizar inteligencia artificial para resolver dificultades técnicas no significa necesariamente dominar las herramientas utilizadas.

En algunos casos logré comprender el funcionamiento de los componentes gracias a las explicaciones de Claude y a las pruebas realizadas directamente en el navegador, mientras que en otros dependí más de las soluciones que me entregaba la herramienta. Esto me permitió identificar conocimientos que todavía necesito desarrollar, especialmente en JavaScript, la organización del código, la automatización de procesos y la implementación de animaciones más complejas.

Considero que uno de los aprendizajes más importantes fue entender cómo utilizar la IA como apoyo sin dejar de participar activamente en las decisiones del proyecto. Aprendí a formular instrucciones más precisas, detectar errores, solicitar correcciones y evaluar los resultados según mis propios criterios de diseño. Al mismo tiempo, reconozco que necesito seguir profundizando en los aspectos técnicos para adquirir mayor autonomía y poder desarrollar futuras páginas web comprendiendo no solo el resultado, sino también el código que hay detrás de él.
