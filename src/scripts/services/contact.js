angular
.module('appContact', [])
.factory('contactFuncs', [
  '$http',
  '$location',
  function($http, $location) {

    var contactFuncs = {

      sendMessage: function( input, cb ) {
        $http({
          method: 'POST',
          url: '/contactForm.php',
          data: input,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success( function(data) {
          if ( data.success ) {
            cb(null, data.success);
          } else {
            cb(true, null); //returns err is true in cb function
          }
        });
      },
    };

    return contactFuncs;
  },
]);
