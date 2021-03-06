/*global angular*/
(function() {

  var app = angular.module('panel', [ ]);

  app.controller('PanelController', function() {
      this.tab = 1;

      this.selectTab = function(setTab) {
        this.tab = setTab;
      };

      this.isSelected = function(checkTab) {
        return this.tab === checkTab;
      };

  });
})();
