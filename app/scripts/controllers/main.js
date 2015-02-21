'use strict';

/**
 * @ngdoc function
 * @name hackatonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackatonApp
 */
angular.module('hackatonApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $('#modal-welcome').modal('show');
  });
