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
            "linkedin.svg",
        ),

        title("Contact"),
        linkbutton(
            "Email",
            "Contact me by email",
            constants.EMAIL,
            "email.svg",
        ),
        linkbutton(
            "WhatsApp",
            "Contact me on WhatsApp",
            constants.WHATSAPP,
            "whatsApp.svg",
        ),

        title("Projects"),
        linkbutton(
            "News", 
            "Mobile news app", 
            constants.NEWS,
            "github.svg",
        ),
        linkbutton(
            "Web page", 
            "Contact web page", 
            constants.PAGE_WEB,
            "github.svg",
        ),
        width="100%",
    )