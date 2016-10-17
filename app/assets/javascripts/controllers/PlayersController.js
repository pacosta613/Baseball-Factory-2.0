function PlayersController(PlayerService, $stateParams){
  var ctrl = this;
  ctrl.removePlayer = removePlayer;
  ctrl.removeCurrentPlayer = removeCurrentPlayer;

  activate();

  function activate(){
    if (!$stateParams.id){
      loadPlayers();
    } else if ($stateParams.id) {
      getPlayer();
    }
  }

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
      ctrl.player = data
    }
  }

  function removePlayer(){}

  function removeCurrentPlayer(){}

}

angular
  .module('app')
  .controller("PlayersController", PlayersController);