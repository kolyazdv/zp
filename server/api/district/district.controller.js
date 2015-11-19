/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /districts              ->  index
 * POST    /districts              ->  create
 * GET     /districts/:id          ->  show
 * PUT     /districts/:id          ->  update
 * DELETE  /districts/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var District = require('./district.model.js');
var Region = require('../region/region.model.js');

// Get list of Districts
exports.index = function(req, res) { console.log('index');
  District.find({_region: req.params.regionID}).populate('_region _companies').exec(function (err, districts) {
        return res.json(districts);
      }
  );
};

// Get a single district
exports.show = function(req, res) {
  District.findById(req.params.id, function (err, district) {
    if(err) { return handleError(res, err); }
    if(!district) { return res.status(404).send('Not Found'); }
    return res.json(district);
  });
};

// Creates a new district in the DB.
exports.create = function(req, res) { console.log(req.body);
  District.create(req.body, function(err, district) {
    if(err) { return handleError(res, err); }

    Region.findById(district._region, function(err, region){
      if(err) { return handleError(res, err); }
      if(!region){
        return res.status(404).send('Not Found');
      }
      region.districts.push(district._id);
      region.save(function(err, region){
        return res.status(201).json(district);
      })
    });
  });
};

// Updates an existing district in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  District.findById(req.params.id, function (err, district) {
    if (err) { return handleError(res, err); }
    if(!district) { return res.status(404).send('Not Found'); }
    var updated = _.merge(district, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(district);
    });
  });
};

// Deletes a district from the DB.
exports.destroy = function(req, res) {
  District.findById(req.params.id, function (err, district) {
    if(err) { return handleError(res, err); }
    if(!district) { return res.status(404).send('Not Found'); }
    district.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}