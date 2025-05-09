import reflex as rx
from SakuraBlossomDev.styles.colors import TextColor

# Define una función llamada `infotext` que toma dos parámetros:
# `title` (un string que representa el título) y `body` (un string que representa el cuerpo del texto).
# La función devuelve un componente de Reflex.
def infotext(title: str, body: str) -> rx.Component:
    return rx.box(
        # Crea un texto en negrita con el título y un color definido por `TextColor.NUMBERS.value`.
        rx.text.span(title, font_weight="bold", color=TextColor.NUMBERS.value),
        # Agrega el cuerpo del texto con un color definido por `TextColor.HEADER.value`.
        f" {body}", color=TextColor.HEADER.value,
    )