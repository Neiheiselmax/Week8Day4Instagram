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
        },

        vm.likeImage = (item)=>{
          let likeImage = API.likeImage(item._id);
          likeImage.then(res =>{
              item.likes = res.data.data.likes+1;
            })
          },



       vm.getImageData = function(id){

         let currentImage = API.getSingleImage(id);
         currentImage.then(function successCallback(response){
           vm.currentImage = response.data;
         })

       }



        let image = API.getImage();
        image.then(function successCallback(response){
        console.log(response)
        vm.image = response.data.images
        })

        })
       })();
