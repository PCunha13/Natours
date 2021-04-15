const mongoose = require('mongoose'); //interect with database

//propriedades dos campos
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A tour must have a name'], //menssagem de erro se n existir
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour mus have a price'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
