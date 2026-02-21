

# Fase 3: Location Pages + Industry Pages

## Resumen

Reemplazar los 9 placeholders existentes (2 locations + 7 industries) con paginas completas, usando templates reutilizables, el copy persuasivo proporcionado, y SEOHead con FAQPage Schema.

---

## 1. LocationPageTemplate (src/components/LocationPageTemplate.tsx)

**Nuevo archivo.** Template reutilizable con props:

```
countyName, h1, problemText, solutionText, cities[], mapEmbedUrl, seoTitle, seoDescription, faqItems[]
```

Estructura visual (siguiendo el patron establecido en GBP page):
- SEOHead con title, description, faqItems
- Hero: H1 + barra decorativa C3 naranja
- Seccion "El Problema" (fondo muted): Icono AlertTriangle + copy de dolor local
- Seccion "La Solucion" (fondo blanco): Icono CheckCircle + copy de autoridad local
- Seccion "Ciudades que Servimos": Grid responsive (3-4 columnas desktop, 2 mobile) con iconos MapPin por ciudad
- Seccion "Hablamos el Idioma de tu Licencia": Chips/badges visuales con nomenclaturas CSLB (C-27, C-39, C-36, C-10, C-33, C-20, Class B) - cada badge enlaza a su pagina de industria
- Google Maps iframe embebido del condado
- FAQ con Accordion + Schema
- CTA: "Diagnostica tu Negocio Gratis" -> /#diagnostico

---

## 2. Pagina Santa Barbara County

**Reemplazar placeholder en src/pages/locations/SantaBarbaraCounty.tsx**

- H1: "Dominando el Mercado de Contratistas en el Condado de Santa Barbara."
- Problema: Copy sobre competencia feroz, contratistas que se llevan proyectos por aparecer primero en Google Maps
- Solucion: Copy sobre conocimiento del ecosistema de la Costa Central, Growth Marketing para licencias CSLB
- Ciudades: Santa Maria, Orcutt, Santa Barbara, Goleta, Lompoc, Carpinteria, Guadalupe
- Mapa: iframe de Google Maps centrado en Santa Barbara County
- FAQ: 4-5 preguntas especificas del condado (ej. "Trabajan con contratistas en Lompoc?", "Que licencias CSLB cubren?")

---

## 3. Pagina San Luis Obispo County

**Reemplazar placeholder en src/pages/locations/SanLuisObispoCounty.tsx**

- H1: "El Sistema de Crecimiento para Contratistas en el Condado de San Luis Obispo."
- Problema: Copy sobre costos de cubrir un condado amplio, prospectos de bajo valor fuera de ruta rentable
- Solucion: Copy sobre filtros automaticos y SEO hiper-localizado para prospectos calificados
- Ciudades: San Luis Obispo, Paso Robles, Atascadero, Arroyo Grande, Nipomo, Grover Beach, Morro Bay
- Mapa: iframe de Google Maps centrado en SLO County
- FAQ: 4-5 preguntas especificas

---

## 4. IndustryPageTemplate (src/components/IndustryPageTemplate.tsx)

**Nuevo archivo.** Template reutilizable con props:

```
licenseCode, licenseName, industryNameEs, h1, problemText, solutionText, services[], faqItems[], seoTitle, seoDescription
```

Estructura visual:
- SEOHead con title, description, faqItems
- Hero: H1 con licencia + condados + barra decorativa en color de la industria
- Seccion "El Problema del [Industria]" (fondo muted): Copy de dolor especifico del nicho
- Seccion "Como te Ayudamos" (fondo blanco): Copy de solucion + lista de servicios relevantes con checkmarks (vinculados a las paginas de servicio)
- Seccion "Areas que Cubrimos": Badges de Santa Barbara County y SLO County enlazando a location pages
- FAQ con Accordion + Schema
- CTA al diagnostico

---

## 5. Las 7 Paginas de Industria

Cada archivo reemplaza su placeholder actual. Copy persuasivo por nicho:

### C-27 Landscaping (src/pages/industries/Landscaping.tsx)
- H1: "Marketing para Contratistas de Paisajismo (C-27) en Santa Barbara y SLO"
- Problema: Depender de boca en boca, perder clientes recurrentes de alto valor ante competidores con mejor presencia digital
- Solucion: Posicionamiento para contratos de mantenimiento recurrente y proyectos de hardscape de alto margen

### C-39 Roofing (src/pages/industries/Roofing.tsx)
- H1: "Marketing para Contratistas de Techados (C-39) en Santa Barbara y SLO"
- Problema: El ciclo de ventas depende de tormentas y emergencias; cuando no hay emergencia, el telefono deja de sonar
- Solucion: Sistema de leads constante que no depende del clima, capturando propietarios que planifican reemplazos

### C-36 Plumbing (src/pages/industries/Plumbing.tsx)
- H1: "Marketing para Plomeros (C-36) en Santa Barbara y SLO"
- Problema: Competir con apps de servicios baratos y contratistas sin licencia que bajan los precios
- Solucion: Posicionarte como el plomero licenciado de confianza, filtrando leads que buscan calidad sobre precio

### C-10 Electrical (src/pages/industries/Electrical.tsx)
- H1: "Marketing para Electricistas (C-10) en Santa Barbara y SLO"
- Problema: Los propietarios no entienden la diferencia entre un electricista licenciado y un handyman; te pierdes proyectos grandes
- Solucion: Educar al mercado y posicionar tu licencia C-10 como garantia de seguridad y codigo

### C-33 Painting (src/pages/industries/Painting.tsx)
- H1: "Marketing para Contratistas de Pintura (C-33) en Santa Barbara y SLO"
- Problema: La barrera de entrada es baja; cualquiera con una brocha compite contigo, haciendo que los precios se desplomen
- Solucion: Diferenciarte como contratista profesional con licencia, portfolio visual y resenas verificadas

### C-20 HVAC (src/pages/industries/HVAC.tsx)
- H1: "Marketing para Contratistas HVAC (C-20) en Santa Barbara y SLO"
- Problema: La demanda es estacional; los picos de verano e invierno no compensan los meses muertos de primavera y otono
- Solucion: Campanas de mantenimiento preventivo y filtros inteligentes para llenar el calendario todo el ano

### Class B General Building (src/pages/industries/GeneralBuilding.tsx)
- H1: "Marketing para Contratistas Generales (Class B) en Santa Barbara y SLO"
- Problema: Los proyectos grandes requieren confianza; los propietarios investigan mucho antes de contratar una remodelacion completa
- Solucion: Presencia digital premium que genera confianza inmediata con portfolio, resenas y licencia verificable

---

## Archivos a crear/modificar

| Archivo | Accion |
|---------|--------|
| src/components/LocationPageTemplate.tsx | CREAR |
| src/components/IndustryPageTemplate.tsx | CREAR |
| src/pages/locations/SantaBarbaraCounty.tsx | REEMPLAZAR |
| src/pages/locations/SanLuisObispoCounty.tsx | REEMPLAZAR |
| src/pages/industries/Landscaping.tsx | REEMPLAZAR |
| src/pages/industries/Roofing.tsx | REEMPLAZAR |
| src/pages/industries/Plumbing.tsx | REEMPLAZAR |
| src/pages/industries/Electrical.tsx | REEMPLAZAR |
| src/pages/industries/Painting.tsx | REEMPLAZAR |
| src/pages/industries/HVAC.tsx | REEMPLAZAR |
| src/pages/industries/GeneralBuilding.tsx | REEMPLAZAR |

## Detalles tecnicos

- Ambos templates siguen el patron visual establecido en GoogleBusinessProfile.tsx (Problem/Solution con iconos, Accordion FAQs, CTA al diagnostico)
- SEOHead inyecta FAQPage Schema en cada pagina
- Badges CSLB en Location pages usan el componente Badge existente con Link a paginas de industria
- Google Maps iframes usan URLs de embed estandar con parametros de zoom apropiados para cada condado
- Iconos Lucide: MapPin (ciudades), AlertTriangle (problema), CheckCircle (solucion), Building2 (industria), Shield (licencia)
- Links internos entre Location e Industry pages para reforzar la estructura de silos SEO

