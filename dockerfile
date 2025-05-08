FROM python:3.12-slim

# Install `uv` for faster package bootstrapping
ADD --chmod=755 https://astral.sh/uv/install.sh /install.sh
RUN /install.sh && rm /install.sh


# Instalar unzip y otras dependencias necesarias
RUN apt-get update && apt-get install -y unzip curl

WORKDIR /app

# Copia primero requirements.txt para cachear la instalación
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto del código
COPY . .

EXPOSE 8000

# Ejecuta la app
#CMD ["uvicorn", "sakura_blossom_dev:app", "--host", "0.0.0.0", "--port", "8000"]

# Ejecuta la app
CMD ["reflex", "run", "--env", "prod", "--backend-only", "--backend-host", "0.0.0.0"]

