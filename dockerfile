FROM python:3.12.4

# Instalar unzip y otras dependencias necesarias
RUN apt-get update && apt-get install -y unzip curl

WORKDIR /app

# Copia primero requirements.txt para cachear la instalación
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto del código
COPY . .

# Prepara el frontend durante el build (ya no lo intentará hacer luego)
RUN reflex init
RUN reflex export

EXPOSE 8000

# Ejecuta la app
CMD ["reflex", "run", "--env", "prod", "--backend-only", "--backend-host", "0.0.0.0"]
