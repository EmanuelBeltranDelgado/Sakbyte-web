from enum import Enum

# Definimos una clase llamada Fonts que hereda de Enum
class Fonts(Enum):
    TITLE = "Poppins"  # Fuente para los títulos
    BODY = "Poppins"   # Fuente para el cuerpo del texto
    DEFAULT = "Arial"  # Fuente predeterminada
    HEADER = "Comfortaa"  # Fuente para los encabezados

# Esta clase se utiliza para el pesos de fuente (grosor de las letras).
class FontWeight(Enum):
    LIGHT = "300"  # Peso ligero
    MEDIUM = "400"  # Peso medio
    BIG = "500"  # Peso grande