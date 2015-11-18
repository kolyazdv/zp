'use strict';
var fs = require('fs');
var _ = require('lodash');
var Companies = require('../../api/company/company.model');
var District = require('../../api/district/district.model');
var async = require('async');
var offset = 0;
console.log("start !!!" );

//District.find({name:"Акимовский"}, function(err, district){
//  console.log("1111");
//  if(err) console.log(err);
//  if(!_.isEmpty(district)){
//    currentDistrict = district;
//    console.log("true");
//  } else {
//    var newDistrict = new District({name: "Акимовский"});
//    console.log("false");
//    newDistrict.save(function(err, district){
//      currentDistrict = district; console.log("new --> "+currentDistrict, district);
//    });
//  }
//
//});
//console.log("District --> "+District);
//console.log("currentDistrict --> "+currentDistrict);

module.exports = function() {
  var stream = fs.createReadStream(__dirname + "/../../config/data/test.csv");
  var csv = require("fast-csv");
  var district = {};
  var companies = [];
  var newCompanies = [];
  var csvStream = csv()
    .on("data", function (data) {

      if (offset === 1) {
        district = data[1];
      }
      if (offset >= 5) {
        companies.push(data);
      }
      offset++;
    })
    .on("end", function () {
      var newDistrict = new District({name: district});
      newDistrict.save(function (err, createdDistrict) {
        async.each(companies, function (company, callback) {
          console.log('T Pushed company: ', company);
          var company = new Companies({
            name: company[0],
            holding: company[1],
            address: company[3],
            info: company[2],
            _district: newDistrict._id
          });
          company.save(function (err, newCompany) {
            console.log('NewCompany: ', newCompany);
            newCompanies.push(newCompany._id);
            callback();
          })
        }, function (err) {
          createdDistrict._companies = newCompanies;
          console.log(newDistrict);
          createdDistrict.save(function(err, district){
            console.log('T Save: ', err, district);
          });
        });
      });
    });
  stream.pipe(csvStream);
};
