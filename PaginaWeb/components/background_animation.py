import reflex as rx

# Definimos una función que retorna un componente de video como fondo animado.
def animation_bg() -> rx.Component:
    return rx.video(
        # Ruta del video que se usará como fondo animado.
        url="/videos/animation_sakura_blossom.mp4",
        # Posición fija para que el video permanezca en el fondo mientras se navega.
        position="fixed",

        # Dimensiones del video (ancho y alto en píxeles).
        # width="100vw",  # Comentado: Ancho del video en porcentaje del ancho de la ventana.
        # height="100vh", # Comentado: Alto del video en porcentaje del alto de la ventana.
        width="1920px",  # Ancho del video en píxeles.
        height="1080px",  # Alto del video en píxeles.
        
        # Ajuste del contenido del video para llenar el área especificada.
        object_fit="fill",
        # Índice Z negativo para que el video quede detrás de otros elementos.
        z_index="-1",
        # Configuración para que el video se reproduzca automáticamente.
        playing=True,
        # Configuración para que el video se reproduzca en bucle.
        loop=True,
        # Configuración para que el video esté silenciado.
        muted=True,
        # Oculta la barra de controles del reproductor de video.
        controls=False,
        # Permite que el video se reproduzca en línea en dispositivos móviles (sin forzar pantalla completa).
        plays_inline=True,
    )
