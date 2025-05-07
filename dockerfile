FROM python:3.12.4

WORKDIR /app

# Instala dependencias del sistema (incluyendo unzip)
RUN apt-get update && \
    apt-get install -y --no-install-recommends unzip && \
    rm -rf /var/lib/apt/lists/*

# Copia primero requirements.txt para cachear la instalación
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto del código
COPY . .

EXPOSE 8000

# Ejecuta la app
CMD ["reflex", "run", "--env", "prod", "--backend-only", "--backend-host", "0.0.0.0"]
