function PlayerService($http){

  return ({
    getPlayers: getPlayers,
    getPlayer: getPlayer,
    addPlayer: addPlayer,
    removePlayer: removePlayer,
    updatePlayer: updatePlayer
  });

  function getPlayers(){

  }

  function getPlayer(){}

  function addPlayer(){}

  function removePlayer(){}

  function updatePlayer(){}

}

angular
  .module('app')
  .service('PlayerService', PlayerService);