/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /holdings              ->  index
 * POST    /holdings              ->  create
 * GET     /holdings/:id          ->  show
 * PUT     /holdings/:id          ->  update
 * DELETE  /holdings/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Thing = require('./holding.model.js');

// Get list of holdings
exports.index = function(req, res) {
  Holding.find(
      function (err, holdings) { console.log(holdings);
        return res.json(holdings);
      }
  );
};

// Get a single holding
exports.show = function(req, res) {
  Holding.findById(req.params.id, function (err, holding) {
    if(err) { return handleError(res, err); }
    if(!holding) { return res.status(404).send('Not Found'); }
    return res.json(holding);
  });
};

// Creates a new holding in the DB.
exports.create = function(req, res) {
  Holding.create(req.body, function(err, holding) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(holding);
  });
};

// Updates an existing holding in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Holding.findById(req.params.id, function (err, holding) {
    if (err) { return handleError(res, err); }
    if(!holding) { return res.status(404).send('Not Found'); }
    var updated = _.merge(holding, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(holding);
    });
  });
};

// Deletes a holding from the DB.
exports.destroy = function(req, res) {
  Holding.findById(req.params.id, function (err, holding) {
    if(err) { return handleError(res, err); }
    if(!holding) { return res.status(404).send('Not Found'); }
    holding.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}