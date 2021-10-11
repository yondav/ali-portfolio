const { editUser } = require('../../../controllers/admin/adminPortal');
const { protect } = require('../../../middleware/auth');

exports.adminPortal = [
  {
    path: '/edit_profile',
    func: editUser,
    crud: 'put',
    middleware: [protect],
  },
];
