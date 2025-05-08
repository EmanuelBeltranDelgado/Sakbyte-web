# bootstrap.py
import subprocess
import os

def install_unzip():
    try:
        # Verifica si unzip ya está instalado
        subprocess.run(["unzip", "-v"], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        print("✅ 'unzip' ya está instalado.")
    except Exception as e:
        print("⚠️ 'unzip' no está instalado. Intentando instalarlo...")
        try:
            subprocess.run(["apt-get", "update"], check=True)
            subprocess.run(["apt-get", "install", "-y", "unzip", "curl"], check=True)
            print("✅ 'unzip' instalado correctamente.")
        except Exception as install_err:
            print("❌ No se pudo instalar 'unzip':", install_err)

if __name__ == "__main__":
    install_unzip()
    # Aquí va el comando real para correr tu app
    # Por ejemplo:
    subprocess.run([
        "reflex", "run", "--env", "prod", "--backend-only", "--backend-host", "0.0.0.0"
    ])
