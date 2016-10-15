function PlayerService($http){

  return ({
    getPlayers: getPlayers,
    getPlayer: getPlayer,
    addPlayer: addPlayer,
    removePlayer: removePlayer,
    updatePlayer: updatePlayer
  });

  function getPlayers(){
    return $http.get('/players.json')
      .then(handleSuccess)
      .catch(handleError);
  }

  function getPlayer(){}

  function addPlayer(){}

  function removePlayer(){}

  function updatePlayer(){}

  function handleSuccess(response){
    return response.data;
  }

  function handleError(error){
    console.log(error);
  }

}

angular
  .module('app')
  .service('PlayerService', PlayerService);