function TeamService($http) {

  return({
    getTeams: getTeams,
    removeTeam: removeTeam,
    updateTeam: updateTeam,
    getTeam: getTeam,
    addPlayers: addPlayers
  });

  function getTeam(id){
    return $http.get('/teams/' + id)
      .then(handleSuccess)
      .catch(handleError);
  }

  function getTeams(){
    return $http.get('/teams.json')
      .then(handleSuccess)
      .catch(handleError);
  }

  function updateTeam(team){
    var request = $http({
      method: 'put',
      url: '/teams/' + team.id + ".json",
      data: {
        team: team
      }
    });
    return request.then(handleSuccess, handleError)
  }

  function removeTeam(id){
    var request = $http({
      method: 'delete',
      url: '/teams/' + id + ".json",
      params: {
        action: 'delete'
      },
      data: {
        id: id
      }
    });
    return request.then(handleSuccess, handleError)
  }

  function addPlayers(player){
    var request = $http({
      method: 'POST',
      url: "/teams/" + player.team_id + "/players.json",
      data: {
        player: player
      }
    });
    return request.then(handleSuccess, handleError)
  }

  function handleSuccess(response){
    return response.data;
  }

  function handleError(error){
    console.log(error);
  }

}

angular
  .module('app')
  .service('TeamService', TeamService);