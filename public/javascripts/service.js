var app = angular.module('ServiceModule',[]);
app.factory('todoService', function ($http) {
    var res = {};
    /**
     * 添加数据
     * @param dataq
     * @returns {*}
     */
    res.create = function (dataq) {
        var options = {
            url: '/todos/add',
            method: "POST",
            data: dataq
        };
        return  $http(options);
    };
    /**
     * 删除数据
     * @param ids
     * @returns {*}
     */
    res.delete = function (ids) {
        var options = {
            url: '/todos/delete',
            method: "POST",
            data: {ids: ids}
        };
        return  $http(options);
    };
    /***
     * 列表的数据获得
     * @returns {*}
     */
    res.list = function () {
        var options = {
            url: '/todos/',
            method: "GET"
        };
        return  $http(options);
    };
    return res;
});
