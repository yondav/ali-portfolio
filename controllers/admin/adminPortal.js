const User = require('../../models/User');
const {
  DigitalArt,
  PresentationDesign,
  PrintDesign,
  UIUX,
} = require('../../models/Project');
const ErrorResponse = require('../../utils/errorResponse');

// for info page
exports.editUser = async (req, res, next) => {
  try {
    const {
      username,
      email,
      headshot,
      bio,
      location,
      education,
      interests,
      tech,
    } = req.body;

    const query = { username: 'ali' };
    const ali = await User.findOneAndUpdate(query, {
      username,
      email,
      headshot,
      bio,
      location,
      education,
      interests,
      tech,
    });

    if (!ali) {
      return next(new ErrorResponse('Invalid User', 400));
    }

    res.status(201).json(ali);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// for digital design page
exports.createDigitalArtProject = async (req, res, next) => {
  const { title, client, year, description, tech, thumbnail, gallery } =
    req.body;

  try {
    const project = await DigitalArt.create({
      title,
      client,
      year,
      description,
      tech,
      thumbnail,
      gallery,
    });

    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
};

exports.editDigitalArtProject = async (req, res, next) => {
  const id = { _id: req.params.id };
  const { title, client, year, description, tech, thumbnail, gallery } =
    req.body;

  try {
    const project = await DigitalArt.findOneAndUpdate(id, {
      title,
      client,
      year,
      description,
      tech,
      thumbnail,
      gallery,
    });

    if (!project) {
      return next(
        new ErrorResponse(
          `Invalid: We don't have a project with the id: ${req.params.id} in the database`,
          400
        )
      );
    }

    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
};

exports.deleteDigitalArtProject = async (req, res, nex) => {
  const id = { _id: req.params.id };

  try {
    const project = await DigitalArt.findOneAndDelete(id);

    if (!project) {
      return next(
        new ErrorResponse(
          `Invalid: We don't have a project with the id: ${req.params.id} in the database`,
          400
        )
      );
    }

    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
};
