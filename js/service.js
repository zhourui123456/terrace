/**
 * Created by dream on 2017/5/24.
 */
app.directive("headers",function () {
    return {
        restrict:"ECMA",
        replace:true,
        templateUrl:"head.html",
        controller:function ($scope,alldata) {
            $scope.datas=alldata.fstdata
        }
    }
});

app.directive("amendPopup",function () {
    return {
        restrict:"ECMA",
        replace:true,
        templateUrl:"directive/confirmRoleMsg.html",
        controller:function ($scope,alldata) {

        }
    }
});
