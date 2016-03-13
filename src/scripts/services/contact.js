angular
.module('appContact', [])
.factory('contactFuncs', [
  '$http',
  '$location',
  function($http, $location) {

    var contactFuncs = {

      sendMessage: function( input, cb ) {
        console.log('reached sendMessage function');
        input.submit = true;

        $http
          .post('/contactForm.php', input)
          .success(function(data, status) {
            console.log(data);
            if ( data.success ) {
              console.log('reached success true');
              cb(null, data.success);
            }
            else if (!data.success) {
              console.log('reached success false');
              cb(!data.success, null); //returns err is true in cb function
            }
            else {
              console.log('reached last else');
            }
          });
      },
    };

    return contactFuncs;
  },
]);
