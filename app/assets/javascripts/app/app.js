angular
  .module('app', ['ui.router', 'templates', 'ngMessages'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state("league", {
        url: '/',
        templateUrl: 'home.html',
        controller: 'DivisionsController as ctrl'
      })
      .state("about", {
        url: '/about',
        templateUrl: 'about.html'
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
        url: 'divisions/:id/teams',
        templateUrl: 'division/show.html',
        controller: 'DivisionsController as ctrl'
      })
      .state('league.teams', {
        url: "teams",
        templateUrl: 'team/teams.html',
        controller: 'TeamsController as ctrl'
      })
     .state('league.team', {
        url: 'teams/:id/players',
        templateUrl: 'team/show.html',
        controller: 'TeamsController as ctrl'
       })
     .state('league.players', {
        url: "players",
        templateUrl: 'player/players.html',
        controller: 'PlayersController as ctrl'
       })
     .state('league.player', {
        url: 'players/:id',
        templateUrl: 'player/show.html',
        controller: 'PlayersController as ctrl'
       })
    $urlRouterProvider.otherwise("/about");
  });