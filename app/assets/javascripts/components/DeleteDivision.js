function DeleteDivision(){

  return {
    templateUrl: "division/show.html",
    controllerAs: "ctrl",
    transclude: true, 
    bindings: {
      parentController: "=",
      division: "="
    },
    restrict: "E",
    controller: DivisionsController
  }

}

angular
  .module('app')
  .directive("deleteDivision", DeleteDivision);