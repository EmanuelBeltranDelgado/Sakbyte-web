import reflex as rx
from enum import Enum
from PaginaWeb.styles.fonts import Fonts, FontWeight
from .colors import ColorSakura, TextColor

#Constantes
MAX_WIDTH = "560px"

STYLESHEETS = [
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap",
    "https://fonts.googleapis.com/css2?family=Comfortaa:wght@400&display=swap",
]

#Tamaños
class Size(Enum):
    SMALL = "0.8em"
    MEDIUM = "1em"
    DEFAULT = "1.5em"
    BIG = "3em"

#Styles
BASE_STYLE = {
    "font_family":Fonts.BODY.value,
    "font_weight":FontWeight.MEDIUM.value,
    "background_color":ColorSakura.BACKGROUND.value,

    rx.button:{
        "width":"100%",
        "height":"100%",
        "padding":Size.SMALL.value,
        "border_radius":Size.MEDIUM.value,
        "color":TextColor.HEADER.value,
        "background_color":ColorSakura.PRIMARY.value,
        "white_space":"normal",
        "_hover":{"background_color":ColorSakura.SECONDARY.value,},
        
    },
    rx.link:{
        "text_decoration":"none", #quitar subrayado
        "_hover":{}, #que hacer cuando se pase el mouse
        
    }
}

title_style = dict(
    width = "100%",
    padding_top = Size.MEDIUM.value,
    color = TextColor.HEADER.value,
)

botton_title_style = dict(
    width="100%",
    font_size = Size.MEDIUM.value,
    color = TextColor.HEADER.value,
)

botton_body_style = dict(
    width="100%",
    font_size = Size.SMALL.value,
    color = TextColor.BODY.value,
)