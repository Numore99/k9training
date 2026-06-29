# CLAUDE.md — Guía para IA / agentes

Punto de entrada para cualquier asistente de IA que trabaje en este proyecto.
Leé esto primero. Está pensado para que una modificación futura necesite **el mínimo contexto posible**.

> Documentación detallada en [`docs/`](docs/). Este archivo es el índice + las reglas de oro.

---

## Qué es este proyecto

Sitio web **estático** (one-page-por-tema) de **K9 Training**, un negocio de adestramento canino en Brasil.
- **Sin build, sin npm, sin framework, sin backend.** HTML + 1 CSS + 1 JS vanilla.
- Se publica subiendo los archivos a un hosting estático (Hostinger / Vercel / Netlify) o abriendo `index.html`.
- Idioma de la interfaz: **portugués (pt-BR)**.
- Toda conversión termina en **WhatsApp** (no hay servidor que reciba formularios).

## Mapa de 30 segundos

| Necesito… | Voy a… |
|---|---|
| Cambiar textos, servicios, planes, fotos, WhatsApp, Instagram | [`lib/manifest.js`](lib/manifest.js) (única fuente de datos) |
| Cambiar comportamiento / interacción / animación | [`main.js`](main.js) |
| Cambiar diseño / colores / layout | [`styles.css`](styles.css) |
| Cambiar el esqueleto de una página | el `*.html` correspondiente |
| Entender cómo encaja todo | [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) |
| Entender un componente concreto | [`docs/COMPONENTS.md`](docs/COMPONENTS.md) |

## Documentación

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — cómo está construido y cómo fluyen los datos.
- [`docs/COMPONENTS.md`](docs/COMPONENTS.md) — cada componente: su HTML, su función JS y sus clases CSS.
- [`docs/FLOW.md`](docs/FLOW.md) — flujo de la aplicación y recorrido del usuario.
- [`docs/RULES.md`](docs/RULES.md) — reglas del proyecto (convenciones que **no** se rompen).
- [`docs/STRUCTURE.md`](docs/STRUCTURE.md) — estructura de carpetas y qué se despliega.
- [`docs/CONTENT-GUIDE.md`](docs/CONTENT-GUIDE.md) — recetas para editar contenido sin tocar lógica.
- [`README.md`](README.md) — guía simple para el **cliente** (no técnica, en portugués). No la sobreescribas con detalle técnico.

---

## Reglas de oro (resumen — detalle en `docs/RULES.md`)

1. **No agregues build ni dependencias.** Se mantiene 100% estático y editable con un bloc de notas.
2. **Los datos viven en `lib/manifest.js`.** Si vas a cambiar contenido, hacelo ahí, no hardcodeado en el HTML/JS.
3. **Bump de cache-busting obligatorio.** Al editar `styles.css`, `main.js` o `lib/manifest.js`, subí el `?v=AAAAMMDD-N` en **todos** los `*.html` (mismo valor en todos). Ver `docs/RULES.md`.
4. **Degradación elegante.** El contenido crítico debe seguir visible si el JS falla. Cada init va envuelto en `safe()`.
5. **Verificá en navegador** tras un cambio visible (los screenshots pueden colgar por el cursor custom: usá `preview_eval` con estilos computados como respaldo).
6. **`_source/` no se despliega.** Es material bruto (videos, PSD/PNG originales, PDFs). Nunca lo enlaces desde el sitio.

## Cómo correr / previsualizar

No hay servidor propio. Para verlo: abrir cualquier `*.html`, o servir la carpeta con un estático simple
(p. ej. `python -m http.server`). En el harness de Claude Code, el preview sirve desde la raíz del repo,
así que la ruta es `/k9training/index.html`.
