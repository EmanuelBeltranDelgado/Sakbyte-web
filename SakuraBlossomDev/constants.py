# Importa el módulo os para interactuar con variables de entorno
import os
from dotenv import load_dotenv

load_dotenv() # Carga las variables de entorno definidas en el archivo .env
WHATSAPP_LINK = os.getenv("WHATSAPP_LINK") # Obtiene el valor de la variable de entorno

GITHUB_URL = "https://github.com/EmanuelBeltranDelgado"
LINKEDIN_URL = "https://www.linkedin.com/in/emanuel-beltran-delgado-779b2a31b/"
SAKURA_COLOR_URL = "https://www.colorhexa.com/ffb7c5"
EMAIL = "mailto:emanuel.beltran5853@alumnos.udg.mx"
NEWS = "https://github.com/EmanuelBeltranDelgado/Noticias"
PAGE_WEB = "https://github.com/EmanuelBeltranDelgado/Sakura-Blossom-Dev-web"
WHATSAPP_URL = WHATSAPP_LINK