/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /regions              ->  index
 * POST    /regions              ->  create
 * GET     /regions/:id          ->  show
 * PUT     /regions/:id          ->  update
 * DELETE  /regions/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Region = require('./region.model.js');

// Get list of regions
exports.index = function(req, res) {
  Region.find().populate('districts').exec(
      function (err, regions) { console.log(regions);
        return res.json(regions);
      }
  );
};

// Get a single region
exports.show = function(req, res) {
  Region.findById(req.params.id, function (err, region) {
    if(err) { return handleError(res, err); }
    if(!region) { return res.status(404).send('Not Found'); }
    return res.json(region);
  });
};

// Creates a new region in the DB.
exports.create = function(req, res) {
  Region.create(req.body, function(err, region) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(region);
  });
};

// Updates an existing region in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Region.findById(req.params.id, function (err, region) {
    if (err) { return handleError(res, err); }
    if(!region) { return res.status(404).send('Not Found'); }
    var updated = _.merge(region, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(region);
    });
  });
};

// Deletes a region from the DB.
exports.destroy = function(req, res) {
  Region.findById(req.params.id, function (err, region) {
    if(err) { return handleError(res, err); }
    if(!region) { return res.status(404).send('Not Found'); }
    region.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}