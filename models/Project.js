const mongoose = require('mongoose');

const Project = new mongoose.Schema({
  title: String,
  client: Array,
  year: String,
  description: String,
  tech: Array,
  thumbnail: String,
  gallery: Array,
});

const DigitalArt = mongoose.model('DigitalArt', Project);
const PresentationDesign = mongoose.model('PresentationDesign', Project);
const PrintDesign = mongoose.model('PrintDesign', Project);
const UIUX = mongoose.model('UIUX', Project);

module.exports = { DigitalArt, PresentationDesign, PrintDesign, UIUX };
