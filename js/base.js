var app = angular.module("newsApp",["ui.router","ng.post"]);
app.config(function($stateProvider){
    $stateProvider.state("index",{
        url:"/index",
        templateUrl:"template/index.html",
        controller:"indexCtrl"
    }).state("index.list",{
        url:"/list",
        templateUrl:"template/list.html",
        controller:"listCtrl"
    })
})
app.controller("indexCtrl",function($scope,$rootScope,$window){
//  $rootScope.id = id;
    $scope.tabs = [{
        id:1,
        name:"国内最新",
        
        url:"#/index/list"
    },{
        id:2,
        name:"国际焦点",
        url:"#/index/secondlist"
    },{
        id:3,
        name:"游戏焦点",
        url:"#/index/thirdlist"
    },{
        id:4,
        name:"登录",
        url:"#/login"
    }];
    $scope.toggleTab = function(id,url){
        $rootScope.id = id ;
        $window.location.href = url;
    }
})
app.controller("listCtrl",function($scope,$http){
        
})