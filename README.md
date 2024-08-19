# Nadrian'S Cine

## Descripción

Este proyecto es una plataforma web dedicada al cine que emplea tecnologías avanzadas para brindar una experiencia interactiva y dinámica. La plataforma se divide en cuatro secciones principales:

- **Inicio:** Muestra las películas extraídas de la base de datos.
- **Evolución del Cine:** Información sobre el desarrollo y la historia del cine.
- **Actualidades:** Últimas novedades y noticias del ámbito cinematográfico.
- **Agregar Películas:** Permite a los usuarios ingresar nuevas películas en la base de datos, que luego se visualizan en la sección de películas.

## Tecnologías Utilizadas

- HTML
- CSS
- Bootstrap
- JavaScript
- Express
- Node.js
- AJAX
- MongoDB

## Características

- **Sección de Películas**
  - Presenta una lista de películas obtenidas de la base de datos MongoDB.
  - Cada película incluye detalles importantes como el título, el director, el año de estreno, etc.

- **Sección de Evolución del Cine**
  - Proporciona un resumen de la evolución cinematográfica.
  - Incluye datos sobre los eventos clave y el progreso de la industria del cine.

- **Sección de Actualidades**
  - Muestra las últimas noticias y actualizaciones del cine.
  - Las noticias se actualizan en tiempo real.

- **Sección de Agregar Películas**
  - Permite a los usuarios completar un formulario para añadir nuevas películas.
  - Los datos del formulario se envían a la base de datos MongoDB.
  - Las películas añadidas se muestran automáticamente en la sección de películas.

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio:**

    ```bash
    git clone [https://github.com/TuUsuario/NadrianS_Cine.git
    ```

2. **Navegar al directorio del proyecto:**

    ```bash
    cd NadrianS_Cine
    ```

3. **Instalar las dependencias:**

    ```bash
    npm install
    ```

4. **Configurar la base de datos:**
   - Asegúrate de que MongoDB esté instalado y en funcionamiento.
   - Crea un archivo `.env` en la raíz del proyecto con la conexión a tu base de datos MongoDB:

     ```env
     MONGODB_URI=mongodb://localhost:27017/nombre-de-tu-bd
     ```

5. **Iniciar el servidor:**

    ```bash
    npm start
    ```

6. **Abrir el proyecto en tu navegador:**
   - Visita `http://localhost:3000` para ver la aplicación en acción.
