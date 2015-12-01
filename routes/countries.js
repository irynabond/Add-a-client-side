'use strict';

var bodyParser = require('body-parser');
var Country = require(__dirname + '/../models/country');

module.exports = function(router) {
  router.use(bodyParser.json());
  router.get('/country', function(req, res) {
  Country.find({}, function(err, data) {
    if (err) return handleError(err, res);
    res.json(data);
  });
});

  router.post('/country', bodyParser.json(), function(req, res) {
    var newCountry = new Country(req.body);
    newCountry.save(function(err, data) {
  	if (err) return handleError(err, res);
  	res.json(data);
    });
  });

  router.put('/country/:id', bodyParser.json(), function(req, res) {
    var countryData = req.body;
    delete countryData._id;
    Country.update({_id: req.params.id}, countryData, function(err) {
  	if (err) return handleError(err, res);
  	res.json({msg: 'success!'});
    });
  });

  router.delete('/country/:id', function(req, res) {
    Country.remove({_id: req.params.id}, function(err) {
  	if (err) return handleError(err, res);
  	res.json({msg: 'success!'});
    });
  });

  //non-crud resource
  router.get('/country/:id', function(req, res) {
    Country.find({_id: req.params.id}.count(function(err, count) {
  	if (err) return handleError(err, res);
  	var date = new Date();
  	var year = date.getFullYear();
  	res.json({msg: "You visited " + count + " countries by the end of year " + year + '!'});
    }));
  });
};
