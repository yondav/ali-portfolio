const express = require('express');
const router = express.Router();

const { auth } = require('./auth');
const { adminPortal } = require('./adminPortal');

const api = [...auth, ...adminPortal];

api.map((endpoint) => {
  const args = endpoint.middleware.map((mw) => mw);

  if (endpoint.crud === 'get') {
    router.route(`${endpoint.path}`).get(args, endpoint.func);
  }

  if (endpoint.crud === 'post') {
    router.route(`${endpoint.path}`).post(args, endpoint.func);
  }

  if (endpoint.crud === 'put') {
    router.route(`${endpoint.path}`).put(args, endpoint.func);
  }

  if (endpoint.crud === 'delete') {
    router.route(`${endpoint.path}`).delete(args, endpoint.func);
  }
});

module.exports = router;
