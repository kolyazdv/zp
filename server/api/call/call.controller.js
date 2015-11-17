/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /calls              ->  index
 * POST    /calls              ->  create
 * GET     /calls/:id          ->  show
 * PUT     /calls/:id          ->  update
 * DELETE  /calls/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Call = require('./call.model.js');

// Get list of calls
exports.index = function(req, res) {
  Call.find(
      function (err, calls) { console.log(calls);
        return res.json(calls);
      }
  );
};

// Get a single call
exports.show = function(req, res) {
  Call.findById(req.params.id, function (err, call) {
    if(err) { return handleError(res, err); }
    if(!call) { return res.status(404).send('Not Found'); }
    return res.json(call);
  });
};

// Creates a new call in the DB.
exports.create = function(req, res) {
  Call.create(req.body, function(err, call) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(call);
  });
};

// Updates an existing call in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Call.findById(req.params.id, function (err, call) {
    if (err) { return handleError(res, err); }
    if(!call) { return res.status(404).send('Not Found'); }
    var updated = _.merge(call, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(call);
    });
  });
};

// Deletes a call from the DB.
exports.destroy = function(req, res) {
  Call.findById(req.params.id, function (err, call) {
    if(err) { return handleError(res, err); }
    if(!call) { return res.status(404).send('Not Found'); }
    call.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}