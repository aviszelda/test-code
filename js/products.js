/*global angular*/
/*global app*/
(function() {
    
    var app = angular.module('store-products', [ ]);
    
    app.directive('productTitle', function() {
          return {
          restrict: 'E',
          templateUrl: '../product/product-title.html'
        };
    });
    
    app.directive('productPanels', function() {
          return {
          restrict: 'E',
          templateUrl: '../product/product-panels.html'
        };
    });
    
    app.directive('productTabs', function() {
        return {
        restrict: 'E',
        templateUrl: '../product/product-tabs.html',
        controller: function() {
            this.tab = 1;
            
                this.setTab = function(newValue){
                    this.tab = newValue;
                };
                
                this.isSet = function(tabName){
                    return this.tab === tabName;
                };
        },
        controllerAs: 'tab'  
        };
    });
})();