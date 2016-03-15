angular
  .module('MainController', [
    'ngRoute',
  ])
  .controller('MainController', [
    '$location',
    '$timeout',
    function ($location, $timeout) {
      var mainCtrl = this;

      mainCtrl.date = new Date();

      console.log('reached main controller');
      mainCtrl.scrollTop = function(location) {
        var locString = '/' + location;
        $('html, body').animate({
          scrollTop: $('body').offset().top
        }, 175);

        $timeout(function() {
          $location.url(locString);
        }, 175);
      };
    }
]);
