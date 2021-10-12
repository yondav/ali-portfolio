const express = require('express');
const router = express.Router();

const { getRoutes } = require('./get_routes');

const api = [...getRoutes];

api.map((endpoint) => {
  router.route(`${endpoint.path}`).get(endpoint.func);
});

module.exports = router;
