const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
  }
});

//! Exporting Category Schema
module.exports = mongoose.model("Category", CategorySchema);