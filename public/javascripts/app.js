var app = angular.module('todoApp', []);
app.controller('todoCtrl', function ($scope) {
    $scope.todos = ['a','b'];
    $scope.count = $scope.todos.length;
});
