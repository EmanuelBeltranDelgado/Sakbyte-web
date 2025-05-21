import reflex as rx
from Sakbyte.styles import styles_chat
from Sakbyte.StateChatBot import StateChatBot

# Función que genera un componente de pregunta y respuesta (QA)
# Recibe una pregunta y una respuesta como parámetros y los organiza en un diseño visual.
def qa(question: str, answer: str) -> rx.Component:
    return rx.box(
        # Caja para la pregunta, alineada a la derecha
        rx.box(
            rx.text(question, style=styles_chat.question_style),
            text_align="right",
        ),
        # Caja para la respuesta, alineada a la izquierda
        rx.box(
            rx.text(answer, style=styles_chat.answer_style),
            text_align="left",
        ),
        margin_y="1em",  # Margen vertical entre preguntas y respuestas
        width="100%",    # Ancho completo del contenedor
    )

# Función que genera el componente principal del chat
# Muestra el historial de chat recorriendo cada mensaje (pregunta y respuesta).
def chat() -> rx.Component:
    return rx.box(
        # Itera sobre el historial de chat y genera componentes QA para cada mensaje
        rx.foreach(
            StateChatBot.chat_history,
            lambda messages: qa(messages[0], messages[1]),
        )
    )

# Función que genera la barra de acción para interactuar con el chatbot
# Incluye un campo de entrada para la pregunta y un botón para enviar.
def action_bar() -> rx.Component:
    return rx.hstack(
        # Campo de entrada para escribir la pregunta
        rx.text_area(
            value=StateChatBot.question,  # Valor actual de la pregunta
            placeholder="Ask a question",  # Texto de marcador de posición
            on_change=StateChatBot.set_question,  # Evento para actualizar la pregunta
            style=styles_chat.input_style,  # Estilo del campo de entrada
            size="3",  # Tamaño del campo

        ),
        rx.vstack(
            # Botón para borrar el historial de mensajes
             rx.button(
                "Clear Chat", # Texto del botón
                on_click=StateChatBot.delete_confirmation_pop_up, # Evento para procesar la respuesta
                width="100%",  # Ancho del botón
                size="1", # Tamaño del botón
            ),
            # Botón para enviar la pregunta
            rx.button(
                "Ask",  # Texto del botón
                on_click=StateChatBot.answer,  # Evento para procesar la respuesta
                width="100%",  # Ancho del botón
                size="2",  # Tamaño del botón

            ),
            spacing="2", # Espacio entre los botones
        ),
        width="100%",  # Ancho total de la barra de acción
    )