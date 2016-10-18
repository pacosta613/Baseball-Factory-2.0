function PlayersController(PlayerService, $stateParams, $state){
  var ctrl = this;
  ctrl.editFlag = false;
  ctrl.selectedId = 0;
  ctrl.loadPlayers = loadPlayers;
  ctrl.editPlayer = editPlayer;
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

  function removePlayer(player){
    PlayerService.removePlayer(player.id)
      .then(function(){
        $state.go($state.current, {}, {reload: true});
      })
  }

  function removeCurrentPlayer(){
    PlayerService.removePlayer(ctrl.player.id)
      .then(function(){
        $state.go('league.players', {}, {reload: true});
      })
  }

  function editPlayer(id){
    ctrl.editFlag = true;
    ctrl.selectedId = id;
  }

}

angular
  .module('app')
  .controller("PlayersController", PlayersController);