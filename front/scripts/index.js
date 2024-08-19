// index.js
const renderCard = require("./renderCards"); 

const axios = require("axios");

$(document).ready(async () => {
    try {
        const { data } = await axios.get("http://localhost:3000/movies");
        renderCard(data);
    } catch (error) {
        alert("Algo salió mal al obtener las películas");
        console.error("Error al obtener las películas:", error);
    }

    const form = document.querySelector(".movieForm");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const response = await axios.post("http://localhost:3000/movies", data);
            console.log(response);
            
        
            form.reset();
        } catch (error) {
            console.error("Error:", error);
        }
    });
});