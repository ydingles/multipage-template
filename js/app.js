var myApp = angular.module('myApp', ['ui.router'])
// Config route provider
.config(function($stateProvider) {
    $stateProvider
  .state('home', {
    url:'/',
    templateUrl: 'templates/home.html',
    controller: 'HomeController',
  })
  .state('projects', {
    url:'/projects',
    templateUrl: 'templates/projects.html',
    controller: 'ProjectsController',
  })
  .state('about', {
    url:'/about',
    templateUrl: 'templates/about.html',
    controller: 'AboutController',
  })
})

// Landing page controller, read json
.controller('HomeController', function($scope, $http){
  $http.get('json/home.json').success(function(data) {
    $scope.homeobject = data;
  })
})

// Content controller, read json
.controller('ProjectsController', function($scope, $http){
    $http.get('json/projects.json').success(function(data) {
    $scope.projectsobject = data;
  })
})

// About contact controller, read json
.controller('AboutController', function($scope, $http){
    $http.get('json/about.json').success(function(data) {
    $scope.aboutobject = data;
  })
})
