import reflex as rx
from PaginaWeb.components.navbar import navbar
from PaginaWeb.components.footer import footer
from PaginaWeb.views.header import header
from PaginaWeb.views.index_links import index_links
from PaginaWeb import utils
from PaginaWeb.routes import Route
import PaginaWeb.styles.styles_index as style


@rx.page(
    route=Route.INDEX.value,
    title=utils.index_title,
    description=utils.index_description,
    meta=utils.index_meta,
)

def index() -> rx.Component:
    
    return rx.box(
        navbar(), #Componente que representa el menu de navegacion

        rx.center(
            rx.vstack(
            header(), #Componente que representa header
            index_links(), #Componente que representa links
            max_width=style.MAX_WIDTH, #Maxima area de pixeles donde se visualizaran mis componentes
            margin_y=style.Size.MEDIUM.value, #Crea el margen pero hacia adentro, (se puede espesificar la condenad o no)
            margin_x=style.Size.MEDIUM.value,

            ),

        ),
        footer(), #Componente que representa en footer
    ),