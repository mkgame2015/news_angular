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
app.controller("listCtrl",function($scope,$http,apiUrl){
	$scope.page = 1;
	$scope.channelId = '5572a109b3cdc86cf39001db';
     $http.jsonp("news.php",{
     	params:{
			page:$scope.page,
			channelId:'5572a109b3cdc86cf39001db',
			channelName:'国内最新',
			callback:'JSON_CALLBACK'
     	}
     }).success(function(data){
     	console.log(data);
     })
});
app.value('apiUrl','http://localhost/news.php');
//app.value('apiUrl','http://localhost:12345/news/dist/js/test.json');
//设置api请求的方法，发布时候用jsonp，get只是请求用来请求测试的json文件～
app.value('apiMethod','get');
//测试数据
//var news = json;
//console.log(news);