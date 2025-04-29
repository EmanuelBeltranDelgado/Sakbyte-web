import reflex as rx
from PaginaWeb.constants import GITHUB_URL, LINKEDIN_URL
from PaginaWeb.components.linkicon import linkicon
from PaginaWeb.components.infotext import infotext
from PaginaWeb.styles.colors import TextColor

def header()->rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(fallback="EB", size="7", color_scheme="pink"),
                rx.vstack(
                    rx.text("Emanuel Beltran", size="4", trim="end", color=TextColor.HEADER.value),
                    rx.text("@emanuel", trim="start", color=TextColor.BODY.value),
                    rx.hstack(
                        linkicon(GITHUB_URL, "github.svg", "Github"),
                        linkicon(LINKEDIN_URL, "linkedin.svg", "Linkedin"),
                    ),
                ),
                spacing="4"
                
        ),

        rx.flex(
            infotext("+4", "projects carried out"),
            rx.spacer(),
            infotext("+2", "Years programming in Python"),
            rx.spacer(),
            infotext("", "CCNA"),
            width="100%"
        ),

        rx.text("""Highly motivated Software Developer with a recent degree 
                and hands-on experience in Python, C, and C++. 
                I possess a strong foundation in software development principles 
                and a proven ability to solve complex problems. 
                Eager to contribute to challenging projects 
                and accelerate my professional growth within a dynamic IT environment.""", 
                text_align="justify", color=TextColor.HEADER.value),

        spacing="8",
        width="100%",
    )