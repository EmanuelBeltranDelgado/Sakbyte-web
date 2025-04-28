import reflex as rx
from PaginaWeb import constants
from PaginaWeb.components.linkbutton import linkbutton
from PaginaWeb.components.title import title

def links()->rx.Component:
    return rx.vstack(
        title("My networks"),
        linkbutton(
            "GITHUB", 
            "Overview", 
            constants.GITHUB_URL,
            "github.svg"
        ),

        linkbutton(
            "Linkedin", 
            "LinkedIn profile", 
            constants.LINKEDIN_URL,
            "linkedin.svg"
        ),
        title("Projects"),
        linkbutton(
            "Facebook", 
            "Pagina de facebook", 
            constants.FACEBOOK_URL,
            "facebook.svg"
        ),

        linkbutton(
            "Color cherry blossom", 
            "Pagina de colores", 
            constants.SAKURA_COLOR_URL,
            "colorhexa.svg",
        ),
        width="100%",
    )