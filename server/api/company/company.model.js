'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CompanySchema = new Schema({
  name: String,
  info: String,
  deal: String,
  address: String,
  color: String,
  holding: String
});

module.exports = mongoose.model('Company', CompanySchema);