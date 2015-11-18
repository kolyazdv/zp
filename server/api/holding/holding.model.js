'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HoldingSchema = new Schema({
  name: String,
  info: String,
  address: String,
  contact: [{ type: String, value: String }],
  companies: [{ type:  Schema.Types.ObjectId, ref: 'Company' }]
});

module.exports = mongoose.model('Holding', HoldingSchema);