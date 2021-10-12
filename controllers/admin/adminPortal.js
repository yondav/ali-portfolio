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
    const query = { username: 'ali' };
    const ali = await User.findOneAndUpdate(query, req.body);

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
  try {
    const project = await DigitalArt.create(req.body);

    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
};

exports.editDigitalArtProject = async (req, res, next) => {
  const id = { _id: req.params.id };

  try {
    const project = await DigitalArt.findOneAndUpdate(id, req.body);

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

// for presentation design page
exports.createPresentationDesignProject = async (req, res, next) => {
  try {
    const project = await PresentationDesign.create(req.body);

    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
};

exports.editPresentationDesignProject = async (req, res, next) => {
  const id = { _id: req.params.id };

  try {
    const project = await PresentationDesign.findOneAndUpdate(id, req.body);

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

exports.deletePresentationDesignProject = async (req, res, nex) => {
  const id = { _id: req.params.id };

  try {
    const project = await PresentationDesign.findOneAndDelete(id);

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

// for print design page
exports.createPrintDesignProject = async (req, res, next) => {
  try {
    const project = await PrintDesign.create(req.body);

    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
};

exports.editPrintDesignProject = async (req, res, next) => {
  const id = { _id: req.params.id };

  try {
    const project = await PrintDesign.findOneAndUpdate(id, req.body);

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

exports.deletePrintDesignProject = async (req, res, nex) => {
  const id = { _id: req.params.id };

  try {
    const project = await PrintDesign.findOneAndDelete(id);

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

// for UI/UX page
exports.createUIUXProject = async (req, res, next) => {
  try {
    const project = await UIUX.create(req.body);

    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
};

exports.editUIUXProject = async (req, res, next) => {
  const id = { _id: req.params.id };

  try {
    const project = await UIUX.findOneAndUpdate(id, req.body);

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

exports.deleteUIUXProject = async (req, res, nex) => {
  const id = { _id: req.params.id };

  try {
    const project = await UIUX.findOneAndDelete(id);

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
