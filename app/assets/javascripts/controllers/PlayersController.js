function PlayersController(PlayerService){
  var ctrl = this;
  ctrl.players = loadPlayers();

  function loadPlayers(){
    PlayerService.getPlayers()
    .then(function(players){
      ctrl.players = players;
    })
  }

}

angular
  .module('app')
  .controller("PlayersController", PlayersController);