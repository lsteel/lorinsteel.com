angular
.module('ContactController', [
  'appContact',
])
.controller('ContactController', [
  'contactFuncs',
  '$timeout',
  '$location',
  function (contactFuncs, $timeout, $location) {
    var contactCtrl = this;

    contactCtrl.messageMax = 2000;

    contactCtrl.scrollTop = function(location) {
      var locString = '/' + location;
      $('html, body').animate({
        scrollTop: $('body').offset().top
      }, 175);

      $timeout(function() {
        $location.url(locString);
      }, 200);
    };

    contactCtrl.errorMessage = null;
    contactCtrl.successMessage = null;

    contactCtrl.submit = function( input ) {
      contactCtrl.errorMessage = null;
      contactCtrl.successMessage = null;

      input = (input === undefined ? {} : input);

      contactCtrl[contactCtrl.inputType]( input, function( data, message ) {
        if ( !data.success ) {
          contactCtrl.errorMessage = message;
        }
        else if ( data.success ) {
          contactCtrl.successMessage = message;
          $timeout(function() {
            contactCtrl.scrollTop('');
          }, 5000);
        }
      });
    };

    contactCtrl.inputType = 'contact';

    contactCtrl.contact = function( input, cb ) {
      return contactFuncs.sendMessage( input, cb );
    };
  }
]);
