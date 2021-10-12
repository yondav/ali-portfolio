const { getUser, getDigitalArtProjects } = require('../../../controllers/api');

exports.getRoutes = [
  {
    path: '/users',
    func: getUser,
  },
  {
    path: '/digital_art',
    func: getDigitalArtProjects,
  },
];
