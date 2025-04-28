import reflex as rx
import PaginaWeb.styles.styles as style

def title(text)->rx.Component:
    return rx.heading(
        text,
        size="4",
        style=style.title_style,
        width="100%",
    )