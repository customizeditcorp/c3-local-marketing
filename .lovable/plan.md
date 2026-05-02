# Plan: Pasar preflight de GHL — Chat Widget + remover formularios con teléfono

## Contexto
GHL exige a la vez:
1. **Chat Widget Compliance** → widget de LeadConnector cargado en todas las rutas.
2. **Multiple Opt-ins** → cero formularios con teléfono/SMS coexistiendo con el widget.

Solución: el widget queda como único canal de captura durante la validación.

## Cambios

### 1. Crear `src/components/ChatWidget.tsx`
Componente que inyecta el script oficial de LeadConnector una sola vez en el `<body>`. Sin `EXCLUDED_ROUTES`. Maneja cleanup en unmount y evita doble inyección.

```tsx
// Inyecta:
// <script src="https://widgets.leadconnectorhq.com/loader.js"
//   data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
//   data-widget-id="69f54068e9677e19182a0a5c"
//   data-source="WEB_USER"></script>
```

### 2. Montar `<ChatWidget />` global en `src/App.tsx`
Insertarlo dentro de `<BrowserRouter>` y fuera de `<Routes>`, para que esté presente en todas las rutas: `/`, `/contact`, `/resultados`, `/servicios/*`, `/industrias/*`, `/areas-de-servicio/*`, `/recursos/*`, `/kb`, legales, NotFound.

### 3. Limpiar `src/pages/Contact.tsx` (única página con formulario embebido)
Quitar:
- El `<iframe>` de `lnk.c3localmarketing.com/widget/form/...`
- El bloque del checkbox `sms-consent` y el state `hasConsented`
- El import de `Checkbox` y `Link` (si queda sin uso)
- La carga del script `form_embed.js` en el `useEffect`

Reemplazar la columna izquierda (donde estaba el form) por un bloque CTA reforzado:
- Botón grande **Llamar (805) 608-4843** → `tel:+18056084843`
- Botón grande **WhatsApp** → `https://wa.me/18056084843`
- Botón **Email** → `mailto:info@c3marketinghub.com`
- Mensaje: "Para iniciar conversación al instante, usa el chat en la esquina inferior derecha."

Se conservan: NAP, mapa de Google, sección "Términos de SMS" (informativa).

### 4. Eliminar `src/components/DiagnosisForm.tsx`
Ya no tiene importadores en el árbol. Se borra para no dejar opt-in alternativo en el repo.

### 5. Actualizar CSP en `index.html`
Añadir dominios de LeadConnector Chat Widget a la Content Security Policy:
- `script-src`: agregar `https://widgets.leadconnectorhq.com`
- `connect-src`: agregar `https://services.leadconnectorhq.com https://backend.leadconnectorhq.com https://widgets.leadconnectorhq.com`
- `frame-src`: agregar `https://widgets.leadconnectorhq.com https://services.leadconnectorhq.com`
- `img-src`: ya permite `https:` → OK

Sin esto el script del widget puede ser bloqueado por el navegador.

### 6. Auditoría final (verificación, no cambios)
Confirmar con `rg` que tras los cambios no queden hits de `widget/form` ni `form_embed` en el árbol activo. Los canales `tel:`, `mailto:`, `wa.me`, `WhatsAppButton` y `CallNowButton` se conservan: **no son formularios**, son links directos compatibles con la regla de Multiple Opt-ins.

## Resultado
- Chat widget de LeadConnector (`69f54068e9677e19182a0a5c`) cargado en **todas** las rutas.
- **Cero** formularios con teléfono/SMS embebidos en el sitio.
- Único opt-in oficial = el propio Chat Widget de GHL.
- Canales directos (call / WhatsApp / email / mapa) intactos.
- CSP correctamente configurado para que el widget cargue sin bloqueos.
