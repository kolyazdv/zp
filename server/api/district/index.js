'use strict';

var express = require('express');
var controller = require('./district.controller.js');

var router = express.Router();

router.get('/:regionID', controller.index);
router.get('/view/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;