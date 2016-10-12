function TeamsController(TeamService, $scope, $location, $state, $stateParams) {
  var ctrl = this;
  ctrl.loadTeams = loadTeams;
  ctrl.addTeam = addTeam;
  ctrl.removeTeam = removeTeam;
  ctrl.editTeam = editTeam;

  loadTeams();

  function loadTeams(){
    TeamService.getTeams()
      .then(function(teams){
        applyTeams(teams);
      });
  };

  function applyTeams(newTeam){
    ctrl.teams = newTeam;
  };

  function addTeam(){
    TeamService.addTeam(ctrl.team)
      .then(function(){
        $location.path('teams');
      });
  };

  function removeTeam(team){
    TeamService.removeTeam(team.id)
      .then(function(){
        $state.go($state.current, {}, {reload: true});
      });
  };

  function editTeam(){

  }
}

angular
  .module('app')
  .controller('TeamsController', TeamsController)