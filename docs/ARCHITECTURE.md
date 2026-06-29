# Arquitectura

## Stack

- **HTML5** estático, una página por tema (multi-page, no SPA).
- **CSS único**: [`styles.css`](../styles.css) — mobile-first, sin preprocesador.
- **JS único**: [`main.js`](../main.js) — vanilla, sin módulos, envuelto en una IIFE con `"use strict"`.
- **Datos**: [`lib/manifest.js`](../lib/manifest.js) — define `window.__K9TRAINING__`, un objeto literal con todo el contenido editable.
- **Sin build, sin bundler, sin dependencias, sin backend.** Nada que instalar.

## Principio rector: progressive enhancement

El HTML ya trae el contenido crítico (titulares, navegación, CTAs). El JS **solo mejora**:
inyecta listas dinámicas, anima, cablea botones de WhatsApp y el formulario. Si el JS falla,
la página sigue siendo usable. Por eso:

- `<html class="no-js">` arranca con la clase `no-js`; `main.js` la quita apenas corre (línea ~12).
- Cada bloque de inicialización corre dentro de `safe(fn, name)`: si uno lanza una excepción,
  se loguea un `console.warn` y **los demás siguen funcionando** (`main.js` `boot()`).

## Flujo de carga (orden real)

```
1. El navegador parsea el HTML  → contenido base visible (hero, nav, secciones).
2. <link rel=stylesheet styles.css?v=…>  → estilos.
3. <script lib/manifest.js?v=…>  → crea window.__K9TRAINING__ (DATA).
4. <script main.js?v=…>  → IIFE:
     - lee DATA = window.__K9TRAINING__  y  BRAND = DATA.brand
     - si readyState == loading → espera DOMContentLoaded; si no, corre boot() ya.
5. boot() ejecuta, en orden, cada init bajo safe():
     renderServices → wireServiceCards → renderPlans → renderGallery →
     wireGalleryCarousel → bindBrand → wireWAButtons → wireForm →
     splash → heroVideoPan → nav → cursor → year → reveal
```

Los `<script>` van al **final del `<body>`**, así que el DOM ya existe cuando corren.

## Modelo de datos (`window.__K9TRAINING__`)

Definido en [`lib/manifest.js`](../lib/manifest.js). Forma:

```js
{
  brand:   { name, slogan, whatsapp, whatsappDisplay, instagram, location, hours, email },
  services:[ { name, forWho, includes[], details, detailList[], note?, cta } , … ],
  plans:   [ { name, summary, ideal, price } , … ],
  gallery: [ { img, alt, video? } , … ],          // home: fotos + vídeo opcional
  galleryFotos:[ { img, alt, fit?, pos? } , … ],   // página Processo: solo fotos
  contact: { waTemplate }                          // plantilla del formulario → WhatsApp
}
```

## Pipeline de render (datos → DOM)

`main.js` busca **hooks** en el HTML (IDs `#js-*` y atributos `data-*`) y los rellena desde `DATA`:

| Fuente de datos | Función en main.js | Hook en el HTML | Salida |
|---|---|---|---|
| `DATA.services` | `renderServices()` | `#js-services` | tarjetas `.serv-card` |
| `DATA.plans` | `renderPlans()` | `#js-plans` | tarjetas `.plan` |
| `DATA.gallery` | `renderGallery()` | `[data-gallery]` (sin valor) | carrusel con vídeo |
| `DATA.galleryFotos` | `renderGallery()` | `[data-gallery="fotos"]` | carrusel solo-fotos |
| `DATA.brand` | `bindBrand()` | `[data-brand]`, `[data-wa-link]`, `[data-ig-link]`, `[data-wa-display]` | textos y enlaces |
| `DATA.contact.waTemplate` | `wireForm()` | `#js-form` | mensaje de WhatsApp |

> Una página solo renderiza lo que tiene hook. Ej.: `planos.html` tiene `#js-plans` pero no `#js-services`,
> así que `renderServices()` simplemente retorna temprano (`if (!host) return`). Por eso el mismo
> `main.js` sirve a todas las páginas sin condicionales por página.

## Integración con WhatsApp (no hay servidor)

Todo "envío" construye una URL `https://wa.me/<numero>?text=<mensaje>` y la abre:

- `waNumber()` limpia el número de `brand.whatsapp` (solo dígitos).
- `waURL(msg)` arma la URL; `openWA(msg)` la abre en pestaña nueva (con fallback a misma pestaña).
- Botones con `[data-wa="<mensaje url-encoded>"]` → delegación global en `wireWAButtons()`.
- Enlaces con `[data-wa-link]` → `bindBrand()` les setea el `href`.
- El formulario (`wireForm()`) valida nombre+teléfono, rellena `contact.waTemplate` y abre WhatsApp.

## Detalle del CSS

- Mobile-first; los breakpoints suben (media queries hacia desktop).
- Variables CSS en `:root` (`--carbon`, `--gold`, `--fire`, `--bone`, etc.).
- Respeta `prefers-reduced-motion` (desactiva animaciones de marquee/galería).
- **Gotcha conocida**: en paneles de preview que cargan un solo archivo, el CSS externo puede verse
  roto aunque en el navegador real funcione. No "arregles" estilos basándote solo en ese panel.

Ver [`COMPONENTS.md`](COMPONENTS.md) para el desglose pieza por pieza.
