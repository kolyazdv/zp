'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DistrictSchema = new Schema({
  name: String,
  info: String,
  _region: {type: Schema.Types.ObjectId, ref: 'Region'},
  _companies: [{type: Schema.Types.ObjectId, ref: 'Company'}]
},
  {
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

DistrictSchema
  .virtual('companiesCount')
  .get(function() {
    return this._companies.length;
  });

module.exports = mongoose.model('District', DistrictSchema);