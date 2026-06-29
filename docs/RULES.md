# Reglas del proyecto

Convenciones que mantienen el sitio simple, editable por el cliente y libre de sorpresas.
**No las rompas sin una razón explícita.**

## 1. Cero build, cero dependencias
- Nada de npm, bundlers, frameworks, TypeScript, preprocesadores CSS ni backend.
- El sitio debe seguir funcionando al **abrir `index.html`** directamente y al subirlo a un hosting estático.
- Si una tarea parece "necesitar" un framework, reconsiderá: casi siempre se resuelve con vanilla.

## 2. Una sola fuente de datos: `lib/manifest.js`
- Todo el contenido editable (marca, servicios, planes, galería, plantilla del formulario) vive en
  `window.__K9TRAINING__`. **No hardcodees contenido** en el HTML o el JS si pertenece al manifest.
- El cliente edita este archivo con un bloc de notas: mantené el formato simple (comillas dobles, comas,
  comentarios en portugués claros). No introduzcas sintaxis avanzada que lo asuste.

## 3. Cache-busting: bump obligatorio y sincronizado
- Los assets se enlazan con `?v=AAAAMMDD-N` (fecha + contador). Ej.: `styles.css?v=20260629-14`.
- **Al editar `styles.css`, `main.js` o `lib/manifest.js`, subí el `?v=` en TODOS los `*.html`**, con el
  **mismo** valor en las tres referencias de cada página. Si no, los visitantes ven CSS/JS viejo cacheado.
- ⚠️ Deuda actual: las páginas están **desincronizadas** (algunas en `…-32`, `index` en `…-14`,
  `processo` en `…-13`). Al próximo cambio, unificá todas al mismo valor nuevo.
- Regla práctica del valor: `fecha de hoy AAAAMMDD` + `-` + número incremental dentro del día.

## 4. Progressive enhancement / degradación elegante
- El HTML lleva el contenido crítico; el JS solo mejora.
- Todo init nuevo en `main.js` va envuelto en `safe(fn, "nombre")` dentro de `boot()`, para que un fallo
  no tumbe el resto de la página.
- Funciones de render deben hacer *early-return* si no encuentran su hook (`if (!host) return`).

## 5. Accesibilidad y semántica
- Elementos interactivos generados por JS llevan roles/aria correctos (ver `.serv-card`: `role="button"`,
  `tabindex`, `aria-expanded`, `aria-controls`). Mantené ese patrón.
- Respetá `prefers-reduced-motion` (ya implementado para marquee y galería).
- Imágenes con `alt` significativo (viene del manifest).

## 6. Todo conduce a WhatsApp
- No agregues integraciones de servidor para formularios/leads. La conversión es construir una URL `wa.me`
  y abrirla (`openWA`). Si hace falta un campo nuevo en el formulario, actualizá **a la vez**:
  el input en `contato.html`, su lectura en `wireForm()` y el placeholder en `contact.waTemplate`.

## 7. Idioma
- **UI en portugués (pt-BR).** Textos visibles, nuevos copys y `alt`: en portugués.
- **Excepción heredada**: los IDs del formulario y los placeholders de la plantilla están en **español**
  (`f-nombre`, `{telefono}`…). No los renombres salvo que actualices ambos lados a la vez.
- Comentarios de código: pueden quedar en portugués (estilo actual) para que el cliente los entienda.

## 8. `_source/` no se despliega
- `_source/` guarda material bruto (videos originales, PNG/PSD, PDFs, imágenes descartadas).
- Nunca enlaces desde el sitio a `_source/`. No lo subas al hosting de producción.
- Lo desplegable es solo: `*.html`, `styles.css`, `main.js`, `lib/`, `assets/`, `.htaccess`.
  Ver [`STRUCTURE.md`](STRUCTURE.md).

## 9. Estilo de CSS y JS
- CSS **mobile-first**; agregá desktop con media queries hacia arriba. Usá las variables de `:root`
  (`--carbon`, `--gold`, `--fire`, `--bone`, …) en vez de hex sueltos.
- JS: vanilla, funciones pequeñas con nombre, sin librerías. Seguí los helpers existentes
  (`$`, `$all`, `esc`, `safe`).
- Igualá el estilo del código vecino (densidad de comentarios, nombres, idioma).

## 10. Verificación tras cambios visibles
- Si el cambio se ve en el navegador, verificalo (preview).
- El **cursor custom** puede colgar los screenshots: si pasa, usá `preview_eval` para leer estilos
  computados / geometría como prueba, en lugar de screenshots.
