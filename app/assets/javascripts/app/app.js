angular
  .module('app', ['ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state("home", {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController as ctrl'
      })
      .state("division.new", {
        url: 'new',
        templateUrl: 'division/new.html',
        controller: 'DivisionsController as ctrl'
      })
      .state('division.divisions', {
        url: 'divisions',
        templateUrl: 'division/divisions.html',
        controller: 'DivisionsController as ctrl'
      })
      .state('division.division', {
        url: 'division/:id',
        templateUrl: 'division/show.html',
        controller: 'DivisionsController as ctrl'
      })
      .state('division.edit', {
        url: 'edit/:id',
        templateUrl: 'division/edit.html',
        controller: 'DivisionsController as ctrl'
      });

    $urlRouterProvider.otherwise("/");
  });