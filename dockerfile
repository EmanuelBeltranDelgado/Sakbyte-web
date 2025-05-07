FROM python:3.12.4

WORKDIR /app

# Copia primero requirements.txt para cachear la instalación
COPY requirements.txt .
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt && \
    pip install python-dotenv  # ¡Instala explícitamente dotenv!

# Copia el resto del código
COPY . .

# Ejecuta la app
CMD ["reflex", "run", "--env", "prod", "--backend-only"]