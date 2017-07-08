var app = angular.module('appSort', []);

app.controller('TableSortCtrl', function($scope, $http) {
  $scope.orderByField = 'firstName';
  $scope.reverseSort = false;
  
  $http.get("employee.json").then(function (response) {
      $scope.data = response.data;
  });
});