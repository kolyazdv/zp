'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HoldingSchema = new Schema({
  name: String,
  info: String,
  address: String,
  contact: [{ type: String, value: String }]
});

module.exports = mongoose.model('Holding', HoldingSchema);