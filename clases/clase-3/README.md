# Clase 3 — s08

**Lunes 05-10**

Hoy continuamos con CSS, display, flexbox y pseudoclases. Para luego continuar con CSS, su sintáxis básica y modelo de cajas. Para esto hay que copiar el html index-base.html y descargar la imagen wishbone.png ya que trabajaremos en clase el estilo CSS.

**Presentación:** https://drive.google.com/drive/folders/1mUIifhxHZzfT4QmuFoPo4L4V3EXAgFqn?ths=true

**Material complementario:**
- Material de apoyo HTML CSS: https://drive.google.com/drive/folders/1mUIifhxHZzfT4QmuFoPo4L4V3EXAgFqn?ths=true
- Flexbox Froggy (juego): https://flexboxfroggy.com/
- Flexbox Adventure (juego): https://codingfantasy.com/games/flexboxadventure
- Guía sencilla de Flexbox (video tutorial): https://www.youtube.com/watch?v=PSwlAuRbv_A&t=3068s

**Actividad en clase:**
- Copia o descarga el index-flex.html, demo-flex.css y la imagen "estudio.jpg".
- Lo trabajaremos en conjunto en clases, sólo sigue las instrucciones.
- Sube tu trabajo al repositorio del curso.

## Solemne (19 octubre)

La Solemne 2 evalúa el sitio single page desarrollado en grupo con HTML y CSS, su prototipo en Figma, junto con el trabajo individual realizado durante las sesiones 6, 7 y 8 y el desarrollo de bitácora personal (archivo README) que evidencie el proceso. La nota se compone de 7 criterios de 1 punto cada uno: tres se evalúan de manera individual y cuatro de manera grupal.

**Rúbrica:** https://drive.google.com/file/d/1M_jGms66UIdd9HHmJMH0KcNk0yeuZiBx/view?usp=sharing

## Bitácora
Escribe tu bitácora en tu archivo README.md ubicado en tu carpeta personal dentro del repositorio. Es importante que documentes tu proceso, qué hiciste, dificultades, soluciones, etc. Si usas IA, documéntalo siguiendo las normas detalladas un poco más abajo.

### Cómo hacer mi bitácora
Documenta tu desarrallo en cada sesión de trabajo y responde al menos estas tres preguntas: 
- **¿Qué hice en el sitio?**
- **¿Qué dificultades tuve y cómo las resolví?** *(Indica qué recursos usaste: IA, MDN, material complementario entregado en clase, compañeros, ayudante, etc.)*
- **¿Qué aprendí?**

### Cómo documentar la IA en Markdown

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
