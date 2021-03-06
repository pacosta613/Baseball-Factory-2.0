function TeamsController(TeamService, $scope, $location, $state, $stateParams) {
  var ctrl = this;
  ctrl.addFlag = false;
  ctrl.editFlag = false;
  ctrl.selectedId = 0;
  ctrl.removeTeam = removeTeam;
  ctrl.loadTeams = loadTeams
  ctrl.removeCurrentTeam = removeCurrentTeam;
  ctrl.addPlayer = addPlayer;
  ctrl.editTeam = editTeam;

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
        ctrl.team = data
      }
  }

  function loadTeams(){
    TeamService.getTeams()
      .then(setTeam)
        
      function setTeam(data){
        ctrl.teams = data;
      };
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

  function addPlayer(){
    ctrl.addFlag = true;
  }

  function editTeam(id){
    ctrl.editFlag = true;
    ctrl.selectedId = id;
  }
}

angular
  .module('app')
  .controller('TeamsController', TeamsController)