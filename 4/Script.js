var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                   var employee = [
                       {FirstName: 'Kishan', LastName: 'Kalburgi', Gender: 'Male'},
                       {FirstName: 'Manju', LastName: 'A', Gender: 'Male'},
                       {FirstName: 'Vineeth', LastName: 'A', Gender: 'Male'},
                       {FirstName: 'Abhi', LastName: 'P', Gender: 'Male'},
                       {FirstName: 'Pulkit', LastName: 'B', Gender: 'Male'}
                   ]

                   var country = [
                       {
                           name: 'US',
                           cities: [
                               {name: 'kk'},
                               {name: 'kk2'}
                           ]
                        },
                        {
                            name: 'India',
                            cities: [
                                {name: 'kk-India'},
                                {name: 'kk-India2'}
                            ]
                        }, 
                        {
                            name: 'India',
                            cities: [
                                {name: 'kk-India'},
                                {name: 'kk-India2'}
                            ]
                        } 
                   ]
                                      
                   $scope.employee = employee;
                   $scope.country = country;
                });