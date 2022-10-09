const mongoose = require('mongoose')
require('dotenv').config()
const user = process.env.DB_USER
const pswd = process.env.DB_PSWD

const url = `mongodb+srv://${user}:${pswd}@procesoinscluster.kb4ixgp.mongodb.net/resumenIns?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })