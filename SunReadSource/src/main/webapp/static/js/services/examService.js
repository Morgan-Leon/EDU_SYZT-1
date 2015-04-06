var examServices = angular.module('examServices', ['ngResource', "nourConfig"]);

// User object(s)
examServices.factory('VerifyExam',['$resource', 'config', '$http',
	function($resource, config, $http){
		var api = {};
		api.get = function(studentId, bookId, callback){
			$http.get(config.HOST + 'exam/verifypaper/'+studentId + '/' + bookId)
			.success(function(data, status, headers, config){
				callback(data);
			});
		};
		return api;
	}]);


examServices.factory('WordExam',['$resource', 'config', '$http',
	function($resource, config, $http){
		var api = {};
		api.get = function(studentId, bookId, callback){
			$http.get(config.HOST + 'exam/verifypaper/'+studentId + '/' + bookId)
			.success(function(data, status, headers, config){
				callback(data);
			});
		};
		return api;
	}]);


examServices.factory('ThinkExam',['$resource', 'config', '$http',
	function($resource, config, $http){
		var api = {};
		api.get = function(bookId, callback){
			$http.get(config.HOST + 'exam/verifypaper/'+ bookId)
			.success(function(data, status, headers, config){
				callback(data);
			});
		};
		return api;
	}]);


examServices.factory('CapacityExam',['$resource', 'config', '$http',
	function($resource, config, $http){
		var api = {};
		api.get = function(levelId, callback){
			$http.get(config.HOST + 'exam/wordpaper/'+levelId)
			.success(function(data, status, headers, config){
				callback(data);
			});
		};
		return api;
	}]);

