var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                   var employees = [
                       {name: 'Ben', dob: new Date("November 23, 1980"), gender: "Male", salary: 55000.788 },
                       {name: 'Sara', dob: new Date("May 23, 1980"), gender: "Female", salary: 65000 },
                       {name: 'Mark', dob: new Date("August 23, 1980"), gender: "Male", salary: 75000 },
                       {name: 'Pam', dob: new Date("October 23, 1980"), gender: "Female", salary: 66000 },
                       {name: 'Todd', dob: new Date("December 23, 1980"), gender: "Male", salary: 85000 }
                    ];

                    $scope.employees = employees
                    $scope.rowLimit = 5;
                    $scope.sort = "name";
                    $scope.reverseSort = false;

                    $scope.sortdata = function(col){
                        $scope.reverseSort = ($scope.sort == col) ? !$scope.reverseSort : false;
                        $scope.sort = col;
                    }

                    $scope.getSortClass = function(col){
                        if($scope.sort == col){
                            return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
                        }
                        return '';
                    }

                    $scope.searchBy = 'name';

                    $scope.search = function(col){
                        $scope.searchBy = col
                    }
                });