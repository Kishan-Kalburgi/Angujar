var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                   var employee = {
                       FirstName: 'Kishan',
                       LastName: 'Kalburgi',
                       Gender: 'Male'
                   }; 
                   
                   $scope.employee = employee;
                });