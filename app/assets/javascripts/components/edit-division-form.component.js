(function() {

  'use strict';

   var editDivisionForm = {
    transclude: true, 
    templateUrl: 'components/edit-division-form.html',
    bindings: {
      parentController: "=",
      divisionId: "="
    },
    controller: EditDivisionFormController
   };

   function EditDivisionFormController($http, DivisionService) {
    var ctrl = this;

    ctrl.updateDivision = updateDivision;

    activate();

    function activate() {
      getDivision(ctrl.divisionId);
    }

    function getDivision(id) {
      return DivisionService.getDivision(id) 
       .then(setDivision);

      function setDivision(data) {
        console.log(data)
        return ctrl.division = data;
      }
    }

    function updateDivision() {
      return DivisionService.updateDivision(ctrl.division) 
       .then(removeEditFlag);

      function removeEditFlag() {
        ctrl.parentController.editFlag = false;
        ctrl.parentController.selectedId = 0;
        ctrl.parentController.loadDivisions();
      }
    }
   }

   angular
    .module('app')
    .component('editDivisionForm', editDivisionForm)

}());