const mongoose = require("mongoose");

const dbcon = async () => {
    await mongoose.connect(
        'mongodb+srv://stebefranco:0ukhoGbAgaZu55XN@movies.w8lth2h.mongodb.net/prueba'
    );
};

module.exports = dbcon;
