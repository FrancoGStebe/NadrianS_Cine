const mongoose = require('mongoose');
const { Schema } = mongoose;


const movieSchema = new Schema({
    title: { type: String, required: true },
    year: { type: Number, min: 1888, max: new Date().getFullYear() + 1 },
    director: {type: String, required: true},
    duration: { type: String, required: true },
    genre: { type: [String], required: true },
    rate: { type: Number, required: true, min: 0, max: 10 },
    poster: { type: String, required: true }
});


movieSchema.index({ title: 1, year: 1 }, { unique: true, partialFilterExpression: { year: { $exists: true } } });


module.exports = mongoose.model('Movie', movieSchema);  