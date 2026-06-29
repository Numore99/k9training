# Flujo de la aplicación

## Mapa de páginas

Sitio multi-página. Navegación compartida en todas (navbar + menú mobile + footer + botón flotante WhatsApp).

| Página | Archivo | Propósito | Hooks de datos que usa |
|---|---|---|---|
| Inicio | [`index.html`](../index.html) | Capa con vídeo, accesos a Método/Serviços/Processo, galería con vídeo, CTA Instagram | `[data-gallery]`, brand |
| Método | [`metodo.html`](../metodo.html) | Explica el método de trabajo | brand |
| Serviços | [`servicos.html`](../servicos.html) | Lista de servicios (tarjetas expandibles) y problemas comunes | `#js-services`, brand |
| Processo | [`processo.html`](../processo.html) | Etapas del trabajo + galería "Em campo" (solo fotos) | `[data-gallery="fotos"]`, brand |
| Planos | [`planos.html`](../planos.html) | Planes con botón "Consultar" → WhatsApp | `#js-plans`, brand |
| Contato | [`contato.html`](../contato.html) | Formulario de avaliação → WhatsApp | `#js-form`, brand |

> Las páginas comparten `styles.css`, `main.js` y `lib/manifest.js`. El mismo `main.js` corre en todas;
> cada función de render se activa solo si encuentra su hook (ver [`ARCHITECTURE.md`](ARCHITECTURE.md)).

## Recorrido típico del usuario (conversión)

```
Llega a index.html
   │  (vídeo hero + valores "Disciplina · Respeito · Foco · Resultados")
   ├─► CTA "Agendar avaliação"  ──────────────► abre WhatsApp (wa.me con mensaje)
   ├─► "Ver serviços"  ─► servicos.html ─► tarjeta ─► CTA  ─► WhatsApp
   ├─► explora Método / Processo / Planos
   │        └─ Planos ─► "Consultar"  ─────────► WhatsApp
   └─► Contato ─► completa formulário ─► "Enviar" ─► WhatsApp con plantilla rellenada
```

**Todos los caminos terminan en WhatsApp.** No hay carrito, login, pago ni envío a servidor.

## Flujo del formulario (contato.html)

```
submit
  → preventDefault
  → lee f-nombre, f-tel, f-perro, f-edad, f-problema, f-dispo
  → ¿nombre y teléfono presentes?
        no → muestra #js-form-warn y corta
        sí → toma DATA.contact.waTemplate
           → reemplaza {nombre} {telefono} {perro} {edadraza} {problema} {disponibilidad}
           → openWA(mensaje)  → abre https://wa.me/<numero>?text=<mensaje>
```

## Flujo de un cambio de contenido (para quien edita)

```
Editar lib/manifest.js (texto/servicio/plan/foto/whatsapp)
  → guardar
  → bump del ?v=AAAAMMDD-N en TODOS los *.html (mismo valor)  ← obligatorio, ver RULES.md
  → recargar / re-desplegar
```

## Flujo de inicialización JS

Ver `boot()` en [`main.js`](../main.js): corre cada init bajo `safe()` en orden fijo. Si uno falla,
los demás continúan. Detalle en [`ARCHITECTURE.md`](ARCHITECTURE.md) → "Flujo de carga".
