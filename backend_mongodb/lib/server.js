'use strict';

const mongoose = require('mongoose');
const express = require('express');
const mongo = require('mongodb');
const debug = require('debug')
const bodyParser = require('body-parser');

const app = express();
const MONGODB_URI = 'mongodb://localhost/CDKglobal';
const PORT = process.env.PORT || 3000;
mongoose.connect(MONGODB_URI);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', require('../route/api'));

app.use(function (err, req, res, next){
  console.log(err);
  res.sendStatus(422).send({error: err.message});
})

app.listen(PORT, () => {
  console.log('Now listening on PORT for request ' + PORT);
  debug(`listening on ${PORT}`);
})

// app.get goes here for the static file

// before(done => {
//   mongoose.connect(MONGODB_URI);
//   mongoose.connection.once('open', function(){
//     console.log('connection has been made create fireworks!')
//     done();
//   }).on('error', function(error){
//     console.log('error meesage ' + error);
//   })
// })
//
// beforeEach(done =>{
//   mongoose.connection.collections.sales.drop(() => {
//     done();
//   })
// })
