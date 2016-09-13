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
}

angular
  .module('app')
  .controller('DivisionsController', DivisionsController);