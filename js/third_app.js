/*global angular*/
(function() {

  var app = angular.module('gemStore', [ ]);

  app.controller('StoreController', function() {
      this.products = gems;
  });

  app.controller('ReviewController', function() {
      this.review = {};
      this.addReview = function(product) {
        this.review.createdOn = Date.now();
        product.reviews.push(this.review);
        this.review = {};
      };
  });

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

  var gems = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "images/gem-02.gif",
      "images/gem-05.gif",
      "images/gem-09.gif"
    ],
    reviews: [{
      stars: 5,
      body: "I love this gem!",
      author: "joe@example.org",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "This gem sucks.",
      author: "tim@example.org",
      createdOn: 1397490980837
    }]
  }];
})();
