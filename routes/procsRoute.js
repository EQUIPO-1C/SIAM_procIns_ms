// import express
const express = require('express');
// import the logic controller
const procController = require('../controllers/procControl');
// create a router
const router = express.Router();
// define your routes
// add the function that should be executed for this route
// GET /feed/posts will be handled right now
router.get('/process', procController.getProcs);
router.get('/proc/:id', procController.getById);
// POST /feed/post will be handled right now
router.post('/proc', procController.createProc);

router.delete('/proc/:id', procController.deleteById);

router.put('/proc/:id', procController.updateById)
// export the router
module.exports = router;