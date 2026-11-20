# Bitácora de Proceso Individual — Portafolio Personal

## Abner Villegas

## <https://www.figma.com/design/ZJYsKjWZMWz0gF1hA8Y8Vw/Ex%C3%A1men-Portafolio?node-id=1-2&t=Z5lXoNSo9CkCJkET-1>

---

## 9/11

---
## ¿Qué hice en el sitio?

Para este proyecto trabajé desde la concepción visual hasta el desarrollo práctico del sitio web, pasando por una investigación de referentes, diseño de interfaz en Figma y la programación completa del portafolio mediante iteraciones con inteligencia artificial (**Claude**), integrando imágenes recortadas, animaciones, videos en *loop* y música *8-bit*.

### Definición de contenidos y referentes visuales

- **Curaduría de proyectos:** Seleccioné los trabajos de mi formación centrándome en el área audiovisual (animación digital, animación manual, stop motion, teatro y video experimental) junto con proyectos de branding e identidad visual.
- **Referente principal de diagramación (Joia Magazine):** Tomé como base la revista [Joia Magazine](https://joiamagazine.com/) por su forma de organizar información e imágenes mediante bloques marcados y estructurados, permitiéndome ordenar piezas diversas de forma limpia y legible.
- **Análisis de otros referentes web:** Revisé sitios para rescatar ideas de composición, bloques visuales e interactividad:
  - **Joia Magazine:** [https://joiamagazine.com](https://joiamagazine.com) (Grilla modular y bloques marcados).
  - **Bruno Simon:** [https://bruno-simon.com](https://bruno-simon.com) (Interfaz lúdica e interactiva).
  - **Lusion:** [https://lusion.co](https://lusion.co) (Composición espacial y propuesta visual contemporánea).
  - **Ochi Design:** [https://ochidesign.net](https://ochidesign.net) (Bloques visuales potentes y tipografía de gran formato).
  - **Koto Studio:** [https://koto.studio](https://koto.studio) (Orden y presentación de galerías de proyectos).
  - **Aristide Benoist:** [https://aristidebenoist.com](https://aristidebenoist.com) (Equilibrio entre contenido audiovisual y texto).
  - **Dennis Snellenberg:** [https://dennissnellenberg.com](https://dennissnellenberg.com) (Distribución de elementos en pantalla).
  - **Plataformas de inspiración:** [Awwwards](https://www.awwwards.com), [Godly Website](https://godly.website) y [Hover Stat.es](https://hoverstat.es).

### Diseño en Figma y creación inicial en Claude

- **Diseño del recurso visual en Figma:** Maqueté la propuesta gráfica de mi portafolio en Figma con estética retro/arcade, exportando la imagen de referencia de pantalla completa (`1920 × 1080 px` / `1440 × 900 px`).
- **Primer Prompt enviado a Claude (Creación de la base HTML):** Le entregué a Claude la imagen exportada desde Figma para que tradujera el diseño visual a código funcional:
  > *"Ayúdame a crear esta página según el recurso visual que te mandé desde Figma (la imagen)."*
- **Pruebas e integración de animaciones iniciales:** A partir del código HTML que me entregó Claude, estuve probando la página en el navegador y agregué varias animaciones tanto para la pantalla previa antes del *Home* (*Press Start Button*) como dentro del mismo *Home* (movimiento de nubes y transiciones).

## UI Kit

<img width="582" height="370" alt="image" src="https://github.com/user-attachments/assets/0743a51b-c74e-40d1-bb47-f5a4a9f80e3b"/>

## Desktop

<img width="1004" height="638" alt="image" src="https://github.com/user-attachments/assets/4d8be49a-d570-4be5-9f68-c61a3aaf4574"/>

## Mobile

<img width="477" height="693" alt="image" src="https://github.com/user-attachments/assets/af5fb089-3367-4668-94dc-7be64fe3a98b"/>

## Utilización de claude

https://github.com/user-attachments/assets/f810dd68-2e46-495f-85f2-ac0a0b5988a5

### Etapa 3: Preparación de carpeta comprimida y ajustes finales en Claude

- **Recolección y limpieza de recursos:** Reuní todas las imágenes de mis trabajos, videos y audio en una **carpeta comprimida**, limpiando manualmente el fondo blanco de la mayoría de las imágenes de branding para respetar sus transparencias.
- **Segundo Prompt enviado a Claude (Integración de carpeta, música, videos en loop y enlaces):** Le envié la carpeta comprimida con todos los archivos y le di las instrucciones específicas para cerrar todas las secciones del sitio:
  > *"Hola, sigamos trabajando sobre la base del código anterior y la carpeta comprimida con las nuevas imágenes y recursos que te adjunté. Necesito aplicar los siguientes ajustes finales para cerrar el sitio:*
  > *1. Navegación (Banner): El menú superior debe tener 4 botones funcionales: Branding, Audiovisual, Sobre mí y Contacto, redirigiendo cada uno a su respectiva sección o página.*
  > *2. Home: Elimina el título grande que dice 'Proyectos' y deja únicamente los botones principales de Branding y Audiovisual.*
  > *3. Pantalla de inicio (Audio 8-bit): Agrega la música estilo 8-bit para que suene únicamente en la pantalla inicial al interactuar con el botón 'Press Start Button' (que no siga sonando al pasar al resto del sitio).*
  > *4. Sección Sobre mí: Baja la opacidad de la imagen de fondo en esta sección para que no compita visualmente con el contenido. El botón/pregunta '¿Quieres animar tu logo?' debe dirigir a esta sección (Sobre mí) y activar su animación correspondiente, configurando el video para que se reproduzca en loop continuo.*
  > *5. Sección Audiovisual: Integra los videos de Teatro y Experimental que te envié, configurados para que se reproduzcan automáticamente en loop al entrar.*
  > *6. Sección Branding: Utiliza el nuevo fondo que te adjunté para esta página y respeta las transparencias de las imágenes (ya les limpié el fondo blanco a la mayoría de los elementos).*
  > *7. Contacto: Conecta el ícono de Instagram hacia `@_.dm_one` (`https://instagram.com/_.dm_one`) y configura el correo `abnervilegasadonis1999@gmail.com` como un enlace directo (`mailto:abnervilegasadonis1999@gmail.com`) para que abra el cliente de correo al hacer clic.*
  > *Mantén intacto el resto del diseño y las animaciones actuales, que se ven muy bien."*

---

## ¿Qué dificultades tuve y cómo las resolví?

- **Recolección y edición de material de mis trabajos:** Lo que más me costó fue reunir todas las imágenes y videos de mis proyectos anteriores, organizarlos en una carpeta comprimida y limpiar manualmente el fondo blanco de la mayoría de los elementos de branding para que se integraran bien con el diseño.
- **Lograr que las animaciones quedaran bien:** Ajustar las animaciones tanto en la pantalla previa (*Press Start*) como en el *Home*, además de lograr que los videos de *Sobre mí*, *Teatro* y *Experimental* funcionaran en *loop* fluido sin interrumpir la navegación ni saturar el audio 8-bit, requirió varias pruebas sobre el código HTML.
- **Colocar y encuadrar bien las imágenes en la página:** Tuve dificultades para posicionar correctamente las imágenes dentro del sitio y que respetaran sus proporciones y transparencias sin desalinearse. Tras varias iteraciones en el código, logré que en la página se vieran bien. *(Adjunto captura de pantalla del resultado en el navegador).*

<img width="1119" height="782" alt="image" src="https://github.com/user-attachments/assets/1663f2d2-e426-48d6-82f3-70ebbc90d0cc"/>

---

## ¿Qué aprendí?

1. Aprendí a definir la identidad de mi portafolio a partir de mis gustos e intereses reales (lo audiovisual, la animación y el branding), organizándolos bajo una grilla modular inspirada en [Joia Magazine](https://joiamagazine.com/).
2. **Traducción de Figma a código mediante prompts:** Aprendí a trabajar con inteligencia artificial (Claude) partiendo desde una imagen diseñada en Figma y escalando el proyecto mediante una carpeta comprimida de recursos reales (videos en *loop*, audio *8-bit* e imágenes sin fondo), redactando instrucciones claras y detalladas para controlar cada interacción.
3. **Importancia de la prueba y ajuste manual en el navegador:** Comprendí que generar el código base es solo el primer paso; el verdadero acabado visual depende de probar directamente en el navegador, ajustar opacidades, corregir el posicionamiento de las imágenes y pulir el ritmo de las animaciones.

## Proyecto FINAL

https://github.com/user-attachments/assets/d14dc5b0-7ccc-47d9-8534-b31fd9c4d853

### Dificultades para crear la página
Hubo muchos problemas con el tamaño de imágenes al pasarlo en código, prácticamente las imágenes estaban todas pequeñas por lo que se le preguntó a la IA y con pequeños ajustes se llegó a un estándar de tamaño con las fotos.

Le consulté "con el código base, al colocar el código en VSCode las imágenes estaban todas pequeñas y se ven mal además de que no están posicionadas como las quiero" por lo que la IA me dio este código:

```html
<article class="proy">
        <div class="col">
          <!-- logo arriba -->
          <img class="logo" src="logo.png" alt="">
          <p>DESCRIPCIÓN DEL PROYECTO</p>

        <div class="fila">
          <!-- imágenes debajo del texto -->
            <img src="sticker.png" alt="">
            <img src="tote.png" alt="">
        </div>
        <img class="mult" src="meta.png" alt="">
        </div>
        <!-- afiche a la derecha -->
        <img class="lateral" src="afiche.png" alt="">
      </article>
 <style>
/* BRANDING */
.proy { display: flex; align-items: stretch; background: var(--crema); overflow: hidden; margin-bottom: 32px; }
.proy .col { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: center; gap: clamp(16px, 2.5vw, 32px); padding: clamp(20px, 4vw, 64px); }
.proy .logo { width: min(100%, 440px); display: block; }
.proy p { margin: 0; color: var(--rojo); font-family: var(--mono); font-size: clamp(11px, 1.6vw, 16px); line-height: 1.6; }
.proy .fila { display: flex; align-items: center; gap: clamp(12px, 2vw, 28px); }
.proy .fila img { flex: 1; min-width: 0; width: 100%; display: block; }
.proy .mult { width: 100%; display: block; }

@media (max-width: 700px) {
  .proy { flex-direction: column; }
  .proy .lateral { width: 100%; }
}
</style>
```

## Link al sitio web

<https://abnerv28.github.io/PortafolioAbnerVillegas-/>
