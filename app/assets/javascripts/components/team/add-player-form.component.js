(function(){

  'use strict';

  var addPlayerForm = {
    transclude: true,
    templateUrl: 'components/team/add-player-form.html',
    controller: AddPlayerFormController
  };


  function AddPlayerFormController(TeamService, $state, $stateParams){
    var ctrl = this;

    ctrl.addPlayer = addPlayer;
    getTeam();
    function getTeam(){
      TeamService.getTeam($stateParams.id)
        .then(setTeam);

        function setTeam(data){ 
          ctrl.team = data
        }
    }

    function addPlayer(){
      ctrl.player.team_id = ctrl.team.id
      TeamService.addPlayers(ctrl.player)
        .then(function(){
          $state.go($state.current, {}, {reload: true});
        })
    }
  }

  angular 
    .module('app')
    .component("addPlayerForm", addPlayerForm)

}());