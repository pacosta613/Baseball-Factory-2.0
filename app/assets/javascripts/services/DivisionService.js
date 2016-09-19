function DivisionService($http, $q){
  return({
    getDivisions: getDivisions,
    addDivision: addDivision,
    removeDivision: removeDivision
  });

  function getDivisions(){
    var request = $http({
      method: 'get',
      url: '/divisions.json',
      params: {
        action: 'get'
      }
    });

    return request.then(handleSuccess, handleError);
  }

  function addDivision(division){
    var request = $http({
      method: 'post',
      url: '/divisions',
      data: {
        division: division
      }
    });
    return request.then(handleSuccess, handleError);
  }

  function removeDivision(id){
    var request = $http({
      method: 'delete',
      url: "/divisions.json",
      params: {
        action: 'add'
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