function TeamsController(TeamService, $scope, $location, $state, $stateParams) {
  var ctrl = this;
  loadTeams();
  ctrl.loadTeams = loadTeams;
  ctrl.addTeam = addTeam;
  ctrl.removeTeam = removeTeam;
  ctrl.editTeam = editTeam;

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

  function removeTeam(){
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