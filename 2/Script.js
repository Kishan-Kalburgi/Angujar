var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                    var country = {
                        Name: 'USA',
                        Capital: 'W, D.C',
                        flag: "./image/Kishan.jpg"
                    };

                    $scope.country = country;
                });