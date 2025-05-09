from enum import Enum

# Definimos una clase llamada Route que hereda de Enum
class Route(Enum):
    # Definimos dos rutas como miembros de la enumeración
    INDEX = "/"  # Ruta para la página principal
    CHATBOT = "/chatbot"  # Ruta para la página del chatbot