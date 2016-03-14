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
            $location.url('/');
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
