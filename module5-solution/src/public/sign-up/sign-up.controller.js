(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService','MenuService'];
function SignUpController(UserService, MenuService) {
    var $ctrl = this;

    $ctrl.user = {};
    $ctrl.message = null;
    $ctrl.errorClass = null;
    $ctrl.errorDish = false;

    $ctrl.submit = submit;
    function submit() {
        MenuService.getMenuItem($ctrl.user.dish).then(function(response) {
           $ctrl.user.dishDetail = response;
           UserService.setUser($ctrl.user);
           $ctrl.message = 'Your information has been saved.';
           $ctrl.errorClass = 'alert-success';
        }, function(response) {
           $ctrl.message = 'No such menu number exists.';
           $ctrl.errorClass = 'alert-danger';
        });
    }

    $ctrl.validateDish = validateDish;
    function validateDish() {
        MenuService.getMenuItem($ctrl.user.dish).then(function(response) {
           $ctrl.errorDish = false;
        }, function(response) {
           $ctrl.errorDish = true;
        });
    }

 }

})();
