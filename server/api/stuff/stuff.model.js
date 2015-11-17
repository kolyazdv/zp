'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Company = require('../company/company.model.js');

var StuffSchema = new Schema({
  name: String,
  info: String,
  contact: [{ type: String, value: String }],
  _company: {type: Schema.Types.ObjectId, ref: 'Company'}
});

module.exports = mongoose.model('Stuff', StuffSchema);