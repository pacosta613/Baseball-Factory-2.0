function DivisionsController(DivisionService, $scope){
  var ctrl = this;
  loadDivisions();

  function loadDivisions(){
    DivisionService.getDivisions()
      .then(function(divisions){
        applyDivisions(divisions);
      })
  };

  function applyDivisions(newDivision){
    $scope.divisions = newDivision;
  };

  $scope.addDivision = function(){
    DivisionService.addDivision($scope.division)
      .then(loadDivisions, function(errorMessage){
        console.log(errorMessage);
      });
    $scope.division = '';
  }
}

angular
  .module('app')
  .controller('DivisionsController', DivisionsController);