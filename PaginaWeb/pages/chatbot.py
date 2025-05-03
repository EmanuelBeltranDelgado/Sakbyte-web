import reflex as rx
from PaginaWeb.components.navbar import navbar
from PaginaWeb.components.footer import footer
from PaginaWeb.views.header import header
from PaginaWeb.views.chat import chat, action_bar
from PaginaWeb import utils
import PaginaWeb.styles.styles_index as style
from PaginaWeb.routes import Route


@rx.page(
    route=Route.CHATBOT.value,
    title=utils.chatbot_title,
    description=utils.chatbot_description,
    meta=utils.chatbot_meta,
)

def chatbot() -> rx.Component:
    
    return rx.box(
        navbar(), #Componente que representa el menu de navegacion
        
        rx.center(
            rx.vstack(
            header(details=False),
            max_width=style.MAX_WIDTH,
            margin_y=style.Size.MEDIUM.value,
            margin_x=style.Size.MEDIUM.value,
            margin_bottom="84px",
            ),
            width="87%"
        ),
        
        
        rx.center(
            rx.vstack(
                chat(),
                action_bar(),
                align="center",
            ),
        ),
        
        footer(), #Componente que representa en footer
    ),