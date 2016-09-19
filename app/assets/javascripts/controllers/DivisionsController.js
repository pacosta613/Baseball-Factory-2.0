function DivisionsController(DivisionService, $scope, $location, $state){
  var ctrl = this;
  // $scope.division = {
  //       name: ''
  //     };
  //$scope.divisions = divisions.data;
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
      .then(function(result){
        $location.path('divisions');
      });
  }
}

angular
  .module('app')
  .controller('DivisionsController', DivisionsController);