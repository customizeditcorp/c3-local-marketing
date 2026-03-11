

# Fase 4: Precios Reales + Anexo Legal + Pulido Final

## Resumen

Integrar los precios reales del Sistema Maestro en la pagina de Websites, agregar el anexo legal A2P 10DLC a Terminos de Servicio, y confirmar que las paginas de recursos y traducciones estan completas.

---

## 1. Actualizar Precios en Websites (src/pages/services/Websites.tsx)

**Reemplazar el array `planes` (lineas 41-60)** con los 3 tiers reales:

### Plan Cimientos
- Nombre: "Programa Cimientos"
- Precio: "$499/mes (Mes 1-3) -> $599/mes (Mes 4+)"
- Badge: ninguno
- Enfoque: Google Business Profile
- Features: GBP verificado y optimizado, SEO local basico, NAP consistente, Gestion de resenas, Reportes mensuales

### Plan Expansion Total (RECOMENDADO)
- Nombre: "Plan Expansion Total"
- Precio: "$599/mes (Mes 1-2) -> $1,299/mes (Mes 3+)"
- Badge: "Recomendado" (reemplaza "Mas Popular")
- Enfoque: Omnicanal y Growth Marketing
- Features: Todo de Cimientos + Meta Ads management, Sitio web profesional, Campanas de leads, Retargeting, Reportes avanzados

### Plan Dominio Estrategico
- Nombre: "Plan Dominio Estrategico"
- Precio: "Mes 1: $600 | Mes 2: $1,299 | Mes 3+: $2,599"
- Badge: ninguno
- Enfoque: Funnels y Automatizacion total
- Features: Todo de Expansion + CRM automatizado, Funnels de conversion, SMS/Email automatico, Soporte prioritario, Estrategia personalizada

**Cambios en la UI de cada Card:**
- Mostrar precio con formato escalonado (starter -> normal) en lugar de un solo precio
- Agregar subtitulo descriptivo del enfoque debajo del nombre
- Eliminar la nota "Precios por definir" (linea 156) ya que ahora son reales
- Agregar nota de Ad Spend debajo del grid: "La gestion de campanas esta incluida. El presupuesto publicitario (Ad Spend) es adicional y se paga directamente por el cliente a las plataformas."

---

## 2. Anexo Legal A2P 10DLC (src/pages/TermsOfService.tsx)

**Agregar una nueva seccion DESPUES de la seccion 11 (Informacion de Contacto), ANTES del bloque de links del footer (linea 212).**

Nueva seccion con estructura bilingue (usando el patron `language === 'es'` existente):

### Titulo: "Anexo de Comunicaciones Electronicas (A2P 10DLC)"

Contenido (3 puntos):
- **Consentimiento:** Al proporcionar tu numero, aceptas recibir mensajes de texto y WhatsApp para fines de seguimiento de proyectos y marketing.
- **Opt-Out:** El usuario puede cancelar la suscripcion en cualquier momento enviando la palabra 'STOP'. Para ayuda, envia 'HELP'.
- **Privacidad de Datos:** No compartimos ni vendemos datos de consentimiento de mensajes de texto con terceros.

Version en ingles correspondiente incluida.

---

## 3. Paginas de Recursos - Confirmacion

Las paginas CSLBForms.tsx y VerifyBusinessName.tsx ya estan **completas** con:
- Grid de 8 formularios CSLB con enlaces al sitio oficial
- Guia de 3 pasos con enlaces externos a CSLB y Bizfile
- FAQs, SEOHead, disclaimers legales
- Soporte bilingue via `isEnglish`

**No requieren cambios adicionales.**

---

## 4. Traducciones - Verificacion

El archivo translations.ts ya contiene las keys para `resources.cslbForms` y `resources.verifyName` en ambos idiomas.

**No requiere cambios adicionales** ya que las paginas de servicios, ubicaciones e industrias usan ternarios `isEnglish ?` directamente (patron consistente en todo el sitio).

---

## Archivos a modificar

| Archivo | Accion |
|---------|--------|
| src/pages/services/Websites.tsx | MODIFICAR - reemplazar precios placeholder con tiers reales |
| src/pages/TermsOfService.tsx | MODIFICAR - agregar Anexo A2P 10DLC al final |

## Detalles tecnicos

- Websites.tsx: El array `planes` se reemplaza con datos reales. La estructura de Card se ajusta para mostrar precios escalonados (texto mas pequeno para starter, texto grande para precio normal)
- TermsOfService.tsx: Se agrega una seccion 12 siguiendo el patron bilingue existente (`language === 'es' ? ... : ...`). Se inserta antes de la linea 212 (bloque de links)
- No se tocan CSLBForms.tsx, VerifyBusinessName.tsx ni translations.ts (ya estan completos)

