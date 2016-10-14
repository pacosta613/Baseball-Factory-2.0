function DivisionService($http, $q){
  return({
    getDivisions: getDivisions,
    addDivision: addDivision,
    removeDivision: removeDivision,
    updateDivision: updateDivision,
    getDivision: getDivision,
    addTeam: addTeam
  });

  function getDivisions(){
    return $http.get("/divisions.json")
      .then(handleSuccess)
      .catch(handleError);
  }

  function getDivision(id) {
    return $http.get('/divisions/' + id)
     .then(handleSuccess)
     .catch(handleError);
  } 

  function addDivision(division){
    var request = $http({
      method: 'post',
      url: '/divisions.json',
      data: {
        division: division
      }
    });
    return request.then(handleSuccess, handleError);
  }

  function addTeam(team){
    var request = $http({
      method: 'post',
      url: '/divisions/' + team.division_id + '.json',
      data: {
        team: team
      }
    });

    return request.then(handleSuccess, handleError)
  }

  function updateDivision(division){
    var request = $http({
      method: 'put',
      url: '/divisions' + "/" + division.id + ".json",
      data: {
        division: division
      }
    });
    return request.then(handleSuccess, handleError)
  }

  function removeDivision(id){
    var request = $http({
      method: 'delete',
      url: "/divisions/" + id + ".json",
      params: {
        action: 'delete'
      },
      data: {
        id: id
      }
    });
    return request.then(handleSuccess, handleError);
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
  .service('DivisionService', DivisionService);