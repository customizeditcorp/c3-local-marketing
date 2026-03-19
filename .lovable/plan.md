

# Plan: Crear página `/kb` como Knowledge Base para entrenar el chatbot

## Objetivo
Crear una ruta `/kb` que renderice **toda** la información de entrenamiento del chatbot en una sola página HTML plana, legible tanto por humanos como por crawlers/bots. Sin navbar, sin footer, sin diseño — solo contenido estructurado con headings.

## Qué incluirá la página

1. **Sobre C3 Marketing Hub** — branding, equipo, propuesta de valor
2. **Catálogo completo de planes y precios** — los 5 tiers con condiciones, Starter pricing, Riesgo Compartido
3. **Servicios detallados** — GBP, Meta Ads, Websites, CRM/Automatización
4. **Lógica del Diagnóstico** — los 8 pasos, opciones, y lógica de recomendación
5. **FAQs generales** (9) + **FAQs de pricing** (7)
6. **Testimonios** — los 6 clientes reales
7. **Términos y condiciones** — compromisos, cancelación, propiedad de activos
8. **Áreas de servicio e industrias**

## Implementación técnica

- **Un archivo nuevo**: `src/pages/KnowledgeBase.tsx`
- **Una ruta nueva** en `App.tsx`: `/kb`
- Sin `PageLayout` (sin navbar/footer/WhatsApp) — página limpia para crawlers
- Todo el contenido hardcoded directamente en español (idioma principal del negocio) con secciones en inglés donde aplique
- Usa la data del `CHATBOT_TRAINING_DATA.json` como fuente
- HTML semántico con `<h1>`, `<h2>`, `<h3>`, `<table>`, `<ul>` para máxima legibilidad por bots

## URL final
`https://c3-local-marketing.lovable.app/kb`

Esta URL la pegas directamente en tu plataforma de chatbot como fuente de entrenamiento.

