import reflex as rx
import Sakbyte.styles.styles_index as style

# Definimos una función llamada `linkbutton` que genera un componente de botón con un enlace.
# Parámetros:
# - title: Título del botón.
# - body: Descripción o texto adicional del botón.
# - url: Enlace al que redirige el botón.
# - image: Ruta de la imagen que se mostrará en el botón.
# - is_external: Indica si el enlace es externo (por defecto es True).
def linkbutton(title: str, body: str, url: str, image: str, is_external=True) -> rx.Component:
    # Retornamos un componente de enlace (`rx.link`) que contiene un botón.
    return rx.link(
        # El botón (`rx.button`) contiene una estructura horizontal (`rx.hstack`).
        rx.button(
            # `rx.hstack` organiza los elementos de forma horizontal.
            rx.hstack(
                # Agregamos una imagen al botón.
                rx.image(
                    image, 
                    width=style.Size.BIG.value,  # Ancho de la imagen definido en estilos.
                    height=style.Size.BIG.value, # Alto de la imagen definido en estilos.
                    alt=title  # Texto alternativo para la imagen.
                ),
                # Agregamos un contenedor vertical (`rx.vstack`) para el texto.
                rx.vstack(
                    # Texto del título del botón con estilo personalizado.
                    rx.text(title, style=style.botton_title_style),
                    # Texto del cuerpo del botón con estilo personalizado.
                    rx.text(body, style=style.botton_body_style),
                    align="center",  # Alineación centrada del texto.
                ),
                align="center",  # Alineación centrada de los elementos horizontales.
                
            ),

        ),
        href=url,  # Enlace al que redirige el botón.
        is_external=is_external,  # Indica si el enlace es externo.
        width="100%",  # Ancho del enlace.
    )