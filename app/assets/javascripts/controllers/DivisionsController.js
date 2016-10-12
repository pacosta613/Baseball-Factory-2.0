function DivisionsController(DivisionService, $scope, $location, $state, $stateParams){
  var ctrl = this;

  loadDivisions();

  ctrl.editFlag = false;
  ctrl.selectedId = 0;

  ctrl.loadDivisions = loadDivisions;
  ctrl.addDivision = addDivision;
  ctrl.removeDivision = removeDivision;
  ctrl.editDivision = editDivision;

  function loadDivisions(){
    DivisionService.getDivisions()
      .then(function(divisions){
        applyDivisions(divisions);
      })
  };

  function applyDivisions(newDivision){
    ctrl.divisions = newDivision;
  };

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

}

angular
  .module('app')
  .controller('DivisionsController', DivisionsController)
  .controller('DivisionController', function DivisionController(division, DivisionService, $state, TeamService){
    var ctrl = this;
    //ctrl.team = team;
    ctrl.division = division;
    ctrl.removeDivision = removeDivision;
    ctrl.addTeam = addTeam;

    function removeDivision(){
      DivisionService.removeDivision(ctrl.division.id)
        .then(function(){
           $state.go("league.divisions", {}, {reload: true});
        });
    }

    function addTeam(){
      ctrl.team.division_id = division.id;
      TeamService.addTeam(ctrl.team)
        .then(function(team){
          $state.go($state.current, {}, {reload: true});
        });
    }

  });