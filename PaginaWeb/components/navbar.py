import reflex as rx
import PaginaWeb.styles.styles_index as style
from PaginaWeb.styles.fonts import Fonts#, FontWeight
from PaginaWeb.styles.colors import TextColor, ColorSakura
from PaginaWeb.routes import Route

# Función que define el componente de la barra de navegación
def navbar() -> rx.Component:
    return rx.hstack(  # Crea un contenedor horizontal (hstack) para los elementos de la barra de navegación
        rx.link(  # Crea un enlace que redirige al hacer clic
            rx.text(  # Crea un texto dentro del enlace
                "Sakura Blossom Dev",  # Texto del título
                color=TextColor.HEADER.value,  # Color del texto del título
                size="7",  # Tamaño del texto del título
                weight="light",  # Peso del texto del título
                font_family=Fonts.HEADER.value,  # Fuente específica para el título
                # font_weight=FontWeight.MEDIUM.value,  # Comentado: peso de la fuente
            ),
            href=Route.INDEX.value,  # Ruta a la que redirige el enlace
        ),

        # Propiedades del contenedor de la barra de navegación
        position="sticky",  # Hace que la barra de navegación permanezca fija en la parte superior al hacer scroll
        z_index="999",  # Asegura que la barra de navegación esté por encima de otros elementos
        padding_x=style.Size.MEDIUM.value,  # Margen horizontal de la barra
        padding_y=style.Size.SMALL.value,  # Margen vertical de la barra
        bg=ColorSakura.CONTENT_NAVBAR.value,  # Color de fondo de la barra de navegación
        top="0",  # Posiciona la barra en la parte superior de la página
        width="100%"  # Hace que la barra ocupe el ancho completo de la página
    )