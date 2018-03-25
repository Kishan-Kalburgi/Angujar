/// <reference path="angular.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                   var employees = [
                       {name: 'Ben', gender: 1, salary: 55000 },
                       {name: 'Sara', gender: 0, salary: 65000 },
                       {name: 'Mark', gender: 1, salary: 75000 },
                       {name: 'Pam', gender: 0, salary: 66000 },
                       {name: 'Todd', gender: 3, salary: 85000 }
                    ];

                    $scope.employees = employees
                });