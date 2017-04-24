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
          getImage:() => {
          return $http({
              method:"GET",
              url:"http://instagramcloneclass.herokuapp.com/images",
              headers: {'X_CSRF_TOKEN': 'max'},
            })
        },
        likeImage:(id) => {
        return $http({
            method:"POST",
            url:"http://instagramcloneclass.herokuapp.com/images/vote",
            data:{imageid:id},
          })
      },
      getSingleImage:(id) => {
        return $http({
            method:"GET",
            url:`http://instagramcloneclass.herokuapp.com/images/${id}`,
      })
      }
    }
    });

})();
