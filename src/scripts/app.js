angular
.module('steelApp', [
  'ngRoute',
  'HomeController',
  'ContactController',
])
.config([
  '$routeProvider',
  function ($routeProvider) { 'use strict';
    $routeProvider
      .when('/', {
        templateUrl: '/partials/home-controller.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl',
      })
      .when('/contact', {
        templateUrl: '/partials/contact-controller.html',
        controller: 'ContactController',
        controllerAs: 'contactCtrl',
      })
      .otherwise('/');
  },
]);
