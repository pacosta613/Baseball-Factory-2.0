function TeamsController(TeamService, $scope, $location, $state, $stateParams) {
  var ctrl = this;
  ctrl.removeTeam = removeTeam;
  ctrl.editTeam = editTeam;
  ctrl.removeCurrentTeam = removeCurrentTeam;

  activate();

  function activate(){
    if (!$stateParams.id){
      loadTeams();
    } else if ($stateParams.id){
      getTeam();
    }
  }

  function getTeam(){
    TeamService.getTeam($stateParams.id)
      .then(setTeam);

      function setTeam(data){ 
        return ctrl.team = data
      }
  }

  function loadTeams(){
    TeamService.getTeams()
      .then(function(teams){
        ctrl.teams = teams;
      });
  };

  function removeTeam(team){
    TeamService.removeTeam(team.id)
      .then(function(){
        $state.go($state.current, {}, {reload: true});
      });
  };

  function removeCurrentTeam(){
    TeamService.removeTeam(ctrl.team.id)
      .then(function(){
        $state.go("league.teams", {}, {reload: true});
      });
  };

  function editTeam(){

  }
}

angular
  .module('app')
  .controller('TeamsController', TeamsController)