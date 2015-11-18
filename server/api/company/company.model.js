'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Holding = require('../holding/holding.model.js');

var CompanySchema = new Schema({
  name: String,
  info: String,
  deal: String,
  address: String,
  color: String,
  _holding: {type: Schema.Types.ObjectId, ref: 'Holding'},
  _district: {type: Schema.Types.ObjectId, ref: 'District'}
},
  { skipVersioning: { dontVersionMe: true }});

module.exports = mongoose.model('Company', CompanySchema);