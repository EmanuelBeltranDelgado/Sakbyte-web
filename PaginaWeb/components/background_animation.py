import reflex as rx

def animation_bg() -> rx.Component:
    return rx.video(
        url="/videos/animation_sakura_blossom.mp4",
        position="fixed",
        #width="100vw",
        #height="100vh",
        width=" 1920px",
        height="1080px",
        object_fit="fill",
        z_index="-1",
        playing=True,
        loop=True,
        muted=True,
        controls=False,  # Oculta la barra de controles
        plays_inline=True,  # Para móviles (no pantalla completa obligatoria)

    )
