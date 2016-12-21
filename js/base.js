var app = angular.module("newsApp", ["ui.router", "ng.post"]);
app.config(function($stateProvider) {
	$stateProvider.state("index", {
			url: "/index",
			templateUrl: "template/index.html",
			controller: "indexCtrl"
		}).state("index.list", {
			url: "/list",
			templateUrl: "template/list.html",
			controller: "listCtrl"
		})
		//	.state("index.secondlist", {
		//		url: "/secondlis",
		//		templateUrl: "template/secondlis.html",
		//		controller: "secondlisCtrl"
		//	}).state("index.thirdlist", {
		//		url: "/thirdlist",
		//		templateUrl: "template/thirdlis.html",
		//		controller: "thirdlisCtrl"
		//	})
})
app.controller("indexCtrl", function($scope, $rootScope, $window) {
	//  $rootScope.id = id;
	$scope.tabs = [{
		id: 1,
		name: "国内焦点",
		url: "#/index/list"
	}, {
		id: 2,
		name: "国际焦点",
		url: "#/index/secondlist"
	}, {
		id: 3,
		name: "游戏焦点",
		url: "#/index/thirdlist"
	}, {
		id: 4,
		name: "登录",
		url: "#/login"
	}];
	$scope.toggleTab = function(id, url) {
		$rootScope.id = id;
		$window.location.href = url;
	}
})
app.controller("listCtrl", function($scope, $http) {
	$scope.page = 1;
	$scope.newslist = [];
	//定义加载新闻函数
	var load = function(){
			$http.jsonp("news2.php", {
				params: {
					page: $scope.page,
					channelId: '5572a108b3cdc86cf39001cd',
					channelName: '国内焦点',
					callback: 'JSON_CALLBACK'
				}
			}).success(function(data) {
				console.log(data);
				$scope.newslist = $scope.newslist.concat(data.showapi_res_body.pagebean.contentlist);
				console.log($scope.newslist);
			})
	}	
		//第一次加载
	load();
	//定义加载更多的函数
	$scope.loadmore = function() {
		$scope.page++;
		load();
	}
});