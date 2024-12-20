// install npm init
// install npm i express
// install npm i mongoose
// install npm i -D nodemon

// For running code => powershell -ExecutionPolicy Bypass -Command "nodemon .\index.js"


const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express();
const port = 3000

app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Welcome')
// });

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});