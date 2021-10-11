const User = require('../../models/User');

exports.getUser = async (req, res, next) => {
  try {
    const ali = await User.find({});

    res.status(200).json(ali);
  } catch (err) {
    next(err);
  }
};
