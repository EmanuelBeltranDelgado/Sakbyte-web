import reflex as rx
import SakuraBlossomDev.styles.styles_index as style

#importamos las paginas para que no de errores
from SakuraBlossomDev.pages import index
from SakuraBlossomDev.pages import chatbot

#Inicializacion de la aplicacion
app = rx.App(
    #Aplicamos los estilos
    stylesheets=style.STYLESHEETS,
    style=style.BASE_STYLE,

    #script de google analytics
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