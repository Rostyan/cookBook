const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reciepes = new Schema({

  name: {
    type: String,
    required: [true, "Reciepes can't be an empty field"],
    trim: true
  },

  description: {
    type: String,
    required: [true, "Description can't be an empty field"],
    trim: true
  },

  datecreated: {
     type: Date, 
     default: Date.now 
  }

},{
  collection: 'Recipes'
});

module.exports = mongoose.model('reciepes', reciepes);