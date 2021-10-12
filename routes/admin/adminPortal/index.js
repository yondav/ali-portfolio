const {
  editUser,
  createDigitalArtProject,
  editDigitalArtProject,
  deleteDigitalArtProject,
  createPresentationDesignProject,
  editPresentationDesignProject,
  deletePresentationDesignProject,
  createPrintDesignProject,
  editPrintDesignProject,
  deletePrintDesignProject,
  createUIUXProject,
  editUIUXProject,
  deleteUIUXProject,
} = require('../../../controllers/admin/adminPortal');
const { protect } = require('../../../middleware/auth');

exports.adminPortal = [
  {
    path: '/edit_profile',
    func: editUser,
    crud: 'put',
    middleware: [protect],
  },
  {
    path: '/new_project/digital_art',
    func: createDigitalArtProject,
    crud: 'post',
    middleware: [protect],
  },
  {
    path: '/digital_art/:id',
    func: editDigitalArtProject,
    crud: 'put',
    middleware: [protect],
  },
  {
    path: '/digital_art/:id',
    func: deleteDigitalArtProject,
    crud: 'delete',
    middleware: [protect],
  },
  {
    path: '/new_project/presentation_design',
    func: createPresentationDesignProject,
    crud: 'post',
    middleware: [protect],
  },
  {
    path: '/presentation_design/:id',
    func: editPresentationDesignProject,
    crud: 'put',
    middleware: [protect],
  },
  {
    path: '/presentation_design/:id',
    func: deletePresentationDesignProject,
    crud: 'delete',
    middleware: [protect],
  },
  {
    path: '/new_project/print_design',
    func: createPrintDesignProject,
    crud: 'post',
    middleware: [protect],
  },
  {
    path: '/print_design/:id',
    func: editPrintDesignProject,
    crud: 'put',
    middleware: [protect],
  },
  {
    path: '/print_design/:id',
    func: deletePrintDesignProject,
    crud: 'delete',
    middleware: [protect],
  },
  {
    path: '/new_project/ui_ux',
    func: createUIUXProject,
    crud: 'post',
    middleware: [protect],
  },
  {
    path: '/ui_ux/:id',
    func: editUIUXProject,
    crud: 'put',
    middleware: [protect],
  },
  {
    path: '/ui_ux/:id',
    func: deleteUIUXProject,
    crud: 'delete',
    middleware: [protect],
  },
];
