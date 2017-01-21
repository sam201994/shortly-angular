angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  //console.log("links:---",Links);
  Links.getAll().then(function (links) {
    $scope.data.links = links;
  });


});


      // Links.getAll().then(function (links) {
      //   // console.log("----------links--------------", links);
      //   expect(links).to.deep.equal(mockResponse);
      // });