const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Game = new Schema({
  name: {
    type: String
  },
  console: {
    type: String
  },
  price: {
    type: String
  },
},{
    collection: 'Game'
});

module.exports = mongoose.model('Game', Game); 