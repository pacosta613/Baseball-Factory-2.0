function PlayerService($http){

  return ({
    getPlayers: getPlayers,
    getPlayer: getPlayer,
    removePlayer: removePlayer,
    updatePlayer: updatePlayer
  });

  function getPlayers(){
    return $http.get('/players.json')
      .then(handleSuccess)
      .catch(handleError);
  }

  function getPlayer(id){
    return $http.get('/players/' + id + '.json')
      .then(handleSuccess)
      .catch(handleError);
  }

  function removePlayer(id){
    var request = $http({
      method: 'delete',
      url: '/players/' + id + '.json',
      params: {
        action: 'delete'
      },
      data: {
        id: id
      }
    });
    return request.then(handleSuccess, handleError);
    console.log(handleError);
  }

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