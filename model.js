const Mongoose = require('mongoose');

const ConcertSchema = new Mongoose.Schema({
  date: { type: Date, required: true },  
  salle: { type: String, required: true },
  nomGroupe: { type: String, required: true },
  note: { type: Number, required: true },
});

const Concert = Mongoose.model('concerts', ConcertSchema);

module.exports = Concert;
