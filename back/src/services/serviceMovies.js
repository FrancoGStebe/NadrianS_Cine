const Movie = require('../Models/movieModels');

async function getMovies() {
    try {
        const movies = await Movie.find({});
        return movies;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener las películas de la base de datos');
    }
}

async function createMovie(movieData) {
    try {
        console.log("estesmimmoviedata", movieData);
        const movie = new Movie(movieData);

        await movie.save();
        return movie;
    } catch (error) {
        console.error(error);
        throw new Error('Error al añadir la película a la base de datos');
    }

}


module.exports = { getMovies, createMovie };