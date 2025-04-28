# Exportar el proyecto Reflex con solo los activos del frontend
reflex export --frontend-only

# Eliminar el directorio 'public' existente si existe
rm -rf public

# Extraer el contenido de frontend.zip en el directorio 'public'
Expand-Archive frontend.zip -d public

# Eliminar el archivo frontend.zip después de la extracción
Remove-Item frontend.zip