# chatapp.py
import reflex as rx
from PaginaWeb.styles import styles_chat
from PaginaWeb.StateChatBot import StateChatBot


def qa(question: str, answer: str) -> rx.Component:
    return rx.box(
        rx.box(
            rx.text(question, style=styles_chat.question_style),
            text_align="right",
        ),
        rx.box(
            rx.text(answer, style=styles_chat.answer_style),
            text_align="left",
        ),
        margin_y="1em",
        width="100%",
    )


def chat() -> rx.Component:
    return rx.box(
        rx.foreach(
            StateChatBot.chat_history,
            lambda messages: qa(messages[0], messages[1]),
        )
    )


def action_bar() -> rx.Component:
    return rx.hstack(
        rx.input(
            value=StateChatBot.question,
            placeholder="Ask a question",
            on_change=StateChatBot.set_question,
            style=styles_chat.input_style,
            size="3",
        ),
        rx.button(
            "Ask",
            on_click=StateChatBot.answer,
            width="20%",
            size="2",
        ),
        width="100%"
    )