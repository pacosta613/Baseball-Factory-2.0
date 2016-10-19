(function(){

  'use strict';

  var addDivisionForm = {
    transclude: true,
    templateUrl: "components/division/add-division-form.html",
    controller: AddDivisionFormController
  }

  function AddDivisionFormController(DivisionService, $http, $state){
    var ctrl = this;

    ctrl.addDivision = addDivision;

    function addDivision(){
      DivisionService.addDivision(ctrl.division)
        .then(function(data){
          ctrl.division = data;
          $state.go($state.current, {}, {reload: true});
        })
    }
  }

  angular
    .module('app')
    .component('addDivisionForm', addDivisionForm)

}());