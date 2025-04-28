import reflex as rx
import PaginaWeb.styles.styles as style

# Define a function to create a link button component
def linkbutton(title: str, body: str, url: str, image:str) -> rx.Component:
    # Return a link component
    return rx.link(
        # Inside the link, create a button component
        rx.button(
            # Inside the button, create a horizontal stack (hstack) to arrange elements horizontally
            rx.hstack(
                # Add an icon to the left side of the button
                rx.image(
                    image, 
                    width = style.Size.BIG.value,
                    height = style.Size.BIG.value,
                    alt=title
                    ),

                # Add a vertical stack (vstack) to arrange the title and body text vertically
                rx.vstack(
                    # Add the title text with a specific style
                    rx.text(title, style=style.botton_title_style),
                    # Add the body text with a specific style
                    rx.text(body, style=style.botton_body_style ),
                    align="center",  # Center-align the text vertically
                ),
                align="center",  # Center-align the icon and text horizontally
                
            ),

        ),
        href=url,  # Set the URL for the link
        is_external=True,  # Open the link in a new tab or window
        width="100%",
    )