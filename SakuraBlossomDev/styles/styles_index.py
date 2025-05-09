import reflex as rx
from enum import Enum
from SakuraBlossomDev.styles.fonts import Fonts, FontWeight
from .colors import ColorSakura, TextColor

# Constantes
MAX_WIDTH = "560px"  # Ancho máximo para los elementos de la página

# Lista de hojas de estilo externas para importar fuentes
STYLESHEETS = [
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap",
    "https://fonts.googleapis.com/css2?family=Comfortaa:wght@400&display=swap",
]

# Tamaños de fuente definidos como una enumeración
class Size(Enum):
    SMALL = "0.8em"  # Tamaño pequeño
    MEDIUM = "1em"   # Tamaño mediano
    DEFAULT = "1.5em"  # Tamaño por defecto
    BIG = "3em"      # Tamaño grande

# Estilos base para la página
BASE_STYLE = {
    "font_family": Fonts.BODY.value,  # Fuente principal de la página
    "font_weight": FontWeight.MEDIUM.value,  # Peso de la fuente
    "background_color": ColorSakura.BACKGROUND.value,  # Color de fondo de la página

    # Estilos para los botones
    rx.button: {
        "width": "100%",  # Ancho completo
        "height": "100%",  # Alto completo
        "padding": Size.SMALL.value,  # Espaciado interno
        "border_radius": Size.MEDIUM.value,  # Bordes redondeados
        "color": TextColor.HEADER.value,  # Color del texto
        "background_color": ColorSakura.PRIMARY.value,  # Color de fondo del botón
        "white_space": "normal",  # Ajuste de texto
        "_hover": {"background_color": ColorSakura.SECONDARY.value,},  # Estilo al pasar el mouse
    },

    # Estilos para los enlaces
    rx.link: {
        "text_decoration": "none",  # Quitar subrayado
        "_hover": {},  # Estilo al pasar el mouse (vacío por ahora)
    }
}

# Estilo para el título principal
title_style = dict(
    width="100%",  # Ancho completo
    padding_top=Size.MEDIUM.value,  # Espaciado superior
    color=TextColor.HEADER.value,  # Color del texto
)

# Estilo para el título de los botones
botton_title_style = dict(
    width="100%",  # Ancho completo
    font_size=Size.MEDIUM.value,  # Tamaño de fuente mediano
    color=TextColor.HEADER.value,  # Color del texto
)

# Estilo para el cuerpo de los botones
botton_body_style = dict(
    width="100%",  # Ancho completo
    font_size=Size.SMALL.value,  # Tamaño de fuente pequeño
    color=TextColor.BODY.value,  # Color del texto
)