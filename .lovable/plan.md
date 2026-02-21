

# Fase 2: Hub de Servicios + 4 Paginas Individuales

## Resumen

Implementar el ServicesHubSection en el Home y construir las 4 paginas de servicio completas usando el copy exacto proporcionado, con la estetica de marca aprobada y SEO tecnico (SEOHead + FAQPage Schema).

---

## 1. ServicesHubSection (src/components/ServicesHubSection.tsx)

**Nuevo archivo.** Se inserta en Index.tsx despues de VideoTestimonialSection.

- Titulo H2: "Nuestro Enfoque: Crecimiento Real, No Metricas Falsas."
- Grid 2x2 en desktop (grid-cols-2), stack en mobile
- Cada card usa el componente Card existente con:
  - Borde superior de 4px con color de marca (Google multicolor, Meta blue, C3 red, C3 yellow)
  - Icono de Lucide (MapPin para GBP, Megaphone para Meta, Monitor para Websites, Cog para CRM)
  - Titulo H3 con el copy exacto proporcionado
  - Descripcion visible en DOM (no oculta)
  - Boton "Saber Mas" con Link de react-router-dom a la pagina individual
- Usa useLanguage() para soporte bilingue

**Modificacion en Index.tsx:** Insertar `<ServicesHubSection />` entre VideoTestimonialSection y TrustGridSection.

---

## 2. Pagina GBP (src/pages/services/GoogleBusinessProfile.tsx)

**Reemplazar el placeholder actual.**

Estructura de la pagina:
- PageLayout wrapper (ya existe)
- SEOHead con title: "Domina Google Maps en Santa Barbara y SLO | C3 Local Marketing", description optimizada, y faqItems para Schema
- Hero section con fondo blanco:
  - H1: "Haz que tu telefono suene: Domina Google Maps en la Costa Central."
  - Barra decorativa con los 4 colores de Google debajo del H1
- Seccion "El Problema" (fondo muted):
  - Icono AlertTriangle rojo
  - Copy exacto sobre los $8,000 perdidos
- Seccion "La Solucion" (fondo blanco):
  - Icono CheckCircle verde
  - Copy exacto sobre top 3 del mapa
  - Lista de servicios incluidos con checkmarks (verificacion, optimizacion NAP, resenas, fotos, posts, auditoria)
- Seccion FAQ con Accordion (usando componente existente de Radix):
  - 4-5 preguntas generadas en tono anti-metricas-falsas (ej: "Cuanto tarda en verse resultados reales?", "Que pasa si ya tengo un perfil pero no aparezco?")
  - Schema FAQPage inyectado via SEOHead
- CTA final: Boton grande "Diagnostica tu Negocio Gratis" que enlaza a /#diagnostico

---

## 3. Pagina Meta Ads (src/pages/services/MetaAds.tsx)

**Reemplazar el placeholder actual.**

Estructura:
- PageLayout + SEOHead (title con keyword + condados)
- Hero:
  - H1: "Anuncios que traen contratos, no solo 'Me Gusta'."
  - Barra decorativa con gradiente Instagram (purpura a naranja) y azul Meta
- Seccion "El Problema - Metricas Falsas":
  - Copy exacto sobre likes que no pagan facturas
  - Visual: mockup simple de metricas vanidosas (likes, impresiones) tachadas vs metricas reales (llamadas, contratos)
- Seccion "La Solucion - Growth Marketing":
  - Copy exacto sobre campanas de respuesta directa
  - Lista de servicios: Business Manager, campanas de leads, retargeting, reportes, creative
- Disclaimer de Ad Spend (reusando patron de PricingSection):
  - Nota en fondo muted explicando que el presupuesto publicitario es aparte
- FAQ con 4-5 preguntas + Schema
- CTA al diagnostico

---

## 4. Pagina Websites (src/pages/services/Websites.tsx)

**Reemplazar el placeholder actual.**

Estructura:
- PageLayout + SEOHead
- Hero:
  - H1: "Tu pagina web deberia ser tu mejor vendedor."
  - Barra decorativa C3 red
- Seccion "El Problema":
  - Copy sobre web bonita que no convierte
- Seccion "La Solucion":
  - Copy sobre sistemas optimizados para llamadas de alto valor
  - Grid de features incluidas: mobile-first, bilingue, SEO local, velocidad, SSL
- Seccion "Planes de Inversion" (NUEVO - solicitado por el usuario):
  - Grid de 3 Cards con:
    - Card 1: "Plan Esencial" - precio placeholder "$X,XXX" - lista de features placeholder
    - Card 2: "Plan Profesional" (destacado con borde primary) - precio placeholder - lista placeholder
    - Card 3: "Plan Premium" - precio placeholder - lista placeholder
  - Nota: "Precios por definir" en texto muted debajo
- FAQ con 4-5 preguntas + Schema
- CTA al diagnostico

---

## 5. Pagina CRM (src/pages/services/CRMAutomation.tsx)

**Reemplazar el placeholder actual.**

Estructura:
- PageLayout + SEOHead
- Hero:
  - H1: "Automatiza tu seguimiento y deja de perder dinero sobre la mesa."
  - Barra decorativa amarillo/verde C3
- Seccion "El Problema":
  - Copy sobre presupuestos que se quedan en el aire
- Seccion "La Solucion":
  - Copy sobre sistema CRM con SMS y correos automaticos
  - Visual: mockup simple de pipeline Kanban con 4 columnas (Nuevo Lead, Contactado, Propuesta, Cerrado) usando Cards y badges de colores
- Lista de features: pipeline de ventas, SMS/email automatico, integracion web, reportes, 24/7
- FAQ con 4-5 preguntas + Schema
- CTA al diagnostico

---

## Archivos a crear/modificar

| Archivo | Accion |
|---------|--------|
| src/components/ServicesHubSection.tsx | CREAR - Grid 2x2 con 4 cards |
| src/pages/services/GoogleBusinessProfile.tsx | REEMPLAZAR placeholder completo |
| src/pages/services/MetaAds.tsx | REEMPLAZAR placeholder completo |
| src/pages/services/Websites.tsx | REEMPLAZAR placeholder completo |
| src/pages/services/CRMAutomation.tsx | REEMPLAZAR placeholder completo |
| src/pages/Index.tsx | MODIFICAR - insertar ServicesHubSection |

## Detalles tecnicos

- Todas las paginas usan el componente SEOHead existente con props: title, description, faqItems[]
- FAQs usan el Accordion de Radix UI ya instalado (@radix-ui/react-accordion)
- Iconos de Lucide React (ya instalado): MapPin, Megaphone, Monitor, Cog, AlertTriangle, CheckCircle, Phone, Mail, etc.
- Navegacion interna con Link de react-router-dom
- Cards de pricing en Websites usan el componente Card existente con variantes de borde
- Pipeline Kanban en CRM es visual/estatico (no interactivo), construido con Cards y badges
- Soporte bilingue via useLanguage() hook
- Las FAQs se generaran en tono consistente con el copy anti-metricas-falsas proporcionado

