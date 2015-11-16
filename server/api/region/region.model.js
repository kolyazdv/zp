'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RegionSchema = new Schema({
  name: String,
  info: String,
  districts: [{ type:  Schema.Types.ObjectId, ref: 'District' }]
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

RegionSchema
  .virtual('districtsCount')
  .get(function() {
    return this.districts.length;
  });

module.exports = mongoose.model('Region', RegionSchema);