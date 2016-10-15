function PlayersController(PlayerService, $stateParams){
  var ctrl = this;
  ctrl.players = loadPlayers();
  ctrl.player = getPlayer();

  function loadPlayers(){
    PlayerService.getPlayers()
    .then(function(players){
      ctrl.players = players;
    })
  }

  function getPlayer() {
    PlayerService.getPlayer($stateParams.id)
    .then(setPlayer)

    function setPlayer(data){
      return ctrl.player = data
    }
  }

}

angular
  .module('app')
  .controller("PlayersController", PlayersController);