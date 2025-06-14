const mongoose = require('mongoose');

const salonSchema = new mongoose.Schema({
  name: String,
  location: String,
  services: [String],
  image: String,
});

module.exports = mongoose.model('Salon', salonSchema);
