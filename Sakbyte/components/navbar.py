import reflex as rx
import Sakbyte.styles.styles_index as style
from Sakbyte.styles.fonts import Fonts
from Sakbyte.styles.colors import TextColor, ColorSakura
from Sakbyte.routes import Route

# Función que define el componente de la barra de navegación
def navbar() -> rx.Component:
    return rx.hstack(  # Crea un contenedor horizontal (hstack) para los elementos de la barra de navegación
        rx.link(  # Crea un enlace que redirige al hacer clic
            rx.image(
                "/png/sakbyte_logo.png", 
                width="200px", 
                alt="Logo sakbyte",
                # Animación para hacer más visible la selección
                transition="transform 0.8s ease",
                _hover={"transform": "scale(1.04)"},
            ),
            href=Route.INDEX.value,  # Ruta a la que redirige el enlace
        ),

        # Propiedades del contenedor de la barra de navegación
        position="sticky",  # Hace que la barra de navegación permanezca fija en la parte superior al hacer scroll
        z_index="999",  # Asegura que la barra de navegación esté por encima de otros elementos
        padding_x=style.Size.MEDIUM.value,  # Margen horizontal de la barra
        bg="rgba(255, 242, 244, 0.4)",  # Color con transparencia
        backdrop_filter="blur(1px)",    # Efecto de desenfoque para mejor visibilidad
        top="0",  # Posiciona la barra en la parte superior de la página
        width="100%",  # Hace que la barra ocupe el ancho completo de la página
    )