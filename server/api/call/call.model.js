'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Stuff = require('../stuff/stuff.model.js'),
    Region = require('../region/region.model.js'),
    User = require('../user/user.model.js');

var CallSchema = new Schema({
  date: Date,
  info: String,
  _stuff: {type: Schema.Types.ObjectId, ref: 'Stuff'},
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Call', CallSchema);