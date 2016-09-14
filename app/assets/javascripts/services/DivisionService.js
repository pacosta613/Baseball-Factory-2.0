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

  function addDivision(name){
    var request = $http({
      method: 'post',
      url: '/divisions.json',
      data: {
        name: name
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

  function handleSuccess(reponse){
    return reponse.data;
  }

  function handleError(){

  }

}

angular
  .module('app')
  .service('DivisionService', DivisionService);