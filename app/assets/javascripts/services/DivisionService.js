function DivisionService($http, $q){
  return({
    getDivisions: getDivisions
  });

  function getDivisions(){
    var request = $http({
      method: 'get',
      url: '/divisions.json',
      params: {
        action: 'get'
      }
    });

    return (request.then(handleSuccess, handleError));
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