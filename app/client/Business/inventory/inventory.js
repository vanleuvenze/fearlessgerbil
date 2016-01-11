angular.module('inventory.control', ['equip.services', 'ngMaterial'])
  .controller('InventoryControl', function ($scope, Inventory) {

  	Inventory.getItems()
  	  .then(function (data) {
        $scope.inventory = data.data;
        console.log($scope.inventory);
      })

    $scope.remove = function (id) {
      Inventory.removeItem(id)
        .then(function (response) {
          console.log('removed', response);
        })
    }

  })