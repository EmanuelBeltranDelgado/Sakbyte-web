import reflex as rx

# Estilo común para las preguntas y respuestas en el chat.
shadow = "rgba(0, 0, 0, 0.15) 0px 2px 8px"  # Sombra para los elementos.
chat_margin = "20%"  # Margen para alinear los mensajes.

message_style = dict(
    padding="1em",  # Espaciado interno del mensaje.
    border_radius="5px",  # Bordes redondeados.
    margin_y="0.5em",  # Margen vertical entre mensajes.
    box_shadow=shadow,  # Sombra aplicada al mensaje.
    max_width="30em",  # Ancho máximo del mensaje.
    display="inline-block",  # Mostrar los mensajes en bloque en línea.
)

# Estilo específico para las preguntas (mensajes del usuario).
question_style = message_style | dict(
    margin_left=chat_margin,  # Margen izquierdo para alinear preguntas.
    background_color=rx.color("gray", 2),  # Color de fondo para preguntas.
)

# Estilo específico para las respuestas (mensajes del sistema).
answer_style = message_style | dict(
    margin_right=chat_margin,  # Margen derecho para alinear respuestas.
    background_color="#E8A9B7",  # Color de fondo para respuestas.
)

# Estilo para la barra de acciones (entrada de texto y botón).
input_style = dict(
    border_width="1px",  # Ancho del borde del campo de entrada.
    padding="0.5em",  # Espaciado interno del campo de entrada.
    box_shadow=shadow,  # Sombra aplicada al campo de entrada.
    width="350px",  # Ancho del campo de entrada.
)

# Estilo para el botón de enviar.
button_style = dict(
    background_color=rx.color("accent", 10),  # Color de fondo del botón.
    box_shadow=shadow,  # Sombra aplicada al botón.
)
