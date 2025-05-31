import reflex as rx
from Sakbyte import constants
from Sakbyte.components.linkbutton import linkbutton
from Sakbyte.components.title import title
from Sakbyte.routes import Route

# Función que genera un componente de interfaz de usuario con enlaces organizados por categorías
def index_links() -> rx.Component:
    return rx.vstack(  # Crea un contenedor vertical para organizar los elementos
        title("My networks"),  # Título para la sección de redes sociales
        linkbutton(  # Botón de enlace para GitHub
            "GITHUB", 
            "Overview", 
            constants.GITHUB_URL,  # URL de GitHub
            "/svg/github.svg"  # Icono asociado
        ),
        linkbutton(  # Botón de enlace para LinkedIn
            "Linkedin", 
            "LinkedIn profile", 
            constants.LINKEDIN_URL,  # URL de LinkedIn
            "/svg/linkedin.svg",  # Icono asociado
        ),

        title("Contact"),  # Título para la sección de contacto
        linkbutton(  # Botón de enlace para correo electrónico
            "Email",
            "Contact me by email",
            constants.EMAIL,  # Dirección de correo electrónico
            "/svg/email.svg",  # Icono asociado
        ),
        linkbutton(  # Botón de enlace para WhatsApp
            "WhatsApp",
            "Contact me on WhatsApp",
            constants.WHATSAPP_URL,  # URL de WhatsApp
            "/svg/whatsapp.svg",  # Icono asociado
        ),

        title("Projects"),  # Título para la sección de proyectos
        linkbutton(  # Botón de enlace para la aplicación de noticias
            "News", 
            "Mobile news app", 
            constants.NEWS,  # URL del proyecto de noticias
            "/svg/github.svg",  # Icono asociado
        ),
        linkbutton(  # Botón de enlace para la página web
            "Web page", 
            "Contact web page", 
            constants.PAGE_WEB,  # URL del proyecto de página web
            "/svg/github.svg",  # Icono asociado
        ),

        title("Others"),  # Título para la sección de otros
        linkbutton(  # Botón de enlace para el chatbot
            "Chat bot",
            "Chat with AI and have fun",
            Route.CHATBOT.value,  # Ruta interna para el chatbot
            "/svg/chat_bot.svg",  # Icono asociado
            is_external=False,  # Indica que el enlace no es externo
        ),
        #linkbutton(
        #    "CV",
        #    "Download my CV",
        #    "/files/CV.pdf",
        #    "/svg/download_file.svg",
        #    download=True,
        #),
        width="100%",  # Ancho del contenedor
    )