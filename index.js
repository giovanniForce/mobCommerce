//import express
const express = require('express');
//import mongoose
const mongoose = require('mongoose');
// import routes
const route= require('./routes/index.js');
//import cors
const cors = require('cors');
// construct express function
const app = express();

// connect ke database mongoDB
mongoose.connect("mongodb+srv://kiuw3:legameur734568@cluster0.ndyqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));

// middleware 
app.use(cors());
app.use(express.json());
app.use('/product',route);

// listening to port
app.listen('3000',()=> console.log('Server Running at port: 3000'));