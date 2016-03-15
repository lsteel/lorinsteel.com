angular
  .module('HomeController', [])
  .controller('HomeController', [
    '$location',
    '$timeout',
    function ($location, $timeout) {
      var homeCtrl = this;

      homeCtrl.scrollTop = function(location) {
        var locString = '/' + location;
        $('html, body').animate({
          scrollTop: $('body').offset().top
        }, 175);

        $timeout(function() {
          $location.url(locString);
        }, 200);
      };
    }
]);
