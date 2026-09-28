# Clase 2 — s07

**Lunes 28-09**

Hoy seguiremos con HTML5 semántico, su estructura base y atributos. Para luego continuar con CSS, su sintáxis básica y modelo de cajas. Para esto hay que copiar el html index-base.html y descargar la imagen wishbone.png ya que trabajaremos en clase el estilo CSS.

**Presentación:** https://drive.google.com/drive/folders/1foRHOEnOLeqj2xzJxBMWIi_6VmTgGpaN

**Material complementario:**
* Html y Css. Diseño y Construcción de Sitios web. Jon Duckett.
* MDN: CSS Properties: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties
* Manz.dev: Lenguaje CSS: https://lenguajecss.com/css/
* ENIUN: CSS Nivel inicial: https://www.eniun.com/cursos-diseno-desarrollo-web/
* W3 Schools: CSS Tutorial: https://www.w3schools.com/css/default.asp

# Actividad en clase:

Elige un objeto de diseño que te guste: una silla, un afiche, una tipografía, etc. y construye una página web que funcione como ficha de ese objeto.

* Crea la página a partir de los códigos html y css realizados en conjunto en clase.
* En el html cambia la imagen, textos y links por las de tu objeto elegido.
* En el css cambia los colores, tipografías, tamaños y márgenes para que la apariencia de la página sea más acorde al estilo del objeto.
* Agrega una nueva sección dentro del body.
* Sube tu trabajo al repositorio del curso.

Si tienes problemas o dudas revísalo con IA, pero **siempre documéntalo en el README.md:** escribe el código inicial antes de cambiarlo, luego el prompt que usaste, luego que sugerencias aceptaste aplicar y cuales rechazaste.

## Cómo documentar la IA en Markdown

Markdown es un lenguaje de marcado ligero para dar formato a texto plano (se usa en READMEs, wikis, foros, Slack, etc.): con unos pocos símbolos (`#`, `*`, `**`, ` ``` `) das estructura al texto. Estas son las normas mínimas para que tu documentación de IA quede ordenada y legible:

* **Encabezados (`#`, `##`, `###`...):** cumplen el mismo rol que `<h1>`, `<h2>`, `<h3>` en HTML (mientras más `#` uses, más baja es la jerarquía). Usa uno por cada consulta a la IA, así queda un registro cronológico y fácil de navegar.
* **Bloques de código (```` ``` ````):** envuelve todo el código (el inicial y el modificado) en un bloque de código, indicando el lenguaje después de las comillas para que se coloree bien, por ejemplo ` ```html ` o ` ```css `. Nunca pegues código suelto sin bloque, se pierde la indentación y se puede confundir con texto normal.
* **Citas (`>`):** úsalas para copiar el prompt exacto que le escribiste a la IA, así se distingue claramente de tus propias explicaciones.
* **Listas (`*` o `1.`):** enuméralas para indicar qué sugerencias aceptaste y cuáles rechazaste, con una razón breve para cada una.
* **Negrita (`**texto**`) y cursiva (`*texto*`):** úsalas para resaltar palabras clave (por ejemplo **antes**, **después**, **aceptado**, **rechazado**), no para escribir párrafos completos.

Ejemplo de cómo registrar una consulta a la IA siguiendo estas normas:

````markdown
## Consulta IA: centrar el botón

**Código antes:**
```css
.boton {
  margin: 0 auto;
}
```

**Prompt usado:**
> ¿Cómo centro este botón horizontal y verticalmente dentro de su contenedor?

**Código después:**
```css
.boton {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

**Sugerencias aceptadas:** usar `flex` para centrar en ambos ejes.
**Sugerencias rechazadas:** usar `position: absolute`, porque complicaba el resto del layout.
````

# Comenzamos a preparar la segunda Solemne (19 octubre):

En grupo, construirán un sitio web de una sola página (single page) con HTML y CSS, sobre un tema que elijan dentro de estas categorías: un proyecto o colección, un evento o exposición, un emprendimiento o espacio, o una causa u organización.

Pueden usar IA, pero deben ajustarlo y ser capaces de explicar cada decisión.

El sitio debe tener:
* Un header con navegación por enlaces internos a cada sección.
* Una portada o banner principal con título y presentación.
* Al menos tres secciones de contenido.
* Botones.
* Un footer.
* Jerarquía visual clara.

Para ver referencias de single pages:
* Minimal Gallery: https://minimal.gallery/tag/one-page/)
* One page love: https://onepagelove.com/)
* Landingfolio: https://www.landingfolio.com/)
* Land Book: https://land-book.com/?type%5B%5D=single-page)

# Próxima clase (5 de octubre):

Cada grupo deber traer el sitio diseñado en alta fidelidad en Figma, en versión desktop y mobile.
