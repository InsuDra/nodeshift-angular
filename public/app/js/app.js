/*jslint browser:true indent:2 */
/*global $, angular */
'use strict';

var app = angular.module('App', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    controller: 'ViewCtrl',
    controllerAs: 'view',
    templateUrl: 'partial/',
    resolve: {
      delay: mainCtrl.delay
    }
  });

  $routeProvider.when('/Node', {
    controller: 'ViewCtrl',
    controllerAs: 'view',
    templateUrl: 'partial/node',
    resolve: {
      delay: mainCtrl.delay
    }
  });
  $routeProvider.when('/Angular', {
    controller: 'ViewCtrl',
    controllerAs: 'view',
    templateUrl: 'partial/angular',
    resolve: {
      delay: mainCtrl.delay
    }
  });
  $routeProvider.when('/OpenShift', {
    controller: 'ViewCtrl',
    controllerAs: 'view',
    templateUrl: 'partial/openshift',
    resolve: {
      delay: mainCtrl.delay
    }
  });
  $routeProvider.when('/Foundation', {
    controller: 'ViewCtrl',
    controllerAs: 'view',
    templateUrl: 'partial/foundation',
    resolve: {
      delay: mainCtrl.delay
    }
  });

  /**
   * 404 Route alows you to report bad
   * behavior back to the server.
   **/
  $routeProvider.otherwise({
    controller: 'ViewCtrl',
    controllerAs: 'view',
    templateUrl: 'partial/404',
    resolve: {
      delay: mainCtrl.delay
    }
  });
});

app.run(function ($rootScope) {
  $rootScope.$on('$viewContentLoaded', function () {
    console.log('TODO: Update foundation scripts to use angular');
    $(document).foundation();
  });
});