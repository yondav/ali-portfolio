const express = require('express');
const router = express.Router();

const { users } = require('./users');

const api = [...users];

api.map((endpoint) => {
  router.route(`${endpoint.path}`).get(endpoint.func);
});

module.exports = router;
