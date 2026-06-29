# Guía de edición de contenido (recetas)

Tareas frecuentes y cómo hacerlas con el mínimo riesgo. Casi todo se edita en
[`lib/manifest.js`](../lib/manifest.js). **Tras cualquier edición, hacé el bump de `?v=`** en todos los
`*.html` (ver [`RULES.md`](RULES.md) §3).

> Regla de oro al editar el manifest: cambiá solo lo que está **después** de los `:`. No borres comillas `"` ni comas `,`.

---

## Cambiar WhatsApp
```js
brand: {
  whatsapp: "5511941500265",        // solo dígitos, con código de país, sin + ni espacios
  whatsappDisplay: "+55 11 94150-0265", // como se muestra al usuario
}
```

## Cambiar marca / Instagram / ciudad
```js
brand: {
  name: "K9 TRAINING",
  slogan: "Disciplina, vínculo e controle real.",
  instagram: "marcelo_k9_working_dogs",   // sin @
  location: "São Paulo · Brasil",
}
```

## Agregar o editar un Servicio
En `services: [ … ]`, copiá un bloque `{ … }` completo, pegalo antes del `]` y separá con coma:
```js
{
  name: "Nombre del servicio",
  forWho: "Para quién es.",
  includes: ["Chip 1", "Chip 2", "Chip 3"],   // chips cortos
  details: "Párrafo que aparece al expandir la tarjeta.",
  detailList: ["Punto 1", "Punto 2"],          // lista al expandir (opcional)
  // note: "Texto destacado opcional",
  cta: "Quero começar"
}
```
La tarjeta se vuelve expandible automáticamente. El botón abre WhatsApp con un mensaje sobre ese servicio.

## Agregar o editar un Plan
En `plans: [ … ]`:
```js
{ name: "Plano X", summary: "Resumen corto.", ideal: "Ideal para…", price: "Consultar valor" }
```
⚠️ El **segundo** plan de la lista (índice 1) se muestra destacado (clase `.feat`). Si querés destacar otro,
reordená la lista.

## Agregar / cambiar fotos de la galería

**Home** (`index.html`, galería con vídeo) → `gallery: [ … ]`:
```js
{ img: "k9-3.webp", alt: "Descripción" }          // busca vídeo en assets/video/gal/k9-3.mp4
{ img: "k9-3.webp", alt: "Descripción", video: false } // foto sola, sin vídeo
```

**Processo** (`processo.html`, solo fotos) → `galleryFotos: [ … ]`:
```js
{ img: "processo/proc-1.webp", alt: "Descripción" }
```

### Encuadre de una foto (centrado)
Cada item de galería acepta dos campos opcionales para controlar cómo se recorta en el marco vertical:
```js
{ img: "processo/proc-1.webp", alt: "Dos perros", fit: "contain" }      // muestra la foto completa (sin recortar)
{ img: "processo/proc-7.webp", alt: "…", pos: "50% 20%" }                // object-position: mueve el encuadre
```
- `fit`: `cover` (por defecto, llena y recorta) o `contain` (entra completa, puede dejar bordes).
- `pos`: valor de `object-position` (ej. `"center top"`, `"60% 30%"`). Útil cuando `cover` corta lo importante.
- Usá `contain` para fotos **horizontales/cuadradas** que en el marco vertical perderían a los protagonistas.

### Dónde poner los archivos
- Imágenes: `assets/img/` (y `assets/img/processo/` para Processo). Formato `.webp`/`.jpg`, < 400 KB.
- Vídeos de galería: `assets/video/gal/<mismo-nombre-base>.mp4`.
- Si una imagen falta, el sitio muestra un placeholder y **no se rompe**.

## Editar el formulario de contacto
- Inputs en [`contato.html`](../contato.html): IDs `f-nombre`, `f-tel`, `f-perro`, `f-edad`, `f-problema`, `f-dispo`.
- Plantilla del mensaje en `contact.waTemplate` (usa `{nombre}`, `{telefono}`, `{perro}`, `{edadraza}`,
  `{problema}`, `{disponibilidad}`).
- Para un campo nuevo: agregá el input en el HTML, leelo en `wireForm()` (`val("f-…")`) y agregá su
  `{placeholder}` a la plantilla. Los tres a la vez.

## Tras editar — checklist
1. Guardar.
2. Subir el `?v=AAAAMMDD-N` en **todos** los `*.html` (mismo valor).
3. Recargar (F5) y verificar.
4. Re-desplegar (subir archivos al hosting).
