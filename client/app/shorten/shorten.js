angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  // console.log("loaction : ",$location);
  // console.log("LInks: ", Links);
  $scope.link = {};
  $scope.addLink = function () {

    Links.addOne();
  };

});
