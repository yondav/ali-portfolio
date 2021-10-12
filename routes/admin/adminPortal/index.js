const {
  editUser,
  createDigitalArtProject,
  editDigitalArtProject,
  deleteDigitalArtProject,
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
];
