function DivisionsController(DivisionService, $scope, $location, $state, $stateParams){
  var ctrl = this;

  ctrl.editFlag = false;
  ctrl.selectedId = 0;
  ctrl.loadDivisions = loadDivisions;
  ctrl.addDivision = addDivision;
  ctrl.removeDivision = removeDivision;
  ctrl.editDivision = editDivision;
  ctrl.removeCurrentDivision = removeCurrentDivision;
  ctrl.addTeam = addTeam;

  activate();

  function activate() {
    if (!$stateParams.id){      
      loadDivisions();
    } else if ($stateParams.id){
      getDivision();
    }
  }

  function loadDivisions(){
    DivisionService.getDivisions()
      .then(function(divisions){
        applyDivisions(divisions);
      })
  }

  function applyDivisions(newDivision){
    ctrl.divisions = newDivision;
  }

  function getDivision(){
    return DivisionService.getDivision($stateParams.id)
      .then(setDivision);

      function setDivision(data) {
        return ctrl.division = data;
      }
  }

  function addDivision(){
    DivisionService.addDivision(ctrl.division)
      .then(function(){
        $state.go("league.divisions", {}, {reload: true});
      });
  }

  function removeDivision(division){
    DivisionService.removeDivision(division.id)
      .then(function(){
         $state.go($state.current, {}, {reload: true});
      });
  }

  function editDivision(id){
    ctrl.editFlag = true;
    ctrl.selectedId = id;
    // //debugger
    // DivisionService.editDivision($scope.division)
    //   .then(function(){
    //     $state.go($state.current, {}, {reload: true});
    //   })
  }

  function removeCurrentDivision(){
    DivisionService.removeDivision(ctrl.division.id)
      .then(function(){
         $state.go("league.divisions", {}, {reload: true});
      });
  }

  function addTeam(){
    ctrl.team.division_id = ctrl.division.id;
    DivisionService.addTeam(ctrl.team)
      .then(function(team){
        $state.go($state.current, {}, {reload: true});
      });
  }

}

angular
  .module('app')
  .controller('DivisionsController', DivisionsController);