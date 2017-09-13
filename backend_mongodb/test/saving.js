'use strict';

const mongoose = require('mongoose');
const Entry = require('../model/test_schema');
const assert = require('assert');
require('../lib/server');

describe('Saving Sales Report', function(){
  it('Saving record to database', function(){

    const exampleRecord = new Entry({
      person: 'Jacob Black',
      saleAmount: 17000,
      car: {make: 'chevy', model: 'sonic', year: 2017}
    });

    exampleRecord.save().then(function(){
      assert(!exampleRecord.isNew);
      done();
    });
  });
});
