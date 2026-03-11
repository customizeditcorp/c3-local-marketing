

# Actualizar index.html con metadata real de C3

Aplicar todos los datos que el usuario pegó en los dos mensajes anteriores.

## Cambios en `index.html`

### 1. Title (línea 26)
```
C3 Local Marketing | Agencia de Marketing Digital para Contratistas en California
```

### 2. Schema JSON-LD (líneas 34-83)
- `image` → `https://c3marketinghub.com/favicon.svg`
- `url` → `https://c3marketinghub.com`
- `sameAs` → Facebook, Instagram, TikTok reales

### 3. Meta description + author (líneas 86-87)
- Description en español optimizada para contratistas
- Author → `C3 Local Marketing`

### 4. OG + Twitter tags (líneas 104-113)
Reemplazar todos con las versiones C3-branded:
- `og:url`, `og:title`, `og:description`, `og:image` (R2 screenshot)
- `twitter:site` → `@c3localmarketing`
- Títulos y descripciones en español

### 5. Flock Analytics script
Agregar antes de `</head>`:
```html
<script defer src="https://c3marketinghub.com/~flock.js" data-proxy-url="https://c3marketinghub.com/~api/analytics"></script>
```

### 6. CSP update (líneas 10-16)
Agregar `https://c3marketinghub.com` a `script-src` y `connect-src`.

---

**Un solo archivo**: `index.html` — reescritura completa con todos los datos reales.

