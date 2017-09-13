'use strict';

const express = require('express');
const router = express.Router();

const Record = require('../model/test_schema');

router.post('/records', function(req, res, next){
  Record.create(req.body).then(function(records){
    res.send(records)
  }).catch(next);
});

module.exports = router;
