import reflex as rx
import SakuraBlossomDev.styles.styles_index as style

# Definimos una función llamada 'title' que toma un parámetro 'text' y devuelve un componente de tipo 'heading'.
def title(text) -> rx.Component:
    # Retorna un encabezado (heading) con el texto proporcionado, un tamaño de fuente "4",
    # un estilo definido en 'style.title_style' y un ancho del 100%.
    return rx.heading(
        text,
        size="4",
        style=style.title_style,
        width="100%",
    )