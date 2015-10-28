var app = angular.module('AllCtrl', []);
app.controller('todoCtrl', function ($scope, todoService) {
    $scope.todos = [];
    $scope.filtertodos = [];
    $scope.formdata = {};
    $scope.loading = true;
    todoService.list().success(function (datalist) {
        $scope.Alltodos = $scope.todos = datalist;
        $scope.loading = false;
    });
    $scope.createTodo = function () {
        console.log($scope.formdata.text);
        if ($scope.formdata.text) {
            todoService.create($scope.formdata).success(function (resdata) {
                $scope.Alltodos = $scope.todos = resdata;
                $scope.formdata = {};
            });
        }
    };
    /***
     * 批量删除事件
     */
    $scope.batchDelete = function () {
        var ids = [];
        var checkboxs = $("input[type=checkbox]");
        for (var i = 0; i < checkboxs.length; i++) {
            if (checkboxs[i].checked) {
                ids.push(checkboxs[i].value);
            }
        }
        if (ids) {
            todoService.delete(ids).success(function (resdata) {
                $scope.Alltodos = $scope.todos = resdata;
            });
        }
    };
    /***
     * 删除事件
     * @param idd
     */
    $scope.delete = function (idd) {
        var ids = [];
        ids.push(idd);
        todoService.delete(ids).success(function (resdata) {
            $scope.Alltodos = $scope.todos = resdata;
        });
    };
    /****
     * 过滤的函数
     */
    $scope.$watch('keyword', function () {
        $scope.todos = $scope.Alltodos.filter(function (todo) {
            return todo.text.indexOf($scope.keyword) != -1;
        });
    });
    /***
     * 修改的方法
     * @param iddd
     */
    $scope.edit = function (iddd) {

    };
});