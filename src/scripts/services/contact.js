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
          .success(function(data) {
            console.log(data + ' Message: ' + data.message);
            cb(data, data.message);
          });
      },
    };

    return contactFuncs;
  },
]);
