const User = require('../../models/User');
const { DigitalArt, PresentationDesign } = require('../../models/Project');

exports.getUser = async (req, res, next) => {
  try {
    const ali = await User.find({});

    res.status(200).json(ali);
  } catch (err) {
    next(err);
  }
};

exports.getDigitalArtProjects = async (req, res, next) => {
  try {
    const projects = await DigitalArt.find({});

    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
};

exports.getPresentationDesignProjects = async (req, res, next) => {
  try {
    const projects = await PresentationDesign.find({});

    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
};
