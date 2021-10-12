const {
  getUser,
  getDigitalArtProjects,
  getPresentationDesignProjects,
  getPrintDesignProjects,
  getUIUXProjects,
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
  {
    path: '/ui_ux',
    func: getUIUXProjects,
  },
];
