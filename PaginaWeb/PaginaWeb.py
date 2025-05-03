import reflex as rx
import PaginaWeb.styles.styles_index as style
from PaginaWeb.pages import index
from PaginaWeb.pages import chatbot


#class State(rx.State):
#    pass

#Inicializacion de la aplicacion
app = rx.App(
    stylesheets=style.STYLESHEETS,
    style=style.BASE_STYLE,
    head_components=[
        rx.script(src=f"https://www.googletagmanager.com/gtag/js?id=G-G756F9B5L5"),
        rx.script(
            """
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-G756F9B5L5');
            """
        ),
    ],
)