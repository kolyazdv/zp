'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CallSchema = new Schema({
  date: Date,
  info: String,
  _stuff: {type: Schema.Types.ObjectId, ref: 'Stuff'},
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Call', CallSchema);