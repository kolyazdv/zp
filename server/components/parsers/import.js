'use strict';
var fs = require('fs');
var _ = require('lodash');
var Companies = require('../../api/company/company.model');
var District = require('../../api/district/district.model');
var offset = 0;
module.exports = function(){
  var stream = fs.createReadStream(__dirname+"/../../config/data/test.csv");
  var csv = require("fast-csv");
  var currentDistrict = null;
  //async series goes there

  //async function 1
  var csvStream = csv()
    .on("data", function(data){
      if (offset === 1) {
        District.find({name:data[1]}, function(err, district){
          if(err) console.log(err);
          if(!_.isEmpty(district)){
            currentDistrict = district;
            } else {
            var newDistrict = new District({name: data[1]});
            newDistrict.save(function(err, district){
              currentDistrict = district; console.log(currentDistrict, district);
            });
          }
        });
      }
      //if (offset >=5) {
      //  var company = new Companies({
      //    name:data[0],
      //    holding:data[1],
      //    address: data[3],
      //    info: data[2]
      //  });
      //  company.save(function(err, newCompany){
      //    console.log('Company Saved: ', newCompany);
      //    currentDistrict._companies.push(newCompany._id);
      //  });
      //}
      //console.log(offset);
      offset++;
    })
    .on("end", function(){
      console.log(currentDistrict);
    });

  stream.pipe(csvStream);

  //async callback
  //saving currentDistrict via currentDistrict.save();
};

