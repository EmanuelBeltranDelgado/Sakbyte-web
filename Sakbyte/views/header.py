import reflex as rx
from Sakbyte.constants import GITHUB_URL, LINKEDIN_URL, EMAIL, WHATSAPP_URL
from Sakbyte.components.linkicon import linkicon
from Sakbyte.components.infotext import infotext
from Sakbyte.styles.colors import TextColor

# Función que genera el encabezado de la página web
# El parámetro "details" indica si se deben mostrar detalles adicionales
def header(details=True) -> rx.Component:
    return rx.vstack(  # Contenedor vertical principal
        rx.hstack(  # Contenedor horizontal para el avatar y la información básica
            rx.avatar(  # Componente de avatar con imagen y estilo personalizado
                src="/png/logo.png",
                name="Enamuel Beltran", 
                size="7",
                height="auto",
                #border="4px solid #E8A9B7",  # Borde decorativo (color del logo #E8A9B7)
            ),
            rx.vstack(  # Contenedor vertical para el nombre, usuario y enlaces
                rx.text("Emanuel Beltran", size="4", trim="end", color=TextColor.HEADER.value),  # Nombre del usuario
                rx.text("@emanuel", trim="start", color=TextColor.BODY.value),  # Nombre de usuario
                rx.hstack(  # Contenedor horizontal para los íconos de enlaces
                    linkicon(GITHUB_URL, "/svg/github.svg", "Github"),  # Ícono de enlace a Github
                    linkicon(LINKEDIN_URL, "/svg/linkedin.svg", "Linkedin"),  # Ícono de enlace a LinkedIn
                    linkicon(EMAIL, "/svg/email.svg", "Email"),  # Ícono de enlace al correo electrónico
                    linkicon(WHATSAPP_URL, "/svg/whatsapp.svg", "WhatsApp"),  # Ícono de enlace a WhatsApp
                ),
            ),
            spacing="4",  # Espaciado entre el avatar y la información
        ),

        # Condicional para mostrar detalles adicionales si "details" es True
        rx.cond(
            details,
            rx.vstack(  # Contenedor vertical para los detalles adicionales
                rx.flex(  # Contenedor flexible para los textos informativos
                    infotext("+4", "projects carried out"),  # Información sobre proyectos realizados
                    rx.spacer(),  # Espaciador
                    infotext("+2", "Years programming in Python"),  # Información sobre experiencia en Python
                    rx.spacer(),  # Espaciador
                    infotext("", "CCNA"),  # Certificación CCNA
                    width="100%",  # Ancho completo
                ),
                rx.text(  # Texto descriptivo sobre el desarrollador
                    """Highly motivated Software Developer with a recent degree 
                    and hands-on experience in Python, C, and C++. 
                    I possess a strong foundation in software development principles 
                    and a proven ability to solve complex problems. 
                    Eager to contribute to challenging projects 
                    and accelerate my professional growth within a dynamic IT environment.""", 
                    text_align="justify", color=TextColor.HEADER.value
                ),
                width="100%",  # Ancho completo
                spacing="5",  # Espaciado entre elementos
            ),
        ),
        spacing="7",  # Espaciado entre el encabezado y los detalles
    )