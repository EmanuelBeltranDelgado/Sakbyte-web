import reflex as rx
from PaginaWeb import constants
from PaginaWeb.components.linkbutton import linkbutton
from PaginaWeb.components.title import title
from PaginaWeb.routes import Route

def index_links()->rx.Component:
    return rx.vstack(
        title("My networks"),
        linkbutton(
            "GITHUB", 
            "Overview", 
            constants.GITHUB_URL,
            "/github.svg"
        ),
        linkbutton(
            "Linkedin", 
            "LinkedIn profile", 
            constants.LINKEDIN_URL,
            "/linkedin.svg",
        ),

        title("Contact"),
        linkbutton(
            "Email",
            "Contact me by email",
            constants.EMAIL,
            "/email.svg",
        ),
        linkbutton(
            "WhatsApp",
            "Contact me on WhatsApp",
            constants.WHATSAPP,
            "/whatsapp.svg",
        ),

        title("Projects"),
        linkbutton(
            "News", 
            "Mobile news app", 
            constants.NEWS,
            "/github.svg",
        ),
        linkbutton(
            "Web page", 
            "Contact web page", 
            constants.PAGE_WEB,
            "/github.svg",
        ),

        title("Others"),
        linkbutton(
            "Chat bot",
            "Chat with AI and have fun",
            Route.CHATBOT.value,
            "/chat_bot.svg",
            is_external=False
        ),
        width="100%",
    )