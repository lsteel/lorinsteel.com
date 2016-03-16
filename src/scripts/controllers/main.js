angular
  .module('MainController', [
    'ngRoute',
  ])
  .controller('MainController', [
    '$location',
    '$window',
    '$timeout',
    function ($location, $window, $timeout) {
      var mainCtrl = this;

      mainCtrl.date = new Date();

      $('body, .container-fluid, .container-fluid > .row').css({
        'min-height' : $window.innerHeight + 'px'
      });

      $(window).resize(function(event) {
        $('body, .container-fluid, .container-fluid > .row').css({
          'min-height' : $window.innerHeight + 'px'
        });
      });

      console.log('reached main controller');
      mainCtrl.scrollTop = function(location) {
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
