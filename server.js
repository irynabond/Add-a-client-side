'use strict';

var express = require('express');
var mongoose = require('mongoose');
var app = express();
app.use(express.static(__dirname + '/build'));

var routes = express.Router();
mongoose.connect(process.env.MONGOLAB_URL || 'mongodb://localhost/user_dev');

require('./routes/countries')(routes);
app.use('/api', routes);

app.listen((process.env.PORT || 3000), function() {
  console.log('Server has started on port ' + (process.env.PORT || 3000));
});
