/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /staffs              ->  index
 * POST    /staffs              ->  create
 * GET     /staffs/:id          ->  show
 * PUT     /staffs/:id          ->  update
 * DELETE  /staffs/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Stuff = require('./stuff.model.js');

// Get list of staffs
exports.index = function(req, res) {
  Staff.find(
      function (err, staffs) { console.log(staffs);
        return res.json(staffs);
      }
  );
};

// Get a single staff
exports.show = function(req, res) {
  Staff.findById(req.params.id, function (err, staff) {
    if(err) { return handleError(res, err); }
    if(!staff) { return res.status(404).send('Not Found'); }
    return res.json(staff);
  });
};

// Creates a new staff in the DB.
exports.create = function(req, res) {
  Staff.create(req.body, function(err, staff) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(staff);
  });
};

// Updates an existing staff in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Staff.findById(req.params.id, function (err, staff) {
    if (err) { return handleError(res, err); }
    if(!staff) { return res.status(404).send('Not Found'); }
    var updated = _.merge(staff, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(staff);
    });
  });
};

// Deletes a staff from the DB.
exports.destroy = function(req, res) {
  Staff.findById(req.params.id, function (err, staff) {
    if(err) { return handleError(res, err); }
    if(!staff) { return res.status(404).send('Not Found'); }
    staff.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}