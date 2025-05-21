import reflex as rx
from Sakbyte import StateChatBot

# Define una función que retorna un componente de diálogo para confirmar el borrado del chat
def chat_delete() -> rx.Component:
    return rx.dialog.root(
        # El trigger del diálogo está oculto (no visible en la interfaz)
        rx.dialog.trigger(rx.box(display="none")), 
        rx.dialog.content(
            # Título del diálogo de confirmación
            rx.dialog.title("Confirm delete"),
            # Descripción que pregunta al usuario si está seguro de borrar el historial
            rx.dialog.description("Are you sure you want to delete all chat history?"),
            # Contenedor horizontal para los botones de acción
            rx.hstack(
                # Botón para cancelar la acción y cerrar el diálogo
                rx.button(
                    "Cancel", 
                    on_click=StateChatBot.delete_confirmation_pop_up,
                    width="40%", 
                ),
                # Botón para confirmar el borrado del chat
                rx.button(
                    "Delete", 
                    on_click=StateChatBot.confirm_clear_chat,
                    width="40%", 
                ),
                spacing="9",           # Espaciado entre los botones
                margin_top="1em",      # Margen superior
            ),
            max_width="400px",         # Ancho máximo del diálogo
        ),
        open=StateChatBot.show_delete_confirmation,           # Controla si el diálogo está abierto
        on_open_change=StateChatBot.delete_confirmation_pop_up, # Maneja el cambio de estado del diálogo
    )