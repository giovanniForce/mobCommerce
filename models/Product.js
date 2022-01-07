// import mongoose 
const mongoose = require('mongoose');

// Buat Schema
const Product = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
});

// export model
 mongoose.model('Products', Product);