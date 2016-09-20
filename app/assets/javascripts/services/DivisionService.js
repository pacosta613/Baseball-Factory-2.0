function DivisionService($http, $q){
  return({
    getDivisions: getDivisions,
    addDivision: addDivision,
    removeDivision: removeDivision,
    editDivision: editDivision
  });

  var point = '/divisions.json';

  function getDivisions(){
    var request = $http({
      method: 'get',
      url: point,
      params: {
        action: 'get'
      }
    });

    return request.then(handleSuccess, handleError);
  }

  function addDivision(division){
    var request = $http({
      method: 'post',
      url: point,
      data: {
        division: division
      }
    });
    return request.then(handleSuccess, handleError);
  }

  function editDivision(division){
    var request = $http({
      method: 'put',
      url: point + "/" + division.id + ".json",
      data: {
        division: division.name
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

  function handleError(){

  }

}

angular
  .module('app')
  .service('DivisionService', DivisionService);