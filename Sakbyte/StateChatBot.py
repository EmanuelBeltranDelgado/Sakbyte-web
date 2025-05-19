import reflex as rx
import os
from dotenv import load_dotenv
from openai import AsyncOpenAI

load_dotenv() # Carga las variables de entorno definidas en el archivo .env
API_KEY = os.getenv("API_KEY") # Obtiene el valor de la variable de entorno

# Clase hereda de State que es el Backend
class StateChatBot(rx.State):
    # Atributo para almacenar la pregunta del usuario
    question: str

    # Historial del chat, una lista de tuplas que contiene pares de (pregunta, respuesta)
    chat_history: list[tuple[str, str]]

    # Método asíncrono para obtener una respuesta del modelo de lenguaje
    async def answer(self):
        # Crear un cliente de OpenAI utilizando la clave API
        client = AsyncOpenAI(
            api_key=API_KEY
        )

        # Crear una sesión para generar una respuesta utilizando el modelo GPT
        session = await client.chat.completions.create(
            model="gpt-4o-mini",  # Modelo a utilizar
            messages=[
                {"role": "user", "content": self.question}  # Mensaje del usuario
            ],
            stop=None,  # No se especifica un token de parada
            temperature=0.7,  # Control de aleatoriedad en las respuestas
            stream=True,  # Habilitar el streaming de la respuesta
        )

        # Inicializar la respuesta como una cadena vacía
        answer = ""
        # Agregar la pregunta al historial del chat con una respuesta vacía inicialmente
        self.chat_history.append((self.question, answer))

        # Limpiar la pregunta actual
        self.question = ""

        # Generar un primer "yield" para actualizar el estado
        yield

        # Iterar sobre los fragmentos de la respuesta generada por el modelo
        async for item in session:
            # Verificar si el fragmento contiene contenido en el delta
            if hasattr(item.choices[0].delta, "content"):
                if item.choices[0].delta.content is None:
                    break  # Terminar si no hay más contenido
                
                # Agregar el contenido al texto de la respuesta
                answer += item.choices[0].delta.content
                # Actualizar el historial del chat con la respuesta parcial
                self.chat_history[-1] = (
                    self.chat_history[-1][0],
                    answer,
                )
                # Generar un "yield" para actualizar el estado con la respuesta parcial
                yield