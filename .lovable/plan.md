

# Plan: Convertir /kb a HTML estático para scrapers

## Problema
La página `/kb` es una ruta React (SPA). Los scrapers/crawlers reciben solo el shell HTML vacío (`<div id="root"></div>`) porque no ejecutan JavaScript. Resultado: "Insufficient content (75 chars)".

## Solución
Crear un archivo `public/kb.html` con todo el contenido de la Knowledge Base como HTML estático puro. Los archivos en `public/` se sirven directamente por Vite sin necesidad de JavaScript.

## Cambios

1. **Crear `public/kb.html`** — Archivo HTML completo y autocontenido con todo el contenido actual de `KnowledgeBase.tsx` convertido a HTML estático. Incluye estilos inline básicos para legibilidad. Sin dependencias externas, sin JavaScript.

2. **Mantener la ruta React `/kb`** — La ruta existente sigue funcionando para visitantes humanos. No se elimina nada.

## URL final para el chatbot
```
https://c3-local-marketing.lovable.app/kb.html
```

Esta URL entregará HTML estático completo que cualquier scraper puede leer inmediatamente.

