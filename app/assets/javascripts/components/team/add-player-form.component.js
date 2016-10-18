(function(){

  'use strict';

  var addPlayerForm = {
    transclude: true,
    templateUrl: 'components/team/add-player-form.html',
    controller: AddPlayerFormController
  };


  function AddPlayerFormController(TeamService, $state){
    var ctrl = this;

    ctrl.addPlayer = addPlayer;

    function addPlayer(){
      debugger
      ctrl.player.team_id = ctrl.team.id
      debugger
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