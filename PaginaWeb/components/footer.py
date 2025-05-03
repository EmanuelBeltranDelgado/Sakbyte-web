# Importamos el módulo Reflex como rx
import reflex as rx
from PaginaWeb.constants import SAKURA_COLOR_URL
from PaginaWeb.styles.colors import TextColor, ColorSakura

# Importamos el módulo datetime para trabajar con fechas
import datetime

# Definimos una función llamada footer que devuelve un componente de Reflex
def footer() -> rx.Component:
    return rx.vstack(  # Creamos un contenedor vertical (vstack)
        rx.image(src="/sakura.ico", width="40px", alt="Cherry blossom"),  # Agregamos una imagen con un ancho de 40px
        rx.text(f"2024-{datetime.date.today().year} Sakura Blossom V4"),  # Mostramos un texto con un rango de años dinámico
        rx.link(  # Agregamos un enlace
            "The best season to bloom",  # Texto del enlace
            href=SAKURA_COLOR_URL,  # URL a la que apunta el enlace
            is_external=True,  # Indicamos que el enlace es externo
            trim="start",  # Propiedad adicional para el enlace
            color=ColorSakura.SECONDARY.value,
            
        ),
        align="center",  # Alineamos el contenido al centro
        margin_top="84px",
        margin_bottom="24px",  # Establecemos un margen inferior de 24px
        color=TextColor.FOOTER.value,
        width="100%"
    )