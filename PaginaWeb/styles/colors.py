from enum import Enum
"""
Enum permite crear conjuntos de constantes con nombres. Es útil para:

Organizar valores fijos (como rutas, estados, opciones) de forma legible y mantenible.
Evitar "magic strings" (cadenas de texto literales dispersas en el código que pueden generar errores).
Garantizar consistencia: Los valores definidos en un Enum no pueden modificarse accidentalmente.
"""

# Definimos una clase llamada ColorSakura que hereda de Enum
# Esta clase contiene colores específicos para un tema de diseño llamado "Sakura"
class ColorSakura(Enum):
    # Color principal del tema (rosa cereza)
    PRIMARY = "#ffb7c5"
    # Color secundario del tema
    SECONDARY = "#ff849c"
    # Color de fondo
    BACKGROUND = "#ffffff"
    # Color del contenido de la barra de navegación
    CONTENT_NAVBAR = "#fff2f4"
    # Colores opcionales que podrían usarse en el diseño: "#ffeaee", "#ded8d9"

# Definimos una clase para los colores del texto en el tema claro
class TextColor(Enum):
    # Color del texto en encabezados
    HEADER = "#000000"
    # Color del texto en el cuerpo
    BODY = "#0c0c0c"
    # Color del texto en el pie de página
    FOOTER = "#000000"
    # Color del texto para números destacados
    NUMBERS = "#CF3897"

# Esta clase contiene colores específicos para un tema oscuro
class ColorDark(Enum):
    # Color principal del tema oscuro
    PRIMARY = "#14A1F0"
    # Color secundario del tema oscuro
    SECONDARY = "#087ec4"
    # Color de fondo del tema oscuro
    BACKGROUND = "#0C151D"
    # Color del contenido de la barra de navegación en el tema oscuro
    CONTENT_NAVBAR = "#171F26"

# Definimos una clase para los colores del texto en el tema oscuro
class TextColorDark(Enum):
    # Color del texto en encabezados en el tema oscuro
    HEADER = "#F1F2F4"
    # Color del texto en el cuerpo en el tema oscuro
    BODY = "#C3C7CB"
    # Color del texto en el pie de página en el tema oscuro
    FOOTER = "#A3ABB2"
    # Color del texto para números destacados en el tema oscuro
    NUMBERS = "#0588F0"