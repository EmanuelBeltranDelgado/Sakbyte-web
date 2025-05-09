import reflex as rx
from PaginaWeb.constants import SAKURA_COLOR_URL
from PaginaWeb.styles.colors import TextColor, ColorSakura
import datetime

# Definición de la función footer que retorna un componente de tipo rx.Component
def footer() -> rx.Component:
    return rx.vstack(
        # Imagen de un ícono de flor de cerezo con tamaño y texto alternativo
        rx.image(src="/ico/sakura.ico", width="40px", alt="Cherry blossom"),
        
        # Texto que muestra un rango de años desde 2024 hasta el año actual
        rx.text(f"2024-{datetime.date.today().year} Sakura Blossom V4"),
        
        # Enlace externo con texto, URL, y estilo personalizado
        rx.link(
            "The best season to bloom",  # Texto del enlace
            href=SAKURA_COLOR_URL,       # URL del enlace
            is_external=True,           # Indica que el enlace es externo
            trim="start",               # Ajuste del texto del enlace
            color=ColorSakura.SECONDARY.value,  # Color del enlace
        ),
        
        # Alineación del contenido al centro y márgenes superior e inferior
        align="center",  
        margin_top="84px",
        margin_bottom="24px",  
        
        # Color del texto del pie de página
        color=TextColor.FOOTER.value,
        
        # Ancho del componente al 100% del contenedor
        width="100%"
    )