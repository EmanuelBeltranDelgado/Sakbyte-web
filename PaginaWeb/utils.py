import reflex as rx

_meta=[
    {"name":"og:type", "content": "website"},
]

index_title="Sakura Blossom Dev"
index_description="Hello, my name is Emanuel. I'm an electronics and computer engineer."

index_meta=[
    {"name":"og:title", "content": index_title},
    {"name":"og:description", "content": index_description},
]
index_meta.extend(_meta)


chatbot_title="Sakura Blossom Dev chat bot"
chatbot_description="Platica con el chat bot de sakura blossom dev."

chatbot_meta=[
    {"name":"og:title", "content": chatbot_title},
    {"name":"og:description", "content": chatbot_description},
]
chatbot_meta.extend(_meta)