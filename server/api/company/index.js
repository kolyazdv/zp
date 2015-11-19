'use strict';

var express = require('express');
var controller = require('./company.controller.js');

var router = express.Router();
router.get('/:districtID', controller.index);
router.get('/view/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;