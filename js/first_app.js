/*global angular*/
(function() {

  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
      this.products = gems;
  });

  var gems = [
      {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'dsoakdosakodksaopdkaspo',
        canPurchase: true,
        image: "images/example.png",
      },
      {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'kpdoskaodksaopkdpsao',
        canPurchase: false,
        image: "images/example.png",
      }
    ]
})();
