var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                   var movies = [
                       {name: 'Black Panther', Likes: 0, Dislikes: 0},
                       {name: 'Avengers', Likes: 0, Dislikes: 0},
                       {name: 'Incredibles 2', Likes: 0, Dislikes: 0},
                       {name: 'Toy Story', Likes: 0, Dislikes: 0}
                   ];

                   $scope.movies = movies;

                   $scope.like = function(movie){
                       movie.Likes++;                       
                   }

                   $scope.dislike = function(movie){
                       movie.Dislikes++;
                   }
                });