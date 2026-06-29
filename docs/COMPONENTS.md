# Componentes

Cada componente se describe por: **dónde está en el HTML**, **qué función de `main.js` lo maneja**,
y **qué clases CSS** usa. Todas las funciones están en [`main.js`](../main.js).

> Convención de hooks: `id="js-*"` = punto de montaje para JS; `data-*` = comportamiento o binding.

---

## Splash (pantalla de carga)
- **HTML**: `#js-splash` (`.splash` con `.splash-logo` y `.splash-bar`).
- **JS**: `splash()` — agrega `.hide` al cargar (`load` + 600 ms) y un timeout de seguridad a 2200 ms.
- **CSS**: `.splash`, `.splash.hide`.

## Navbar + menú mobile
- **HTML**: `nav#js-nav` (desktop), `#js-mobile` (overlay mobile), botón `#js-burger`.
- **JS**: `nav()` — opaca el fondo al scrollear (>60px), togglea el menú mobile, cierra al clickear un link,
  y maneja `[data-top]` (volver arriba con scroll suave).
- **CSS**: `.nav`, `.nav-links`, `.nav-cta`, `.burger`, `.mobile-menu`, `.mobile-menu.open`.

## Hero (cabecera con vídeo)
- **HTML**: `header.hero` con `<video class="hero-video">` (poster + fuentes webm/mp4), `.hero-overlay`,
  titulares `.hero-values`, CTAs `.hero-cta`.
- **JS**: `heroVideoPan()` — el vídeo es **vertical**; en pantallas anchas se centra, en mobile hace un
  "pan" vertical interpolando `object-position` según el tiempo del clip para mantener al perro visible.
- **CSS**: `.hero`, `.hero-video`, `.hero-overlay`, `.hero-values`, `.fire` (acento naranja).

## Marquee (cinta de palabras)
- **HTML**: `.marquee` > `.marquee-track` (texto duplicado para loop continuo). Decorativo (`aria-hidden`).
- **JS**: ninguno (animación 100% CSS).
- **CSS**: `.marquee`, `.marquee-track` (animación desactivada con `prefers-reduced-motion`).

## Tarjetas de Servicios
- **HTML**: contenedor `#js-services`. Las tarjetas se generan por JS.
- **JS**: `renderServices()` arma cada `.serv-card` desde `DATA.services` (título, "Para:", chips de `includes`,
  bloque expandible `details`/`detailList`, botón CTA con `data-wa`). `wireServiceCards()` hace expandible
  cada tarjeta (click o Enter/Espacio togglea `.open`, actualiza `aria-expanded` y el texto "Ver/Ocultar explicação").
- **CSS**: `.serv-card`, `.serv-inc`, `.serv-detail`, `.serv-more`, `.serv-card.open`.
- **Nota accesibilidad**: la tarjeta es `role="button"`, `tabindex="0"`, con `aria-controls` al detalle.
- **Datos**: editar en `services: [ … ]` de `lib/manifest.js`.

## Tarjetas de Planes
- **HTML**: contenedor `#js-plans` (`<div class="plans" id="js-plans">`).
- **JS**: `renderPlans()` — una `.plan` por item de `DATA.plans`. Todas las tarjetas son **iguales** (sin
  destacado). Botón "Consultar" con icono de WhatsApp (`ICON_WA`) + `data-wa`.
- **CSS**: `.plan`, `.btn.btn-wa`.
- **Animación de entrada**: las 4 tarjetas entran **desde los lados** con retardo escalonado (las 2 de la
  izquierda desde la izquierda, las 2 de la derecha desde la derecha). Implementado con keyframes
  `planInLeft` / `planInRight` que se disparan al ganar la clase `.in` (vía el `IntersectionObserver` de
  `reveal()`), con `animation-delay` 0 / .14 / .28 / .42 s.
  ⚠️ **Importante**: el estado de reposo de la tarjeta es `transform:none` (en su posición final, solo
  invisible). El deslizamiento lateral ocurre **solo durante la animación**, nunca en reposo. Si lo cambiás
  para que la tarjeta repose desplazada (`translateX`), las tarjetas de las puntas quedan fuera de la
  viewport, el observer nunca les agrega `.in` y **quedan invisibles** (sobre todo en móvil a 1 columna).
- **Datos**: editar en `plans: [ … ]` de `lib/manifest.js`.
- ⚠️ El SVG de WhatsApp aquí **no** usa la clase `.ico`; su tamaño lo fija la regla CSS `.btn-wa svg{width:16px}`.
  Sin esa regla, el SVG se estira y ocupa todo el botón (bug ya corregido).

## Galería / Carrusel
- **HTML**: `.gallery-carousel` con `data-gallery` (home: con vídeo) **o** `data-gallery="fotos"`
  (Processo: solo fotos). Contiene `.gallery-viewport > .gallery-track`, botones prev/next y `.gallery-dots`.
- **JS**:
  - `renderGallery()` — llena el track. Para `data-gallery` (vacío) usa `DATA.gallery` e inserta `<video>` lazy
    (carga el .mp4 recién en la primera reproducción). Para `data-gallery="fotos"` usa `DATA.galleryFotos`
    (solo `<img>`). Cada item soporta `fit` (object-fit) y `pos` (object-position) opcionales por imagen.
    Si una imagen falla (`onerror`), muestra un placeholder con la pata (`.gal-ph`).
  - `wireGalleryCarousel()` — navegación por dots/flechas, arrastre con puntero (mouse), snap por slide,
    y control de vídeo (reproduce uno a la vez, pausa al cambiar de slide).
- **CSS**: `.gallery-carousel`, `.gallery-viewport`, `.gallery-track`, `.gal-item`, `.gal-item img`,
  `.gal-video`, `.gal-ph`, `.gal-cap`, `.gallery-dots button.active`.
- **Datos**: `gallery: [ … ]` (home) y `galleryFotos: [ … ]` (Processo) en `lib/manifest.js`.
  Las imágenes viven en `assets/img/…`; los vídeos de galería en `assets/video/gal/<base>.mp4`
  (el nombre del .mp4 se deriva del nombre del `img`).

## Formulario de contacto
- **HTML**: `form#js-form` con campos `#f-nombre`, `#f-tel`, `#f-perro`, `#f-edad`, `#f-problema`, `#f-dispo`
  y un aviso `#js-form-warn`. (Está en `contato.html`.)
- **JS**: `wireForm()` — `preventDefault`, valida que nombre y teléfono no estén vacíos (si faltan, muestra
  `#js-form-warn`), rellena `DATA.contact.waTemplate` con los valores y abre WhatsApp. **No envía emails ni usa servidor.**
- **CSS**: estilos de formulario en `styles.css`.
- ⚠️ Los **IDs de campo están en español** (`f-nombre`, `f-tel`…) y los placeholders de la plantilla también
  (`{nombre}`, `{telefono}`…), aunque la UI sea portugués. No los renombres sin actualizar ambos lados.

## Botones / enlaces de WhatsApp
- **HTML**: `[data-wa="<msg url-encoded>"]` (botón con mensaje propio) o `[data-wa-link]` (enlace genérico
  "agendar avaliação"). El botón flotante es `.wa-float[data-wa-link]`.
- **JS**: `wireWAButtons()` (delegación de click para `[data-wa]`) y `bindBrand()` (setea `href` de `[data-wa-link]`).
- **CSS**: `.btn-wa`, `.wa-float`.

## Bindings de marca
- **HTML**: `[data-brand="<clave>"]` (texto), `[data-wa-display]` (número visible),
  `[data-ig-link]` (enlace Instagram), `[data-year]` (año actual).
- **JS**: `bindBrand()` y `year()`.
- **Datos**: `brand: { … }` en `lib/manifest.js`.

## Cursor custom (solo desktop con mouse)
- **JS**: `cursor()` — solo si `(hover:hover) and (pointer:fine)`. Crea `.cursor-dot` + `.cursor-label`,
  sigue el mouse y muestra la etiqueta de `[data-cursor]` al pasar por encima.
- **CSS**: `.cursor-dot`, `.cursor-label`, `html.has-cursor`.
- ⚠️ Este elemento puede hacer **colgar los screenshots del preview**. Si pasa, verificá con `preview_eval`
  (estilos computados / geometría) en vez de screenshots.

## Animaciones de aparición (reveal)
- **HTML**: cualquier elemento con clase `.reveal`.
- **JS**: `reveal()` — `IntersectionObserver` agrega `.in` al entrar en viewport. Sin soporte de IO, agrega
  `.force` (todo visible).
- **CSS**: `.reveal`, `.reveal.in`, `.reveal.force`.

## Iconos inline (constantes en main.js)
`ICON_WA`, `ICON_PAW`, `ICON_PLAY` son strings de SVG reutilizados al generar HTML. Si necesitás el icono
de WhatsApp con tamaño fijo en un botón, asegurate de que exista una regla CSS que dimensione el `svg`
(o agregale la clase `.ico`).
