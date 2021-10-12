require('dotenv').config({ path: './config.env' });
const seedUIUX = require('./projects.uiux');
const seedPrintDesign = require('./projects.printDesign');
const seedPresentationDesign = require('./projects.presentationDesign');
const seedDigitalArt = require('./projects.digitalArt');
const connectDB = require('../config/db.config');

const seed = async () => {
  await seedUIUX();
  console.log('--------- UIUX SEEDED ---------');

  await seedPrintDesign();
  console.log('--------- PRINT DESIGN SEEDED ---------');

  await seedPresentationDesign();
  console.log('--------- PRESENTATION DESIGN SEEDED ---------');

  await seedDigitalArt();
  console.log('--------- DIGITAL ART SEEDED ---------');

  process.exit(0);
};

connectDB();
seed();
