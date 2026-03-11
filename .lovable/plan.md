

# Cambiar idioma default a inglés + metadata bilingüe

## Contexto

Actualmente todo el SEO (title, meta description, OG tags en `index.html`) está en español, y el idioma default de la app es `'es'`. El usuario quiere que **inglés sea el idioma predeterminado** para mejor SEO en Google US.

## Cambios

### 1. `index.html` — Metadata en inglés
- **Title**: `"C3 Local Marketing | Digital Marketing Agency for Contractors in California"`
- **Meta description**: `"C3 Local Marketing helps Hispanic contractors in California get more clients with Meta and Google advertising. Santa Maria, CA."`
- **OG title/description**: English versions
- **Twitter title/description**: English versions
- `<html lang="en">` ya está correcto

### 2. `src/contexts/LanguageContext.tsx` — Default a `'en'`
- Línea 11: `language: 'es'` → `language: 'en'`
- Línea 19: fallback `|| 'es'` → `|| 'en'`
- Línea 21: fallback `'es'` → `'en'`

Usuarios que ya visitaron el sitio mantendrán su preferencia guardada en localStorage. Nuevos visitantes verán inglés primero.

### 3. `src/components/SEOHead.tsx` — Actualizar `<html lang>` dinámicamente
Agregar lógica para cambiar `document.documentElement.lang` según el idioma activo, para que Google entienda cuándo el contenido está en español vs inglés.

### 4. `src/components/SEOHead.tsx` — Actualizar OG tags dinámicamente
Extender el componente para también actualizar `og:title`, `og:description`, `twitter:title`, `twitter:description` según el idioma, de modo que si un usuario comparte la página en español, las previews sociales reflejen el idioma correcto.

## Archivos a modificar

| Archivo | Cambio |
|---------|--------|
| `index.html` | Title, description, OG/Twitter tags a inglés |
| `src/contexts/LanguageContext.tsx` | Default `'en'` en vez de `'es'` |
| `src/components/SEOHead.tsx` | Agregar actualización dinámica de `html lang` y OG tags |

