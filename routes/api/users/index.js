const { getUser } = require('../../../controllers/api/users');

exports.users = [
  {
    path: '/users',
    func: getUser,
  },
];
