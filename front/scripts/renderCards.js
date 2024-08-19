function renderCard(data) {
    const container = document.getElementById("contenedor-tarjetas");

    if (!container) {
        console.error("El contenedor 'contenedor-tarjetas' no se encontró en el DOM.");
        return;
    }

    container.innerHTML = ""; 

    data.forEach(movie => {
        
        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h3");
        title.textContent = movie.title;
        card.appendChild(title);

        const year = document.createElement("p");
        year.textContent = `Año: ${movie.year}`;
        card.appendChild(year);

        const director = document.createElement("p");
        director.textContent = `Director: ${movie.director}`;
        card.appendChild(director);

        const rate = document.createElement("p");
        rate.textContent = `Rate: ${movie.rate}`;
        card.appendChild(rate);

        const poster = document.createElement("img");
        poster.src = movie.poster;
        poster.alt = `${movie.title} poster`;
        card.appendChild(poster);

        container.appendChild(card);
    });
}

module.exports = renderCard;