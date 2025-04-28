import reflex as rx
import PaginaWeb.styles.styles as style

def linkicon(url:str, image:str, alt:str)->rx.Component:
    return rx.link(
        rx.image(
            image,
            width=style.Size.DEFAULT.value,
            alt=alt
        ),
        href=url,
        is_external=True
    )