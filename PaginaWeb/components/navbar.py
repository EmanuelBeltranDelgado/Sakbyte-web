import reflex as rx
import PaginaWeb.styles.styles_index as style
from PaginaWeb.styles.fonts import Fonts#, FontWeight
from PaginaWeb.styles.colors import TextColor, ColorSakura
from PaginaWeb.routes import Route

def navbar() -> rx.Component:
    return rx.hstack( 
        rx.link(
            rx.text(
            "Sakura Blossom Dev", #Texto del titulo
            color=TextColor.HEADER.value, #Color del titulo
            size="7", #Tamaño del titulo
            weight="light", #Peso del titulo
            font_family=Fonts.HEADER.value, #Fuente especifica
            #font_weight=FontWeight.MEDIUM.value,
        
            ),
            href=Route.INDEX.value,
        ),

        position="sticky", #Para que el menu de navegacion se quede fijo en la parte superior de la pagina
        z_index="999", #Para que el menu de navegacion este por encima de los demas elementos de la pagina
        padding_x=style.Size.MEDIUM.value, #Margen horizontal
        padding_y=style.Size.SMALL.value, #Margen vertical
        bg=ColorSakura.CONTENT_NAVBAR.value, #Color del fondo del menu de navegacion
        top="0", #Para que el menu de navegacion este en la parte superior de la pagina
        width="100%"
    )