import reflex as rx
import PaginaWeb.styles.styles_index as style

# Define una función llamada `linkicon` que crea un componente de enlace con un ícono.
# Parámetros:
# - url: La URL a la que apunta el enlace.
# - image: La ruta de la imagen que se usará como ícono.
# - alt: Texto alternativo para la imagen (para accesibilidad).
# Retorna:
# - Un componente de enlace (`rx.link`) que contiene una imagen (`rx.image`).
def linkicon(url: str, image: str, alt: str) -> rx.Component:
    return rx.link(
        # Crea un componente de imagen con el ancho predeterminado definido en estilos y texto alternativo.
        rx.image(
            image,
            width=style.Size.DEFAULT.value,  # Usa el tamaño predeterminado definido en los estilos.
            alt=alt  # Texto alternativo para la imagen.
        ),
        href=url,  # URL del enlace.
        is_external=True  # Indica que el enlace es externo (se abre en una nueva pestaña).
    )