#utils.py puede ser omitida
import reflex as rx

# Metadatos comunes que se utilizarán en diferentes páginas
_meta = [
    {"name": "og:type", "content": "website"},  # Define el tipo de contenido como un sitio web
]

# Título y descripción para la página principal (index)
index_title = "Sakbyte"  # Título de la página principal
index_description = "Personal contact website created in Reflex 100% Python"  # Descripción de la página principal
index_image="/ico/logo.ico"

# Metadatos específicos para la página principal
index_meta = [
    {"name": "og:title", "content": index_title},  # Título para Open Graph
    {"name": "og:description", "content": index_description},  # Descripción para Open Graph
    {"name": "og:image", "content": index_image},
    
]
index_meta.extend(_meta)  # Agrega los metadatos comunes a los metadatos de la página principal

# Título y descripción para la página del chatbot
chatbot_title = "Sakbyte chat bot"  # Título de la página del chatbot
chatbot_description = "Chat with the Sakbyte chatbot."  # Descripción de la página del chatbot
chatbot_image="/ico/logo.ico"

# Metadatos específicos para la página del chatbot
chatbot_meta = [
    {"name": "og:title", "content": chatbot_title},  # Título para Open Graph
    {"name": "og:description", "content": chatbot_description}, # Descripción para Open Graph
    {"name": "og:image", "content": chatbot_image},
]
chatbot_meta.extend(_meta)  # Agrega los metadatos comunes a los metadatos de la página del chatbot