# Uso de IA

## Consulta 1: adaptar tipografía y colores a una imagen de referencia

**Qué necesitaba:** que la ficha de la silla Wassily se viera inspirada en una foto de referencia (título "WASSILY" en negro y "CHAIR" en rojo, fondo gris cálido, silla roja y negra). No sabía qué colores eran exactamente ni qué tipo de letra usar.

**Código inicial:**

```css
body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: #111111;
    background: #b5121b;
}
```

**Prompt:**

"¿Puedes cambiar los colores y la tipografía para que estén más inspirados en esta foto?" 

**Sugerencias aceptadas:**
- Cambiar el fondo rojo (`#b5121b`) por un gris cálido, porque coincide con el fondo de la foto, y usar el rojo solo como acento.
- Cambiar Arial por una tipografía geométrica tipo Futura (con Century Gothic y Trebuchet MS como alternativas), porque se parece más a la letra del título de la foto y tiene estética Bauhaus.
- Definir la paleta como variables CSS (`--fondo`, `--rojo`, `--negro`, `--blanco`) para reutilizar los colores en toda la página.

**Resultado:**

```css
body {
  margin: 0;
  font-family: 'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif;
  color: var(--negro);
  background: var(--fondo);
}
```
## Consulta 2: centrar el texto destacado

**Qué necesitaba:** que el párrafo con la clase `.destacado` (el recuadro rojo de la sección Descripción) quedara con el texto centrado.

**Código inicial:**

```css
.destacado {
  background: var(--rojo);
  color: var(--blanco);
  padding: 1rem;
  font-weight: bold;
}
```

**Prompt:**

"¿Cómo centro el texto .destacado?"

**Sugerencias aceptadas:**
- Agregar `text-align: center;` a `.destacado`, porque centra el texto dentro del recuadro rojo sin cambiar el resto del diseño.

**Resultado:**

```css
.destacado {
  background: var(--rojo);
  color: var(--blanco);
  padding: 1rem;
  font-weight: bold;
  text-align: center;
}
```
