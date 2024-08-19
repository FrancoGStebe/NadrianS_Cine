const { Router } = require("express")
const {controllMovie, createMovie} = require("../controllers/controllerMovies")

const ruta = Router();

ruta.get("/movies", controllMovie);
ruta.post("/movies", createMovie);

module.exports = ruta;