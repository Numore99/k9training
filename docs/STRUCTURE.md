# Estructura de carpetas

```
k9training/
├── CLAUDE.md              ← entrada para IA (índice + reglas de oro)
├── README.md              ← guía simple para el CLIENTE (portugués, no técnica)
├── docs/                  ← documentación técnica (para devs / IA)
│   ├── ARCHITECTURE.md
│   ├── COMPONENTS.md
│   ├── FLOW.md
│   ├── RULES.md
│   ├── STRUCTURE.md       (este archivo)
│   └── CONTENT-GUIDE.md
│
├── index.html             ← páginas (una por tema) ─┐
├── metodo.html                                       │
├── servicos.html                                     │  comparten
├── processo.html                                     │  styles.css + main.js + manifest
├── planos.html                                       │
├── contato.html          ─────────────────────────── ┘
│
├── styles.css             ← TODO el diseño (mobile-first, sin preprocesador)
├── main.js                ← TODO el comportamiento (vanilla, IIFE)
├── lib/
│   └── manifest.js        ← ÚNICA fuente de datos (window.__K9TRAINING__)
│
├── assets/                ← lo que el sitio realmente sirve
│   ├── img/               ← fotos (k9-1..9.webp, hero-poster.jpg, arte-marcelo.jpeg)
│   │   └── processo/      ← fotos de la galería de Processo (proc-1,2,4,6.webp)
│   ├── video/
│   │   ├── hero.mp4 / hero.webm   ← vídeo de la portada
│   │   └── gal/                   ← vídeos de la galería (k9-1..9.mp4, lazy)
│   └── credits.json       ← créditos de fotos de stock (si se usan)
│
├── .htaccess              ← config para Hostinger (Apache)
├── .gitattributes
│
└── _source/               ← MATERIAL BRUTO — NO se despliega, NO se enlaza desde el sitio
    ├── VIDEOS/                    ← clips originales de WhatsApp (sin procesar)
    ├── _originais/                ← PNG/arte originales
    ├── duplicadas-removidas/      ← proc-3 / proc-5 (eran duplicados exactos de proc-2 / proc-1)
    ├── ChatGPT Image ….png        ← arte generado
    ├── MARCELO*.png, logo*.jpeg   ← logos / arte fuente
    └── *.pdf, k9.txt              ← notas y material de referencia
```

## Qué se despliega vs. qué no

**SÍ se sube a producción** (hosting estático / `public_html`):
- todos los `*.html`
- `styles.css`, `main.js`
- `lib/`
- `assets/` (img + video + credits.json)
- `.htaccess`

**NO se sube** (solo desarrollo / archivo):
- `_source/`  ← material bruto
- `docs/`, `CLAUDE.md`  ← documentación interna
- `.git/`, `.gitattributes`
- `README.md` es opcional en producción (es inofensivo, pero no aporta al sitio).

## Convención de nombres de assets de galería

El vídeo de cada item de galería se deriva del nombre de la imagen:
`img: "k9-3.webp"` → busca el vídeo en `assets/video/gal/k9-3.mp4`.
Mantené esa correspondencia de nombres al agregar items con vídeo.
