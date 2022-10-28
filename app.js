require("./configs/db.js")

const express = require('express');
const mongoose = require('mongoose');
const feedRoutes = require('./routes/test');
const histRoutes = require('./routes/histRoute');
const procRoutes = require('./routes/procsRoute')


const app = express();
app.use(express.json());
app.use('/api', feedRoutes);
app.use('/api', histRoutes);
app.use('/api', procRoutes);

app.listen(3001, () =>
  console.log('Listening on port 3001!'),
);