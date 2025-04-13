# Instrucciones de Despliegue y Mantenimiento

## Configuración del Entorno Local

### Usando Anaconda
1. Abrir Anaconda Prompt
2. Crear y activar el entorno:
```bash
conda create --name webdev nodejs npm -y
conda activate webdev
```

### Desarrollo Local
1. Navegar al directorio del proyecto:
```bash
cd "ruta-de-tu-proyecto"
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

## Hacer Cambios y Actualizar el Sitio

### Proceso Local
1. Activar el entorno de Anaconda:
```bash
conda activate webdev
```

2. Probar cambios localmente:
```bash
npm run dev
```

3. Cuando los cambios estén listos, subirlos a GitHub:
```bash
git add .
git commit -m "descripción de tus cambios"
git push origin main
```

### Netlify (Despliegue Automático)
- Netlify detectará automáticamente los cambios en GitHub
- No se requiere acción manual para el despliegue
- Cada push a la rama main iniciará un nuevo despliegue

### Verificar Despliegue en Netlify
1. Ir a app.netlify.com
2. Seleccionar el sitio "elnaranjoclinicapsicologica"
3. Ver progreso en la pestaña "Deploys"

### Forzar Despliegue en Netlify (si es necesario)
1. Ir al dashboard del sitio en Netlify
2. Hacer clic en "Trigger deploy"
3. Seleccionar "Clear cache and deploy site"

## Configuración Actual
- Framework: Vite + React
- Despliegue: Netlify
- Repositorio: GitHub
- URL del sitio: [Tu URL de Netlify]

## Notas Importantes
- Siempre prueba los cambios localmente antes de hacer push
- Los deploys son automáticos después de cada push a main
- Mantén actualizado este documento con cualquier cambio en el proceso

## Extras
Tu despliegue en Netlify es gratuito y no tiene fecha de caducidad. Netlify ofrece un plan gratuito ("Starter") que incluye:

Hosting ilimitado en el tiempo
HTTPS automático
Despliegue continuo desde GitHub
Ancho de banda de 100GB/mes
Builds ilimitados
Tu sitio permanecerá en línea indefinidamente siempre que:

Mantengas tu cuenta de Netlify activa
No excedas los límites del plan gratuito (lo cual es poco probable para un sitio web normal)
Tu repositorio de GitHub siga disponible
Si en algún momento necesitas más recursos o características, Netlify ofrece planes de pago, pero para un sitio web como el tuyo, el plan gratuito es más que suficiente y no necesitarás actualizarlo a menos que tengas necesidades muy específicas de alto tráfico o características avanzadas.