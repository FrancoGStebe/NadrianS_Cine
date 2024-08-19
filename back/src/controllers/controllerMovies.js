const { getMovies, createMovie } = require('../services/serviceMovies');

const controllMovie = async (req, res) => {
    try {
        const movies = await getMovies();
        res.status(200).json(movies);
    } catch (error) {
        console.error("Error al obtener las películas:", error);
        res.status(500).json({ error: "Error interno del servidor al obtener las películas" });
    }
};

const createMovieController = async (req, res) => {
    try {
        const movieData = req.body;
        const newMovie = await createMovie(movieData);
        res.status(201).json(newMovie);
    } catch (error) {
        console.error('Error al añadir la película:', error);
        res.status(500).json({ error: 'Error al añadir la película' });
    }
}

module.exports = {
    controllMovie, createMovie: createMovieController
};