(function() {
    'use strict';

    angular
        .module('routing')
        .factory('API', function($http){

        return {
        postImage:(image) => {
          return $http({
              method:"POST",
              url:"http://instagramcloneclass.herokuapp.com/image/post",
              data: image,
              headers: {'X_CSRF_TOKEN': 'max'},
            })
        },
      getImage:(image) => {
          return $http({
              method:"GET",
              url:"http://instagramcloneclass.herokuapp.com/images",
              data: image,
              headers: {'X_CSRF_TOKEN': 'max'},
            })
        },
      }
    });

})();
