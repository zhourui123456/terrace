/**
 * Created by dream on 2017/5/24.
 */
app.config(function (alldata,$stateProvider,$urlRouterProvider) {
    alldata.fstdata.forEach(function (i) {
        $stateProvider
            .state(i.route,{
                url:"/"+i.route,
                templateUrl:"aside.html",
                controller:function ($scope,$stateParams,alldata) {
                    console.log($stateParams.self.id)
                    var newdata=alldata.secdata.filter(function (i) {
                        return i.parentid==$stateParams.self.id
                    })
                    console.log(newdata)
                    $scope.data=newdata
                    $scope.parentName=$stateParams.self.name
                    $scope.statueCon=false
                    $scope.statueConFn=function () {
                        $scope.statueCon=!$scope.statueCon
                    }
                },
                params:{
                    self:i
                }
            })
    })
  /*  alldata.secdata.forEach(function (i) {
        $stateProvider
            .state(i.route,{
                url:"/"+i.route,
                templateUrl: i.enName+".html",
                controller:function ($scope,$stateParams,alldata,pre,cutpage,$filter) {
                    var cutfn=function () {
                        $scope.data=alldata.fourdata
                        $scope.fileData=function () {
                            return $filter('filter')($scope.data,{role:$scope.roleName,state:$scope.statues})
                        };
                        console.log($scope.fileData())
//        ÿһҳ��ʾ�����ݳ���
                        $scope.maxLength=3
//        �����м�ҳ����ʾ�ĳ���,ֻ��Ϊ������
                        $scope.middlePage=5
                        cutpage($scope)
                        $scope.pageShow(1)
                        $scope.searchFn=function () {
                            console.log($scope.roleName)
                            console.log($scope.statues)
                            $scope.pageShow(1)
                        }
                        $scope.popupSH=false  //ɾ������Ŀ���
                        //    ɾ��
                        $scope.deleteFn=function (item) {
                            $scope.popupSH=true;
                            //ȷ����ִ�з���
                            $scope.okFn=function () {
                                //ͨ�����˺�������ҵ�ǰ��ʾҳ
                                var indexPage;
                                $scope.fileData().forEach(function (i,index) {
                                    switch (i.ID){
                                        case item.ID:{
                                            indexPage= Math.ceil(index/$scope.maxLength)
                                        }
                                    }
                                })
                                //    ��ԭʼ�����Ͻ������ݵļ���
                                $scope.data.forEach(function (i,index) {
                                    switch (i.ID){
                                        case item.ID:{
                                            $scope.data.splice(index,1)
                                        }
                                    }
                                })

                                $scope.pageShow(indexPage)
                                $scope.popupSH=false

                            }
                            //ȡ����ִ�з���
                            $scope.noFn=function () {
                                $scope.popupSH=false
                            }

                        }

                        //    �޸Ĳ���
                        $scope.amendSH=false;
                        $scope.amendFn=function (item) {
                            $scope.amendSH=true;//�����޸ĵ�������ʾ
                            $scope.start="����"
                            $scope.stop="����"
                            $scope.statueRole=item.state
                            $scope.popupData={}
                            for(i in item){
                                $scope.popupData[i]=item[i]
                            }
                            $scope.changeStateFn=function (i) {
                                $scope.statueRole=i
                                console.log($scope.statueRole)
                            }
                            $scope.amendOk=function () {

                                $scope.data.forEach(function (i,index) {
                                    switch (i.ID){
                                        case $scope.popupData.ID:{

                                            for(j in $scope.popupData){
                                                $scope.data[index][j]=$scope.popupData[j]
                                            }
                                            $scope.data[index].state=$scope.statueRole
                                        }break
                                    }
                                })
                                $scope.amendSH=false;
                            }
                            $scope.amendNo=function () {
                                $scope.amendSH=false;
                            }

                        }

                    }
                    switch (i.id){
                        case 22:{
                            //��ɫ����
                            cutfn()
                        }break;
                        case 23:{
                            $scope.data=alldata.fourdata
                        }break;
                    }

                },
                // controller:i.enName,
                resolve:{
                    pre:function ($q,$http,$stateParams) {
                        // $http.get("/")
                        console.log($stateParams.id)
                    }
                },
                params:{
                    id:""
                }
            })
    })*/

});
