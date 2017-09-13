'use strict';
const express = require('express');
const app = express();
const debug = require('debug')('prep:server');
const request = require('superagent');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const mongo = require('mongodb');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost/prep';

//replacing the promise library with mongoose
mongoose.promise = global.promise;

mongoose.connect(MONGODB_URI);

// access to static files at the root level
app.use(express.static('../../prep'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use('/api', require('../route/api'));


app.use(function(req, res){
  console.log(err);
  // have to create a custome error message for this later
  res.status(422).send({error: error.message})
})

app.listen(PORT, () => {
  console.log('app.listen now listening for request ' + PORT);
  debug(`listening on ${PORT}`);
});

app.get('/', function(req, res){
  res.sendFile('index.html', {root: '../../'})
})

// FOR TESTING PURPOSES USE THIS TO SET UP YOUR SERVER
// don't forget to comment all this out == unless you're running test.

before(done => {
  mongoose.connection.once('open', function(){
    console.log('the connection has been made!  CREATE SOME FIREWOKS!!!');
    done();
  }).on('error', function(error){
    console.log('connection error: ' + error);
  });
});

beforeEach(done => {
  mongoose.connection.collections.sales.drop(function(){
    done();
  });
});
