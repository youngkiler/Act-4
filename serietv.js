var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var serietv = new Schema({
    titulo: String, 
    temporadas: Number,
    pais: String,
    genero: {
        type: String,
        enum: ['Comedia', 'Drama', 'Sci-Fi', 'Fantasia', 'Terror', 'Accion']
    }
});

module.exports = mongoose.model('SerieTV', serietv);
