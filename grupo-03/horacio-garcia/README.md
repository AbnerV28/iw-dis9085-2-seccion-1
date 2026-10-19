# Bitácora de Proceso - Solemne 2: Diseño Abierto 2026

## ¿Qué hice en el sitio?
Como parte del equipo, me encargué de la integración y correcta aplicación de la identidad tipográfica del proyecto. Específicamente, revisé el prototipo en Figma para identificar los pesos y estilos exactos de la fuente **Infra**, y configuré las reglas `@font-face` en CSS junto con la jerarquía de textos (títulos, subtítulos y párrafos) para asegurar que la apariencia visual fuera totalmente coherente con el diseño original.

## ¿Qué dificultades tuve y cómo las resolví?
Una de las principales dificultades fue vincular correctamente toda la familia de archivos locales .otf en la hoja de estilos y hacer que el navegador interpretará de forma precisa los pesos tipográficos específicos indicados en el diseño (como regular, medium y light). Para resolverlo, consulté los materiales de apoyo de la asignatura y realicé una consulta asistida con IA para estructurar el código de las fuentes.

## Consulta IA: declarar y aplicar los pesos tipográficos de Infra

**Código antes:**
```css
body {
    font-family: sans-serif;
}

Prompt usado:
¿Cómo declaro correctamente en CSS mediante @font-face los archivos .otf de una tipografía local y cómo configuro los font-weight para usar distintos pesos como regular, medium y light?
Código después:
CSS
@font-face {
    font-family: 'Infra';
    src: url('tipografias/InfraRegular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Infra';
    src: url('tipografias/InfraMedium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
}

Sugerencias aceptadas: Declarar cada variante de la fuente en el CSS especificando con precisión su font-family, src, font-weight y font-style para aplicarlas mediante clases y selectores en todo el sitio.
Recursos utilizados:
Apuntes de clases sobre estilos CSS y tipografías.
Material de apoyo oficial: Propiedades de texto y fuentes.
Documentación de MDN Web Docs (@font-face).
Lenguaje CSS (Manz.dev).
¿Qué aprendí?
Aprendí a gestionar tipografías personalizadas en un sitio web mediante código CSS puro, comprendiendo la importancia de alinear los pesos tipográficos con el sistema de diseño establecido en Figma.

