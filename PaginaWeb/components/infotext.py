import reflex as rx
from PaginaWeb.styles.colors import TextColor

def infotext(title:str, body:str)->rx.Component:
    return rx.box(
        rx.text.span(title, font_weight="bold", color=TextColor.NUMBERS.value),
        f" {body}", color=TextColor.HEADER.value,
    )