import reflex as rx

config = rx.Config(
    app_name="PaginaWeb",
    api_url="https://sakura-blossom-dev.up.railway.app:8000",
    cors_allowed_origins=[
        "http://localhost:3000/"
        "https://sakura-blossom-dev-web.vercel.app/"
    ],
)