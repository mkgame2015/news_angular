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
	}).state("detail", {
		url: "/detail/:channelIdx/:channelId/:nid",
		templateUrl: "template/detail.html",
		controller: "detailCtrl"
	}).state("index.secondlist", {
		url: "/secondlist",
		templateUrl: "template/secondlist.html",
		controller: "secondlistCtrl"
	}).state("index.thirdlist", {
		url: "/thirdlist",
		templateUrl: "template/thirdlist.html",
		controller: "thirdlistCtrl"
	}).state("index.fourthlist", {
		url: "/fourthlist",
		templateUrl: "template/fourthlist.html",
		controller: "fourthlistCtrl"
	});
});

app.controller("indexCtrl", function($scope, $rootScope, $window) {
	//  $rootScope.id = id;
	$scope.tabs = [{
			id: 1,
			name: "国内焦点",
			url: "#/index/list"
		}, {
			id: 2,
			name: "科技焦点",
			url: "#/index/secondlist"
		}, {
			id: 3,
			name: "游戏焦点",
			url: "#/index/thirdlist"
		},
		{
			id: 4,
			name: "娱乐焦点",
			url: "#/index/fourthlist"
		}
		//	{
		//		id: 4,
		//		name: "登录",
		//		url: "#/login"
		//	}
	];
	//定义导航栏点击函数
	$scope.toggleTab = function(id, url) {
		$rootScope.id = id;
		$window.location.href = url;
	}
});

app.controller("listCtrl", function($scope, $http, $window, swiperImg) {
	//返回顶层的默认隐藏
	$scope.topShow = false;
	//加载中样式默认状态
	$scope.isShow = true;
	//默认隐藏排序选项
	$scope.sortShow = false;
	//定义排序标准,按时间排序
	$scope.type = 'pubDate';
	//定义排序类型 ,
	$scope.switchCp = false;
	//定义搜索栏起始状态
	$scope.issearch = false;
	//定义获取新闻起始页
	$scope.page = 1;
	//定义存储新闻数组
	$scope.newslist = [];
	$scope.channelId = '5572a108b3cdc86cf39001cd';
	$scope.channelIdx = 1;
	//定义加载新闻函数
	var load = function() {
			$http.jsonp("news2.php", {
				params: {
					page: $scope.page,
					channelId: $scope.channelId,
					channelName: '国内焦点',
					callback: 'JSON_CALLBACK'
				}
			}).success(function(data) {
				$scope.isShow = true;
				console.log(data);
				$scope.newslist = $scope.newslist.concat(data.showapi_res_body.pagebean.contentlist);
				console.log($scope.newslist.length)
				angular.forEach($scope.newslist, function(data, index) {
					data.nid = index;
				});
				console.log($scope.newslist);
				//				console.log($scope.newslist);
				//定义轮播图获取函数
				$scope.swiperImgs = swiperImg.getImgs($scope.newslist);
				//				console.log($scope.swiperImgs);
			})
		}
		//第一次加载
	load();
	//定义加载更多的函数
	$scope.loadmore = function() {
			$scope.topShow = true;
			$scope.isShow = false;
			$scope.page++;
			load();
		}
		//定义搜索
	$scope.search = function() {
		$scope.issearch = true;
	};
	$scope.searchClear = function() {
		$scope.issearch = false;
	};
	//返回页面顶端的函数定义
	$scope.goPageTop = function() {
		$window.scrollTo(0, 0);
		$scope.topShow = false;

	}
});
  
app.controller("secondlistCtrl", function($scope, $http, $window, swiperImg) {
	//返回顶层的默认隐藏
	$scope.topShow = false;
	//加载中样式默认状态
	$scope.isShow = true;
	//默认隐藏排序选项
	$scope.sortShow = false;
	//定义排序标准,按时间排序
	$scope.type = 'pubDate';
	//定义排序类型 ,
	$scope.switchCp = false;
	//定义搜索栏起始状态
	$scope.issearch = false;
	//定义获取新闻起始页
	$scope.page = 1;
	//定义存储新闻数组
	$scope.newslist = [];
	$scope.channelId = '5572a108b3cdc86cf39001d9';
	$scope.channelIdx = 2;
	//定义加载新闻函数
	var load = function() {
			$http.jsonp("news2.php", {
				params: {
					page: $scope.page,
					channelId: $scope.channelId,
					channelName: '科技焦点',
					callback: 'JSON_CALLBACK'
				}
			}).success(function(data) {
				$scope.isShow = true;
				console.log(data);
				$scope.newslist = $scope.newslist.concat(data.showapi_res_body.pagebean.contentlist);
				console.log($scope.newslist.length)
				angular.forEach($scope.newslist, function(data, index) {
					data.nid = index;
				});
				console.log($scope.newslist);
				//				console.log($scope.newslist);
				//定义轮播图获取函数
				$scope.swiperImgs = swiperImg.getImgs($scope.newslist);
				//				console.log($scope.swiperImgs);
			})
		}
		//第一次加载
	load();
	//定义加载更多的函数
	$scope.loadmore = function() {
			$scope.topShow = true;
			$scope.isShow = false;
			$scope.page++;
			load();
		}
		//定义搜索
	$scope.search = function() {
		$scope.issearch = true;
	};
	$scope.searchClear = function() {
		$scope.issearch = false;
	};
	//返回页面顶端的函数定义
	$scope.goPageTop = function() {
		$window.scrollTo(0, 0);
		$scope.topShow = false;

	}
});
  
app.controller("thirdlistCtrl", function($scope, $http, $window, swiperImg) {
	//返回顶层的默认隐藏
	$scope.topShow = false;
	//加载中样式默认状态
	$scope.isShow = true;
	//默认隐藏排序选项
	$scope.sortShow = false;
	//定义排序标准,按时间排序
	$scope.type = 'pubDate';
	//定义排序类型 ,
	$scope.switchCp = false;
	//定义搜索栏起始状态
	$scope.issearch = false;
	//定义获取新闻起始页
	$scope.page = 1;
	//定义存储新闻数组
	$scope.newslist = [];
	$scope.channelId = '5572a108b3cdc86cf39001d6';
	$scope.channelIdx = 3;
	//定义加载新闻函数
	var load = function() {
			$http.jsonp("news2.php", {
				params: {
					page: $scope.page,
					channelId: $scope.channelId,
					channelName: '游戏焦点',
					callback: 'JSON_CALLBACK'
				}
			}).success(function(data) {
				$scope.isShow = true;
				console.log(data);
				$scope.newslist = $scope.newslist.concat(data.showapi_res_body.pagebean.contentlist);
				console.log($scope.newslist.length)
				angular.forEach($scope.newslist, function(data, index) {
					data.nid = index;
				});
				console.log($scope.newslist);
				//				console.log($scope.newslist);
				//定义轮播图获取函数
				$scope.swiperImgs = swiperImg.getImgs($scope.newslist);
				//				console.log($scope.swiperImgs);
			})
		}
		//第一次加载
	load();
	//定义加载更多的函数
	$scope.loadmore = function() {
			$scope.topShow = true;
			$scope.isShow = false;
			$scope.page++;
			load();
		}
		//定义搜索
	$scope.search = function() {
		$scope.issearch = true;
	};
	$scope.searchClear = function() {
		$scope.issearch = false;
	};
	//返回页面顶端的函数定义
	$scope.goPageTop = function() {
		$window.scrollTo(0, 0);
		$scope.topShow = false;

	}
});
  
app.controller("fourthlistCtrl", function($scope, $http, $window, swiperImg) {
	//返回顶层的默认隐藏
	$scope.topShow = false;
	//加载中样式默认状态
	$scope.isShow = true;
	//默认隐藏排序选项
	$scope.sortShow = false;
	//定义排序标准,按时间排序
	$scope.type = 'pubDate';
	//定义排序类型 ,
	$scope.switchCp = false;
	//定义搜索栏起始状态
	$scope.issearch = false;
	//定义获取新闻起始页
	$scope.page = 1;
	//定义存储新闻数组
	$scope.newslist = [];
	$scope.channelId = '5572a108b3cdc86cf39001d5';
	$scope.channelIdx = 4;
	//定义加载新闻函数
	var load = function() {
			$http.jsonp("news2.php", {
				params: {
					page: $scope.page,
					channelId: $scope.channelId,
					channelName: '娱乐焦点',
					callback: 'JSON_CALLBACK'
				}
			}).success(function(data) {
				$scope.isShow = true;
				console.log(data);
				$scope.newslist = $scope.newslist.concat(data.showapi_res_body.pagebean.contentlist);
				console.log($scope.newslist.length)
				angular.forEach($scope.newslist, function(data, index) {
					data.nid = index;
				});
				console.log($scope.newslist);
				//				console.log($scope.newslist);
				//定义轮播图获取函数
				$scope.swiperImgs = swiperImg.getImgs($scope.newslist);
				//				console.log($scope.swiperImgs);
			})
		}
		//第一次加载
	load();
	//定义加载更多的函数
	$scope.loadmore = function() {
			$scope.topShow = true;
			$scope.isShow = false;
			$scope.page++;
			load();
		}
		//定义搜索
	$scope.search = function() {
		$scope.issearch = true;
	};
	$scope.searchClear = function() {
		$scope.issearch = false;
	};
	//返回页面顶端的函数定义
	$scope.goPageTop = function() {
		$window.scrollTo(0, 0);
		$scope.topShow = false;

	}
});
  
app.controller("detailCtrl", function($scope, $http, $state) {
	//定义加载中弹框的默认状态
	$scope.isShow = false;
	//定义新闻图片放大默认状态
	$scope.galleryShow = false;
	//定义本条新闻的下标
	$scope.nid = parseInt($state.params.nid);
	//定义下一条条新闻的下标
	$scope.nidnext = $scope.nid + 1;
	//定义新闻频道id
	$scope.channelId = $state.params.channelId;
	//定义新闻频道对应下标
	$scope.channelIdx = parseInt($state.params.channelIdx);
	//定义返回新闻列表路由
	if($scope.channelIdx == 1) {
		$scope.listurl = "#/index/list";
	} else if($scope.channelIdx == 2) {
		$scope.listurl = "#/index/secondlist";
	} else if($scope.channelIdx == 3) {
		$scope.listurl = "#/index/thirdlist";
	} else if($scope.channelIdx == 4) {
		$scope.listurl = "#/index/fourthlist";
	};
	//定义显示大图函数
	$scope.showGallery = function(url) {
			$scope.galleryShow = true;
			$scope.bgurl = url;
			console.log($scope.bgurl);
		}
		//	$scope.page = parseInt($scope.nid/20) + 1;
		//定义加载新闻信息函数
	var load = function() {
			//获取本条新闻所在页面
			var page = parseInt($scope.nid / 20) + 1;
			//定义本条新闻在其页面中的下标
			var idx = $scope.nid % 20;
			//判定下一条条新闻是否在下一个新闻页面
			if(idx == 19) {
				$http.jsonp("news2.php", {
					params: {
						page: page,
						channelId: $scope.channelId,
						callback: 'JSON_CALLBACK'
					}
				}).success(function(data) {
					//获取本条新闻内容
					$scope.new = data.showapi_res_body.pagebean.contentlist[idx];
					//加载完成后,隐藏加载中
					$scope.isShow = true;
				});
				$http.jsonp("news2.php", {
					params: {
						page: page + 1,
						channelId: $scope.channelId,
						callback: 'JSON_CALLBACK'
					}
				}).success(function(data) {
					//获取下一条新闻内容
					$scope.newnext = data.showapi_res_body.pagebean.contentlist[0];
				});
			} else {
				$http.jsonp("news2.php", {
					params: {
						page: page,
						channelId: $scope.channelId,
						callback: 'JSON_CALLBACK'
					}
				}).success(function(data) {
					//获取本条新闻内容
					$scope.new = data.showapi_res_body.pagebean.contentlist[idx];
					//获取下一条新闻内容
					$scope.newnext = data.showapi_res_body.pagebean.contentlist[idx + 1];
					//加载完成后,隐藏加载中
					$scope.isShow = true;
				})
			}
		}
		//执行加载函数
	load();
});
//组件定义
//定义新闻列表组件
app.directive("newslist", function() {
	return {
		templateUrl: "directive/newslist.html"
	}
});
//定义搜索框组件
app.directive("search", function() {
	return {
		templateUrl: "directive/search.html"
	}
});
//定义轮播图组件
app.directive("swiper", function() {
	return {
		templateUrl: "directive/swiper.html",

		link: function(scope, ele, attr) {
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true
			});
		}
	}
});
//定义自定义服务
//定义获取轮播组图片服务
app.service("swiperImg", function() {
	return {
		getImgs: function(data, num) {
			if(num) {} else {
				num = 3;
			}
			var imgs = [];
			angular.forEach(data, function(data, index) {
				if(data.havePic && imgs.length <= num) {
					data.id = index;
					imgs.push(data);
				}
			});
			//			console.log(imgs);
			return imgs;
		}
	}
})