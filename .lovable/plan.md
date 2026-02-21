

# Plan Aprobado: Reestructuracion Completa C3 Local Marketing

## Orden de Ejecucion por Fases

Dado el volumen (~25+ archivos nuevos, ~7 modificados), se implementara en 4 mensajes secuenciales:

---

### Mensaje 1 - Fase 1: Infraestructura

**Archivos nuevos:**
- `src/components/PageLayout.tsx` - Layout compartido (Navbar + Footer + WhatsApp + CallNow)
- `src/components/CallNowButton.tsx` - Boton flotante "Llamar Ahora" (mobile only, lado izquierdo)
- `src/components/SEOHead.tsx` - Meta tags dinamicos + FAQPage Schema via useEffect

**Archivos modificados:**
- `src/components/Navbar.tsx` - Rediseno completo con dropdowns (Servicios, Areas, Industrias, Recursos) + hamburger mobile con accordions. Dropdowns con bg-white solido y z-50.
- `src/components/Footer.tsx` - NAP completo (C3 Local Marketing, 134 Inger Dr, Santa Maria, CA 93454, (805) 363-4044) + Google Maps iframe + links de navegacion en columnas
- `src/App.tsx` - 15+ rutas nuevas para servicios, locations, industrias, recursos
- `src/index.css` - Variables CSS para colores Google (#4285F4, #EA4335, #FBBC05, #34A853) y Meta (#0866FF)
- `src/pages/Index.tsx` - Insertar ServicesHubSection despues de VideoTestimonialSection

---

### Mensaje 2 - Fase 2: Hub de Servicios + 4 Paginas Individuales

**Archivos nuevos:**
- `src/components/ServicesHubSection.tsx` - Grid 2x2 en desktop, stack en mobile. Cada card con borde de color de marca, titulo H3, descripcion visible en DOM, boton "Saber Mas"
- `src/pages/services/GoogleBusinessProfile.tsx` - H1 con keyword + condados, estetica Google, simulacion SERP, FAQ con Schema
- `src/pages/services/MetaAds.tsx` - H1 con keyword, estetica Meta/Instagram, mockup de ad, disclaimer Ad Spend, FAQ
- `src/pages/services/Websites.tsx` - H1 con keyword, mockup browser, grid de paginas incluidas, FAQ
- `src/pages/services/CRMAutomation.tsx` - H1 con keyword, mockup pipeline Kanban, FAQ

---

### Mensaje 3 - Fase 3 + 4: Location Pages + Industry Pages

**Archivos nuevos:**
- `src/components/LocationPageTemplate.tsx` - Template reutilizable (props: county, cities, mapUrl)
- `src/components/IndustryPageTemplate.tsx` - Template reutilizable (props: license, code, description, faqs)
- `src/pages/locations/SantaBarbaraCounty.tsx` - 7 ciudades mencionadas
- `src/pages/locations/SanLuisObispoCounty.tsx` - 7 ciudades mencionadas
- `src/pages/industries/Landscaping.tsx` (C-27)
- `src/pages/industries/Roofing.tsx` (C-39)
- `src/pages/industries/Plumbing.tsx` (C-36)
- `src/pages/industries/Electrical.tsx` (C-10)
- `src/pages/industries/Painting.tsx` (C-33)
- `src/pages/industries/HVAC.tsx` (C-20)
- `src/pages/industries/GeneralBuilding.tsx` (Class B)

---

### Mensaje 4 - Fase 5 + 6: Recursos + Traducciones

**Archivos nuevos:**
- `src/pages/resources/CSLBForms.tsx` - Directorio tipo tarjetas con links a fuentes oficiales CSLB
- `src/pages/resources/VerifyBusinessName.tsx` - Guia paso a paso con links oficiales

**Archivos modificados:**
- `src/i18n/translations.ts` - Traducciones bilingues (ES/EN) para toda la navegacion, hub de servicios, paginas de servicio, locations, industrias y recursos

---

## Lo que NO se toca

- `src/components/DiagnosticWizard.tsx` - Intacto
- `src/components/DiagnosticSection.tsx` - Intacto, permanece en Home despues de TrustGridSection
- `src/pages/DiagnosticResults.tsx` - Intacto en /resultados
- Todo el flujo de diagnostico existente queda sin cambios

## Estructura final del Home

```text
Navbar (rediseñado con dropdowns)
HeroSection
VideoTestimonialSection
ServicesHubSection (NUEVO - Grid 2x2)
TrustGridSection
DiagnosticSection (sin cambios)
TestimonialsSection
TeamSection
FAQSection
FinalCTASection
Footer (actualizado con NAP + mapa)
WhatsAppButton (sin cambios)
CallNowButton (NUEVO - mobile only)
```

