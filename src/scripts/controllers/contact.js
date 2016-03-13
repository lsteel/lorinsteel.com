angular
.module('ContactController', [
  'appContact',
])
.controller('ContactController', [
  'contactFuncs',
  '$location',
  function (contactFuncs, $location) {
    var contactCtrl = this;

    contactCtrl.success = false;
    contactCtrl.error = false;

    contactCtrl.submit = function( input ) {
      contactCtrl.success = false;
      contactCtrl.error = false;

      contactCtrl[contactCtrl.inputType]( input, function( err, succ ) {
        if ( err ) {
          contactCtrl.error = true;
        }
        else if ( succ && !err ) {
          contactCtrl.success = true;
        }
      });
    };

    contactCtrl.inputType = 'contact';

    contactCtrl.contact = function( input, cb ) {
      console.log('Trying for contactFuncs');
      return contactFuncs.sendMessage( input, cb );
    };
  }
]);
