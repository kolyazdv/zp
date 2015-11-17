'use strict';
var fs = require('fs');
var _ = require('lodash');
var Companies = require('../../api/company/company.model');
var District = require('../../api/district/district.model');
var offset = 0;
var currentDistrict = null;
console.log("start !!!" );

District.find({name:"Акимовский"}, function (err, districts) {
  currentDistrict = districts;
  console.log('currentDistrict: ',  currentDistrict);
})
//
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

module.exports = function(){
  var stream = fs.createReadStream(__dirname+"/../../config/data/test.csv");
  var csv = require("fast-csv");

  //async series goes there
  //async function 1
  var csvStream = csv()
    .on("data", function(data){
      //if (offset === 1) {
      //  District.find({name:data[1]}, function(err, district){
      //    if(err) console.log(err);
      //    if(!_.isEmpty(district)){
      //      currentDistrict = district;
      //      } else {
      //      var newDistrict = new District({name: data[1]});
      //      newDistrict.save(function(err, district){
      //        currentDistrict = district; console.log("new --> "+currentDistrict, district);
      //      });
      //    }
      //  });
      //}
      console.log(offset+') ',data[0]);
    //  if (offset >=5) {
        var company = new Companies({
          name:data[0],
          holding:data[1],
          address: data[3],
          info: data[2]
        });
        company.save(function(err, newCompany){
          console.log('Company Saved: ', newCompany);
          console.log('Company _id: ',  currentDistrict);
        //  currentDistrict._companies.push(newCompany._id);
        });
   //   }
   //   console.log(offset);
      offset++;
    })
    .on("end", function(){
      console.log("-->>end -->>"+currentDistrict+"********");
    });

  stream.pipe(csvStream);
console.log("---------------------------");
  //async callback
  //saving currentDistrict via currentDistrict.save();
};

