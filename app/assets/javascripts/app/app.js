angular
  .module('app', ['ui.router', 'templates'])
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
        url: 'divisions/:id',
        templateUrl: 'division/show.html',
        controller: 'DivisionsController as ctrl'
      })
      .state('league.edit', {
        url: 'edit/:id',
        templateUrl: 'division/edit.html',
        controller: 'DivisionsController as ctrl'
      })
      .state('league.teams', {
        url: "teams",
        templateUrl: 'team/teams.html',
        controller: 'TeamsController as ctrl'
      })
      .state('league.new-team', {
        url: 'new-team',
        templateUrl: 'team/new.html',
        controller: 'TeamsController as ctrl'
       })
     .state('league.edit-team', {
        url: 'edit-team/:id',
        templateUrl: 'team/edit.html',
        controller: 'TeamsController as ctrl'
       })
     .state('league.team', {
        url: 'team/:id',
        templateUrl: 'team/show.html',
        controller: 'TeamsController as ctrl'
       })
     .state('league.players', {
        url: "players",
        templateUrl: 'player/players.html',
        controller: 'PlayersController as ctrl'
       })
     .state('league.player', {
        url: 'player/:id',
        templateUrl: 'player/show.html',
        controller: 'PlayersController as ctrl'
       })
     .state('league.new-player', {
        url: 'new-player',
        templateUrl: 'player/new.html',
        controller: 'PlayersController as ctrl'
       })
     .state('league.edit-player', {
        url: 'edit-player/:id',
        templateUrl: 'player/edit.html',
        controller: 'PlayersController as ctrl'
       });
    $urlRouterProvider.otherwise("/about");
  });