

# Fase Final: Centro de Recursos + Traducciones

## Resumen

Reemplazar los 2 placeholders de recursos con paginas completas usando el copy proporcionado, y actualizar el archivo de traducciones para cubrir las secciones faltantes.

---

## 1. CSLBForms (src/pages/resources/CSLBForms.tsx)

**Reemplazar placeholder actual.**

Estructura:
- PageLayout + SEOHead con title/description optimizados y faqItems para Schema
- Hero: H1 "Formularios Oficiales del CSLB California - Directorio Rapido" + barra decorativa C3
- Seccion "El Problema" (fondo muted): Copy sobre navegar sitios del gobierno confusos
- Seccion "La Solucion" (fondo blanco): Copy sobre formularios organizados en un solo lugar
- Grid de Cards (3 columnas desktop, 1 mobile) con formularios CSLB:
  - "Aplicacion para Licencia Original" - Para solicitar tu primera licencia de contratista
  - "Certificacion de Asbestos (DOSH)" - Requerida para proyectos de remocion de asbestos
  - "Registro de Vendedor HIS (Home Improvement Salesperson)" - Para registrar vendedores de mejoras del hogar
  - "Solicitud de Examen" - Para programar tu examen de licencia CSLB
  - "Renovacion de Licencia" - Para renovar tu licencia activa antes del vencimiento
  - "Cambio de Nombre o Direccion" - Para actualizar la informacion de tu licencia
  - "Fianza de Contratista (Contractor Bond)" - Documentacion para tu fianza requerida
  - "Reactivacion de Licencia" - Para reactivar una licencia vencida o inactiva
- Cada Card: titulo, descripcion de 1 linea, boton secundario "Ver Documento Oficial" enlazando a https://www.cslb.ca.gov/About_Us/Library/Forms_And_Applications.aspx
- Nota legal (fondo muted, texto sm): "C3 Local Marketing no es una entidad gubernamental. Enlazamos directamente a los documentos publicos del Estado de California para facilitar el acceso a nuestros clientes contratistas."
- CTA final: "Diagnostica tu Negocio Gratis" -> /#diagnostico

---

## 2. VerifyBusinessName (src/pages/resources/VerifyBusinessName.tsx)

**Reemplazar placeholder actual.**

Estructura:
- PageLayout + SEOHead con title/description y faqItems
- Hero: H1 "Guia: Como Verificar si el Nombre de tu Constructora esta Disponible" + barra decorativa
- Seccion "El Problema" (fondo muted): Copy sobre pagar por truck wraps y dominios para descubrir que el nombre ya esta registrado
- Seccion guia paso a paso (fondo blanco) con 3 Cards numeradas:
  - Paso 1: "Busqueda en el CSLB" - Verifica que ningun otro contratista activo tenga el nombre exacto. Boton externo -> https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx
  - Paso 2: "Secretario de Estado (Bizfile)" - Revisa la base de datos oficial de corporaciones y LLCs. Boton externo -> https://bizfileonline.sos.ca.gov/search/business
  - Paso 3: "Protege tu Dominio Digital" - Asegurate de que el .com este disponible antes de registrar en el estado. Texto: "Nosotros te ayudamos con eso."
- CTA final prominente: "Asegura tu Dominio y Web Hoy" -> /servicios/websites-profesionales
- FAQ con 3-4 preguntas relevantes + Schema

---

## 3. Traducciones (src/i18n/translations.ts)

**Modificar archivo existente.** Agregar traducciones para:

Dentro de `es` y `en`:
- `navbar.services` / `navbar.areas` / `navbar.industries` / `navbar.resources` (titulos de dropdowns)
- `servicesHub.title` / `servicesHub.titleHighlight` (titulo de la seccion en Home)
- `resources.cslbForms.*` (titulos y textos de la pagina CSLB)
- `resources.verifyName.*` (titulos y textos de la pagina de verificacion)
- `footer.services` / `footer.areas` / `footer.resources` (titulos de columnas del footer)

Nota: El Navbar y ServicesHubSection actualmente usan ternarios `isEnglish ?` directamente. Para esta fase, mantendremos ese patron (funciona correctamente) y solo agregaremos keys para el contenido de las 2 paginas de recursos, ya que esas si necesitan ser bilingues via `t()`.

---

## Archivos a crear/modificar

| Archivo | Accion |
|---------|--------|
| src/pages/resources/CSLBForms.tsx | REEMPLAZAR placeholder |
| src/pages/resources/VerifyBusinessName.tsx | REEMPLAZAR placeholder |
| src/i18n/translations.ts | MODIFICAR - agregar keys de recursos |

## Detalles tecnicos

- Ambas paginas siguen el patron visual establecido: Hero + Problem + Solution + Content + CTA
- SEOHead inyecta FAQPage Schema en cada pagina
- Links externos usan target="_blank" rel="noopener noreferrer"
- Grid de formularios CSLB usa el componente Card existente con Button variant="outline"
- Pasos numerados en VerifyBusinessName usan Cards con numeros grandes (text-4xl font-bold text-primary) como indicadores visuales
- Iconos Lucide: FileText (formularios), ExternalLink (enlaces externos), Search (busqueda), Shield (verificacion), Globe (dominio)
- CTA de VerifyBusinessName enlaza internamente a /servicios/websites-profesionales (cross-selling)

