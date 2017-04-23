(function() {
    'use strict';

    angular
        .module('routing')
        .controller('TableController', function(API) {
          const vm = this;

          vm.update = function(isValid) {
            alert("goodJob")
            console.log(vm.item);
          if (isValid) {
          let newItem = {"title": vm.item.title, "url": vm.item.url, "description": vm.item.description};
          let post = API.postImage(newItem);
          post.then(res=>{
            console.log(res);
          })
          vm.item = {}
           }else{
            alert("Form Incomplete")
           }
        }

        let image = API.getImage();
        image.then(function successCallback(response){
        console.log(response)
        vm.image = response.data.images.url
        })

        })
       })();
