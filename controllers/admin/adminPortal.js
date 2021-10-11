const User = require('../../models/User');
const ErrorResponse = require('../../utils/errorResponse');

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
    const query = { username: 'admin' };
    const ali = await User.findOneAndUpdate(query, {
      username: username,
      email: email,
      headshot: headshot,
      bio: bio,
      location: location,
      education: education,
      interests: interests,
      tech: tech,
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
