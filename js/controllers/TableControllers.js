(function() {
    'use strict';


    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').focus()
    })





    angular
        .module('routing')
        .controller('TableController', function(API) {
          const vm = this;

          vm.update = function(isValid) {
            alert("goodJob")
            console.log(vm.item);
          if (isValid) {
          let newItem = {"title": vm.item.title, "url": vm.item.url, "description": vm.item.description, "likes":vm.item.likes};
          let post = API.postImage(newItem);
          post.then(res=>{
            console.log(res);
          })
          vm.item = {}
           }else{
            alert("Form Incomplete")
           }
        }

        vm.changeQuantity = function(images,upOrNot){
            (upOrNot)
          {
            images.likes++;
          }
          vm.image = response.data.images
          }

        let image = API.getImage();
        image.then(function successCallback(response){
        console.log(response)
        vm.image = response.data.images
        })

        })
       })();
