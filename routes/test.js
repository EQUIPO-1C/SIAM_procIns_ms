// import express
const express = require('express');
// import the logic controller
const feedController = require('../controllers/test');
// create a router
const router = express.Router();
// define your routes
// add the function that should be executed for this route
// GET /feed/posts will be handled right now
router.get('/test', feedController.getTest);
// export the router
module.exports = router;