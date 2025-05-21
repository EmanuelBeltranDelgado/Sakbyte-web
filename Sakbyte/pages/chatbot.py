import reflex as rx
from Sakbyte.components.navbar import navbar  # Importa el componente de la barra de navegación
from Sakbyte.views.header import header  # Importa el componente del encabezado
from Sakbyte.components.footer import footer  # Importa el componente del pie de página
from Sakbyte.views.chat import chat, action_bar  # Importa los componentes del chat y la barra de acciones
from Sakbyte.views.chat_deletion_pop_up import chat_delete # Importamos el componente para borrar el historial
from Sakbyte.components.background_animation import animation_bg  # Importa el componente de animación de fondo
from Sakbyte import utils  # Importa utilidades generales
import Sakbyte.styles.styles_index as style  # Importa estilos predefinidos
from Sakbyte.routes import Route  # Importa las rutas de la aplicación

# Decorador que define una página con su ruta, título, descripción y metadatos
@rx.page(
    route=Route.CHATBOT.value,  # Ruta asociada a la página
    title=utils.chatbot_title,  # Título de la página
    description=utils.chatbot_description,  # Descripción de la página
    meta=utils.chatbot_meta,  # Metadatos adicionales
    image=utils.chatbot_image,
)
def chatbot() -> rx.Component:
    # Retorna la estructura principal de la página
    return rx.box(
        navbar(),  # Componente de la barra de navegación en la parte superior
        # animation_bg(),  # Componente de animación de fondo (actualmente comentado)

        # Sección central con un encabezado
        rx.center(
            rx.vstack(
                header(details=False),  # Componente del encabezado sin detalles adicionales
                max_width=style.MAX_WIDTH,  # Define el ancho máximo del contenedor según los estilos
                margin_y=style.Size.MEDIUM.value,  # Margen vertical medio
                margin_x=style.Size.MEDIUM.value,  # Margen horizontal medio
                margin_bottom="74px",  # Margen inferior específico
            ),
            width="90%"  # Define el ancho del contenedor central
        ),
        
        # Sección central con el chat y la barra de acciones
        rx.center(
            rx.vstack(
                chat(),  # Componente principal del chat
                action_bar(),  # Barra de acciones asociada al chat
                chat_delete(), # Ventana emergente para borrar el historial
                align="center",  # Alineación centrada de los elementos
                max_width="800px",  # Limita el ancho total
            ),
        ),
        
        footer(),  # Componente del pie de página en la parte inferior
    )