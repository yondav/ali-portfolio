const {
  getUser,
  getDigitalArtProjects,
  getPresentationDesignProjects,
} = require('../../../controllers/api');

exports.getRoutes = [
  {
    path: '/users',
    func: getUser,
  },
  {
    path: '/digital_art',
    func: getDigitalArtProjects,
  },
  {
    path: '/presentation_design',
    func: getPresentationDesignProjects,
  },
];
