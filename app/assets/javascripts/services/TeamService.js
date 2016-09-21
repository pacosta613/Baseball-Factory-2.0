function TeamService($http, $q) {

  return({
    getTeams: getTeams,
    addTeam: addTeam,
    removeTeam: removeTeam,
    updateTeam: updateTeam,
    getTeam: getTeam
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

  function addTeam(team){
    var request = $http({
      method: 'post',
      url: '/teams.json',
      data: {
        team: team
      }
    });
    return request.then(handleSuccess, handleError)
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

  function handleSuccess(response){
    return response.data;
  }

  function handleError(error){
    console.log(error)
  }

}

angular
  .module('app')
  .service('TeamService', TeamService);