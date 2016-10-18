(function () {
  
  'use strict';

  var editPlayerForm = {
    transclude: true,
    templateUrl: "components/player/edit-player-form.html",
    controller: EditPlayerFormController,
    bindings: {
      parentController: '=',
      playerId: '='
    }
  }

  function EditPlayerFormController(PlayerService, $http){
    var ctrl = this;
    ctrl.updatePlayer = updatePlayer;

    activate();

    function activate(){
      getPlayer(ctrl.playerId);
    }

    function getPlayer(id){
      PlayerService.getPlayer(id)
        .then(setPlayer)

        function setPlayer(data){
          ctrl.player = data;
        }
    }

    function updatePlayer(){
      PlayerService.updatePlayer(ctrl.player)
        .then(removeEditFlag)

        function removeEditFlag(){
          ctrl.parentController.editFlag = false;
          ctrl.parentController.selectedId = 0;
          ctrl.parentController.loadPlayers();
        }
    }
  }

  angular
    .module('app')
    .component('editPlayerForm', editPlayerForm)

}());