import reflex as rx
from PaginaWeb.components.navbar import navbar
from PaginaWeb.components.footer import footer
from PaginaWeb.views.header.header import header
from PaginaWeb.views.links.links import links
import PaginaWeb.styles.styles as style

#class State(rx.State):
#    pass

#Componente que representa la parte grafica de la pagina web
def index() -> rx.Component:
    
    return rx.box(
        navbar(), #Componente que representa el menu de navegacion

        rx.center(
            rx.vstack(
            header(), #Componente que representa header
            links(), #Componente que representa links
            max_width=style.MAX_WIDTH, #Maxima area de pixeles donde se visualizaran mis componentes
            margin_y=style.Size.MEDIUM.value, #Crea el margen pero hacia adentro, (se puede espesificar la condenad o no)
            margin_x=style.Size.MEDIUM.value,

            ),

        ),
        footer(), #Componente que representa en footer
    ),
    

#Inicializacion de la aplicacion
app = rx.App(
    stylesheets=style.STYLESHEETS,
    style=style.BASE_STYLE,
)
#Va a mostar nuestra aplicacion grafica
app.add_page(
    index,
    title="Sakura Blossom Dev",
    description="Hello, my name is Emanuel. I'm an electronics and computer engineer.",
    image="sakura.ico",

)