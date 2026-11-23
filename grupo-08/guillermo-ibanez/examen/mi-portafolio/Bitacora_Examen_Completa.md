# Bitácora / Portafolio Examen

https://www.figma.com/design/OgOypnD8pmgQdBuEAz1LvV/Guillermo_Ib%C3%A1%C3%B1ez_Examen?node-id=65-50&t=4UtCKJTQP6Nj3rnA-1

La idea de la página es que sea limpia y poco cargada visualmente. Lo que mas debe resaltar son los proyectos, los títulos y las fotos de las maquetas, procesos o resultados finales.

- Tipografía: IBM Plex Mono (para mantener la onda de plano técnico o ficha de taller).
- Fondo claro para que las piezas y renders destaquen bien.

## Referentes

1. **Yana Savchuk (https://readymag.website/u1844866726/5818315/) uso de grilla
2. **Anatoly Ivanov (https://anatoly.design) jerarquia de proyectos sobre información
3. **soup.work (https://soup.work/project/nigo) textos grandes y llamativos 

## Paleta

* `#FFFFFF` -> Fondo principal
* `#F4F4F6` -> Tarjetas y bloques 
* `#D1D5DB` -> Líneas y bordes 
* `#111111` -> Texto general 
* `#4A2E80` -> Títulos y números
* `#6E3AFF` -> Botones / hover
* `#E0D5FF` -> Fondo de los tags

## Proyectos

1. **01. Construcción entrejuegos (Museo de la Memoria)**
Proyecto realizado durante el 1° semestre del año 2025 para el museo de la memoria, donde se buscaba generar un espacio de descanso en la explanada principal de este, y el disfrute de los juegos sin reglas ni restricciones.

2. **02. Objeto luminico Inmersivo**
Lampara sobre-dimensionada en la escala humana para poder entrar en esa y buscar el resguardo de la luz dentro de esta, mas que solo por el espacio que delimita la misma.

3. **03. AUTOLAB**
Un proyecto diseñado para niños y niñas de 6 años en adelante, que busca fomentar la creatividad, el juego libre y el desarrollo de habilidades motrices y cognitivas.

4. **04. Mobiliario Plastico reciclado**

5. **05. Taburete acero al carbono**


## sobre mi 

1. Estudiante de diseño industrial y apasionado de taller. Me interesa trabajar distintas materialidades, probar estructuras y fabricar prototipos bien pensados, desde el modelado hasta la pieza real.

2. Combinando procesos digitales con el mundo más análogo. Investigación de materiales y diseño de objetos funcionales.

3. Basado en Santiago. Siempre abierto a conversar sobre proyectos, o cualquier cosa en general.

## Proceso Fecha: 16-11-2026
Figma. Orden del archivo y UI Kit

Hoy estuve metido en Figma tratando de bajar a tierra cómo se va a ver mi portafolio antes de ponerme a escribir código. La idea es armar una base sólida para no estar improvisando cada sección de la página. Lo primero que hice fue armar el UI Kit. Elegí la tipografía IBM Plex Mono para toda la página por su estilo más técnico y similar a una ficha de taller o plano, que calza bien con lo que hago entre lo digital y lo físico. Para los colores decidí irme a la segura con blancos y grises suaves de fondo, cosa de que los proyectos no compitan con nada y sean lo primero que se vea al navegar por la página. El toque de identidad se lo di con una gama de morados y lilas: uno bien oscuro para mi marca (GUI.BEL) y los títulos, otro más marcado para los "hover", y un morado más claro para distintas etiquetas y la caja de contacto de abajo.   En el home de desktop dividí la lectura en dos columnas, donde se reparten títulos, párrafos e imágenes para así mantener la página dinámica y no tan rígida. Para la sección de proyectos quise jugar con los espacios negativos, dejando margenes al a los lados de las tarjetas pero creando un orden donde todas las tarjetas miden lo mismo. Armé una composición asimétrica jugando con distintos tamaños para las fotos (AutoLab, Experiencia Lumínica, Nodos de Energía, Entre Juegos), cosa de darle más ritmo al hacer scroll. Al lado dejé ya duplicada la plantilla base con el encabezado y el pie de página listos para empezar a diseñar cómo se va a ver cada proyecto por dentro.
Después pasé a armar la versión mobile para ver cómo se adapta todo en pantalla chica. Ahí tuve que apilar los elementos en una sola columna hacia abajo. En el encabezado invertí el orden dejando "Diseñador Industrial" arriba de "GUI.BEL" para aprovechar mejor el ancho. En la parte de los proyectos, para que no quedara una fila recta súper monótona, fui cargando las tarjetas hacia la izquierda y derecha en zigzag para mantener esa misma intención dinámica del desktop.   Al final dejé armados los componentes con sus variantes (estado normal y "hover") para los links de contacto y las tarjetas de proyectos, pensando en facilitar después el paso a código. Me quedó pendiente revisar bien el contraste de algunos textos que van encima de las fotos, como en AutoLab o Nodos de Energía, porque se pierden un poco con el fondo. 

## Proceso Fecha: 18-11-2026
Estructura base en HTML, arquitectura de archivos y traspaso de grilla CSS

Partí pasando el diseño de Figma a código. Antes de ponerme de lleno a eso, me dediqué a ordenar bien las carpetas para no hacerme un enredo con las rutas después. Dejé los archivos HTML en la raíz (`index.html` y uno separado por cada proyecto: `autolab.html`, `luminica.html`, `nodos.html` y `museo.html`) y metí todas las fotos ordenadas por subcarpetas dentro de `img/` según el nombre de cada entrega.

Para maquetar el home usé CSS Grid en dos columnas principales (`1fr 1fr`), tratando de respetar tal cual los espacios negativos y las proporciones que había armado en el prototipo. En el encabezado quise dejar la barra flotante fija arriba con efecto de desenfoque (`backdrop-filter: blur`), para darle un toque más sutil de interfaz limpia sin tapar los títulos principales ni competir con el nombre `GUI.BEL`. 

Uno de los puntos que más me costó ajustar fue la grilla asimétrica de los proyectos. Quería que *AutoLab* y *Entre Juegos* ocuparan el ancho completo de su columna, mientras que *Nodos de Energía* y *Experiencia Lumínica* se vieran más chicas (`65%` de ancho) y cargadas hacia los bordes internos para generar un ritmo al hacer scroll. Estuve probando con `align-self` y distintas proporciones (`aspect-ratio`) para que las fotos no se recortaran mal ni se vieran deformadas.

## Proceso Fecha: 20-11-2026
Interacciones en JavaScript, carrusel de proyectos y apoyo con IA para movimiento

Hoy me metí de lleno con el archivo `script.js` para darle algo de vida a la página y que no se sintiera tan estática como un PDF. Lo primero que armé fue el carrusel de imágenes para las vistas internas de cada proyecto, cosa de poder avanzar y retroceder entre las fotos de resultados, planimetrías y renders usando tanto los botones laterales como las flechas del teclado (`ArrowLeft` y `ArrowRight`), que encuentro mucho más cómodo cuando uno está revisando una pagina en computador.

Para la parte de las animaciones al hacer scroll y el movimiento de las tarjetas en el home me apoyé en IA, ya que quería lograr un efecto sutil de inclinación 3D al pasar el mouse por encima de cada proyecto, pero sin que se viera exagerado ni mareante.

* **Prompt utilizado:** *"Necesito un código en JavaScript  para mi portafolio web donde las tarjetas de proyectos tengan una inclinación 3D según la posición del cursor al hacer hover, además de una animación con IntersectionObserver para que las secciones vayan apareciendo de a poco al bajar con el scroll."*

Con la base que me dio la IA fui ajustando los valores a mano: bajé los grados de rotación para que fueran bien leves (`-5deg` a `5deg`) y ajusté la transición de vuelta para que no diera saltos bruscos al sacar el mouse. Aproveché también de pedirle ayuda para armar un cursor personalizado que sigue el puntero con un pequeño desfase suave y se agranda al pasar sobre los links, etiquetas y botones.

* **Prompt utilizado:** *"Cómo puedo hacer un cursor en forma de círculo pequeño en CSS y JS que siga el mouse con un leve destiempo, que se agrande manteniendo sus bordes al pasar sobre enlaces o botones, y que desaparezca automáticamente en celulares o pantallas táctiles."*

Al probarlo me gustó harto cómo quedó porque amarra toda la paleta del UI Kit con la interacción, y el detalle de desactivarlo en `@media (pointer: coarse)` evitó que quedara un punto pegado en la pantalla al abrirlo desde el teléfono.

## Proceso Fecha: 22-11-2026
Pruebas de visualización, problemas con formatos de imagen y revisión de textos

Hoy hice una pausa para revisar cómo se estaba viendo todo con contenido real cargado y lo presente para ver cómo navegaban la página sin que yo les explicara nada. Ahí saltaron varios detalles que en Figma no se notaban tanto.

Primero tuve un problema técnico con las rutas de las fotos: algunas imágenes de *Nodos de Energía* y mi propia foto de perfil las tenía guardadas en `.png` y otras en `.jpg`, por lo que al navegar entre proyectos algunas quedaban rotas. Para no tener que ir renombrando y exportando todo de nuevo uno por uno, agregué una pequeña función `onerror` en el HTML y en el carrusel de JS para que, si no encuentra el archivo `.jpg`, busque automáticamente la versión `.png` o `.jpeg`. 

También aproveché de editar los textos de la sección de presentación y de cada ficha de proyecto. Me di cuenta de que en la intro había escrito párrafos muy largos que hacían que la primera vista se viera muy cargada de lectura, así que los resumí para dejar ideas más directas sobre cómo trabajo entre el modelado CAD (Rhino, Inventor, AutoCAD, Fusion360) y el prototipado físico (corte láser e impresión 3D), destacando también mi paso trabajando en Dulox como diseñador técnico y operador láser.

## Proceso Fecha: 23-11-2026
Ajustes finos de alineación, contraste sobre fotografías y versión responsive

En esta última jornada estuve puliendo los detalles finales de diagramación antes de cerrar el código. El mayor problema fue la alineación de la sección de presentación y "Sobre mí". Al principio había metido todo dentro de dos columnas continuas usando un margen fijo (`gap`) para empujar el título "Sobre mí" hacia abajo, pero apenas cambiaba el tamaño de la ventana del navegador, el título se desacoplaba y quedaba flotando solo mucho más abajo que el párrafo de la biografía.

Para solucionarlo bien y no depender de medidas fijas, reestructuré esa parte en dos filas independientes de grilla (`about-row`)

1. En la primera fila dejé mi foto a la izquierda y el saludo junto a los tags de herramientas a la derecha, usando `align-items: center` para que el bloque de texto quedara centrado exactamente respecto a la altura vertical de la foto.

2. En la segunda fila dejé el título "Sobre mí" a la izquierda frente a los dos párrafos de biografía en morado oscuro (`#4A2E80`) a la derecha, alineados arriba. Así, sin importar qué tan ancha sea la pantalla, siempre se mantienen juntos.

Por último, revisé el tema del contraste que había dejado pendiente en Figma. En tarjetas como *Experiencia Lumínica*, donde la foto tiene zonas muy oscuras y otras muy iluminadas, las etiquetas superiores y el título se perdían un poco, así que les agregué una base semitransparente oscura con desenfoque (`backdrop-filter: blur(6px)`) y texto blanco. También verifiqué la versión mobile en pantalla chica (`max-width: 48rem`), comprobando que el encabezado invirtiera bien su orden, que las tarjetas mantuvieran el zigzag alternando izquierda y derecha (`78%` de ancho), y que las píldoras de año y categoría quedaran siempre visibles en celular ya que ahí no existe el estado `hover`.
