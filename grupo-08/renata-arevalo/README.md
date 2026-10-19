## Declaración de IA - Actividad 2

Le adjunté el código que nos proporcionó Natassja a la IA, pero no para pedir correcciones ni cambios, sólo le hice preguntas específicas sobre ciertos elementos del código:

Consulté:

 - Cómo hacer bordes redondeados en los bloques  --> border-radius

 - Cómo separar las líneas de texto --> line-height

#### Código adjunto a la IA --> Código de Natassja

```cpp
/* Basico */
* {
    box-sizing: border-box; /*el ancho incluye padding y borde*/
}

body {
    margin: 0;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
    color: #F1DEA8;
    background: beige;
}

img {
    max-width: 100%;
}

/* Header */

header {
    max-width: 75rem;
    margin: 0 auto;
    padding: 3rem 2rem;
    border-bottom: 4px solid rgb(196, 111, 7);
}

h1 {
    margin: 0;
    font-size: 2.5rem;
}

.auto {
    font-size: 1.2rem;
    color: brown;
}

/* main (contenido principal) */

main {
    max-width: 75rem;
    margin: 0 auto;
    padding: 3rem 2rem;
}

div {
    margin: 0 0 2rem;
    padding: 1rem;
    background: white;
    border: 1px solid brown;
}

section {
    padding: 1.5rem 2rem;
    margin-bottom: 1.5rem;
    background: white;
    border: 1px solid brown;
}

h2 {
    margin: 0;
    font-size: 1.5rem;
}

.destacado {
    background: beige;
    padding: 1rem;
}

.button {
    margin-top: 1;
    padding: 0.75rem 1.5rem;
    background: brown;
    color: white;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-decoration: none;
}

footer {
    max-width: 75rem;
    margin: 0 auto;
    padding: 3rem 2rem;
}
