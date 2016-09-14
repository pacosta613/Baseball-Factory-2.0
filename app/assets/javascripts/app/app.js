angular
  .module('app', ['ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state("league", {
        url: '/',
        templateUrl: 'home.html',
        controller: 'DivisionsController as ctrl'
      })
      .state("league.new", {
        url: 'new',
        templateUrl: 'division/new.html',
        controller: 'DivisionsController as ctrl'
      })
      .state('league.divisions', {
        url: 'divisions',
        templateUrl: 'division/divisions.html',
        controller: 'DivisionsController as ctrl'
      })
      .state('league.division', {
        url: 'division/:id',
        templateUrl: 'division/show.html',
        controller: 'DivisionsController as ctrl'
      })
      .state('league.edit', {
        url: 'edit/:id',
        templateUrl: 'division/edit.html',
        controller: 'DivisionsController as ctrl'
      });

    $urlRouterProvider.otherwise("/");
  });