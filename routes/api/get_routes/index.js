const {
  getUser,
  getDigitalArtProjects,
  getPresentationDesignProjects,
  getPrintDesignProjects,
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
  {
    path: '/print_design',
    func: getPrintDesignProjects,
  },
];
