// import express
const express = require('express');
// import the logic controller
const histController = require('../controllers/histControl');
// create a router
const router = express.Router();
// define your routes
// add the function that should be executed for this route
// GET /feed/posts will be handled right now
router.get('/hists', histController.getHists);
router.get('/hist/:id', histController.getById);
// POST /feed/post will be handled right now
router.post('/hist', histController.createHist);

router.delete('/hist/:id', histController.deleteById);

router.put('/hist/:id', histController.updateById)
// export the router
module.exports = router;