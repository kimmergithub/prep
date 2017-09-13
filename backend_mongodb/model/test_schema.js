'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const car = new Schema({
  make: {type: String, require: true},
  model: {type: String, require: true},
  year: {type: Number, require: true}
})

const saleReport = new Schema({
  person: {type: String, require: true},
  saleAmount: {type: Number, require: true},
  car: {car}
})

module.exports = mongoose.model('Sales', saleReport);
