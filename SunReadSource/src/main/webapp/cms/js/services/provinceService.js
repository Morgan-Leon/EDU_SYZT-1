var provinceServices = angular.module('provinceServices', ['ngResource', 'nourConfig']);

provinceServices.factory('Province',['$resource', 'config', '$http',
	function($resource, config, $http){
		var api = {};
		api.GetProvinces = function(callback){
			$http.get(config.HOST + 'regions/provinces?page=0&size=10000')
			.success(function(data, status, headers, config){
				callback(data);
			});
		};
		api.GetSchools = function(callback){
			$http.get(config.HOST + 'campuss?page=0&size=10000&sortBy=name')
			.success(function(data, status, headers, config){
				callback(data);
			});
		};
		return api;
	}]);
