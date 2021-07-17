const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  type: {
    type: String,
  },
  title: {
    type: String,
  },
  date: {
    type: Date,
  },
  description: {
    type: String,
  },
  thumbnail: {
    type: String,
    default:
      'https://dummyimage.com/287.98X479.22/222222/fff&text=photo+unavailable',
  },
  images: {
    type: Array,
  },
  footer: {
    type: String,
  },
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
