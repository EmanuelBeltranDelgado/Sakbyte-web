from enum import Enum

class ColorSakura(Enum):
    #ffb7c5 Cherry blossom pink
    PRIMARY = "#ffb7c5"
    SECONDARY = "#ff849c"
    BACKGROUND = "#ffffff"
    CONTENT_NAVBAR = "#fff2f4"
    #Colores opcionales "#ffeaee", "#ded8d9"

class TextColor(Enum):
    HEADER = "#000000"
    BODY = "#0c0c0c"
    FOOTER = "#000000"
    NUMBERS = "#CF3897"

class ColorDark(Enum):
    PRIMARY = "#14A1F0"
    SECONDARY = "#087ec4"
    BACKGROUND = "#0C151D"
    CONTENT_NAVBAR = "#171F26"

class TextColorDark(Enum):
    HEADER = "#F1F2F4"
    BODY = "#C3C7CB"
    FOOTER = "#A3ABB2"
    NUMBERS = "#0588F0"