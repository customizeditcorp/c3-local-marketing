# Plan: Actualizar Planes de Precios y Términos Legales

## Alcance
Solo actualización de contenido de planes y términos. **No se tocan** scripts, ChatWidget, GHL, integraciones ni lógica.

## Cambios

### 1. Nueva estructura de planes (5 productos)

Reemplazar los planes actuales (Cimientos $399→$599, Expansión $599→$1,299, Dominio $600→$2,599) por:

| Plan | Precio | Compromiso |
|---|---|---|
| **Cimientos** | $150/mes | Suscripción base |
| **Presencia Digital** ⭐ | $399/mes | 6 meses mínimo |
| **Imán Local** | $498/mes | 6 meses mínimo |
| **Acelerador de Campañas (Ads)** | $199/mes por canal | Add-on |
| **Plan Lanzamiento** | $1,800 pago único | Sin contrato |

### 2. Archivos a editar

**Página principal de precios:**
- `src/components/PricingSection.tsx` — Reemplazar la card única de $3,300 por grid de 5 planes con la nueva estructura, includes/excludes según copy provisto. Titular: "Tu negocio, escalado a tu ritmo."

**Página Websites (servicios):**
- `src/pages/services/Websites.tsx` — Reemplazar los 3 planes actuales (Cimientos/Expansión/Dominio) por los 3 planes mensuales nuevos (Cimientos/Presencia Digital/Imán Local) + mención del Plan Lanzamiento ($1,800) y Acelerador ($199/canal).

**Otras páginas de servicios** (verificar y alinear si muestran tabla de precios):
- `src/pages/services/GoogleBusinessProfile.tsx`
- `src/pages/services/MetaAds.tsx`
- `src/pages/services/CRMAutomation.tsx`

**Resultados del diagnóstico:**
- `src/components/results/StarterPriceBox.tsx` y `src/pages/DiagnosticResults.tsx` — Actualizar precios mostrados al usuario para reflejar la nueva tabla (Presencia Digital $399 como recomendado por defecto).

**Traducciones:**
- `src/i18n/translations.ts` — Actualizar claves `pricing.*` (title, subtitle, planTitle, paymentOptions, fullPayment, monthlyPayments, etc.) con el nuevo copy ES/EN.

### 3. Términos y Condiciones

- `src/pages/TermsOfService.tsx` — Reemplazar contenido por las 5 secciones provistas:
  1. Uso de Sistemas y Desarrollo a Riesgo (Fase Cero)
  2. IA, Metodologías y Obras Derivadas
  3. Adquisición de Derechos (Vesting) y Cancelaciones — 6 meses forzosos
  4. Exención de Responsabilidad (Hold Harmless)
  5. Condiciones de Pago — descuento pre-aplicado por Efectivo/ACH/Zelle, recargo 3% tarjeta de crédito, renovación mes a mes tras 6 meses

Mantener entidad legal: **L & M Creative Service INC (DBA C3 Marketing)**.

### 4. Memoria del proyecto

Actualizar:
- `mem://business/contract-details/pricing-tiers-conditions` — nueva tabla de precios y términos de cancelación
- `mem://business/pricing-strategy` — nuevo modelo de 5 planes
- `mem://business/pricing-logic/shared-risk-starter-plan` — marcar como **deprecado** (ya no hay subsidio Mes 1-2; ahora son precios fijos con compromiso)

### 5. Lo que NO se toca

- ChatWidget de LeadConnector
- Scripts de tracking (Pixel, GA, Flock, GHL)
- CSP en `index.html`
- Calendar booking en `DiagnosticResults.tsx`
- Wizard de diagnóstico (lógica)
- Rutas, navegación, SEO schema

## Preguntas antes de implementar

1. **Idioma del copy nuevo**: el texto provisto está en español. ¿Quieres que también traduzca al inglés todo (titular, planes, términos) para mantener bilingüe, o solo español por ahora?
2. **Lógica del wizard de diagnóstico**: actualmente recomienda un plan basado en respuestas del usuario. ¿Mapeo así?
   - Negocio nuevo / sin web → **Plan Lanzamiento** ($1,800) o **Presencia Digital** ($399/mes)
   - Negocio con web pero sin CRM → **Cimientos** ($150/mes)
   - Negocio establecido buscando crecer → **Imán Local** ($498/mes) + **Acelerador** ($199/canal)

   ¿Confirmas esta lógica o prefieres siempre recomendar Presencia Digital como default?
