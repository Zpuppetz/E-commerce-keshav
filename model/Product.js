const mongoose = require('mongoose');
const Review = require('./Review');
const { Schema } = mongoose
const {model} = mongoose

let productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    trim: true,
  },
  price: {
    type: String,
    trim: true,
    min:0
  },
  desc: {
    type: String,
    trim: true
  },
  reviews : [{
    type: mongoose.Schema.Types.ObjectId ,
    ref :`Review`,
  },],
});

let Product = model(`Product`, productSchema)

module.exports = Product