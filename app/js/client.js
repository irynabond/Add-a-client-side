'use strict';

require('angular/angular');

var countryApp = angular.module('countryApp', []);

var countryController = countryApp.controller('countryController', ['$scope', function($scope) {
  $scope.country = 'Country';
  $scope.places = 'Places';
  $scope.duration = 'Duration';
  $scope.description = 'Description';

  $scope.submitCountry = function() {
    alert($scope.country + ' has been submitted!');
  };
}]);