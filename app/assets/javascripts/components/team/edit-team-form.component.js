(function () {

  'use strict';

  var editTeamForm = {

    transclude: true,
    templateUrl: "components/team/edit-team-form.html",
    controller: EditTeamFormController,
    bindings: {
      parentController: '=',
      teamId: '='
    }
  }

  function EditTeamFormController(TeamService, $http){
    var ctrl = this;
    ctrl.updateTeam = updateTeam;

    activate()

    function activate(){
      getTeam(ctrl.teamId)
    }

    function getTeam(id){
      TeamService.getTeam(id)
        .then(setTeam)

        function setTeam(data){
          ctrl.team = data;
        }
    }

    function updateTeam(){
      TeamService.updateTeam(ctrl.team)
        .then(removeEditFlag)

        function removeEditFlag(){
          ctrl.parentController.editFlag = false;
          ctrl.parentController.selectedId = 0;
          ctrl.parentController.loadTeams();
        }
    }
    
  }

  angular
    .module('app')
    .component('editTeamForm', editTeamForm)

}());