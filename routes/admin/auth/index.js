const {
  register,
  login,
  forgotPassword,
  resetPassword,
} = require('../../../controllers/admin/auth');

exports.auth = [
  {
    path: '/register',
    func: register,
    crud: 'post',
    middleware: [],
  },
  {
    path: '/login',
    func: login,
    crud: 'post',
    middleware: [],
  },
  {
    path: '/forgot_password',
    func: forgotPassword,
    crud: 'post',
    middleware: [],
  },
  {
    path: '/reset_password',
    func: resetPassword,
    crud: 'put',
    middleware: [],
  },
];
