// install npm init
// install npm i express
// install npm i mongoose
// install npm i -D nodemon

const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome')
});
app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});