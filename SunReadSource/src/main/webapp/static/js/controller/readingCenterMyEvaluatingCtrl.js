//readingCenterMyEvaluatingCtrl.js

ctrls.controller("readingCenterMyEvaluatingController", ['$scope', '$rootScope', 'VerifyExam', 'WordExam', 'ThinkExam', 'OneBookInShelf',
	function ($scope, $rootScope, VerifyExam, WordExam, ThinkExam, OneBookInShelf) {
		
		//source
		VerifyExam.getAllInfo($rootScope.id, function(data){
			$scope.verifyExams = data.examDTOs;
			for(var i = 0; i < $scope.verifyExams.length, i++){
				OneBookInShelf.get({id:$rootScope.id,bookId:$stateParams.bookId},function(dataDetail){
					//TRUE 已认证
					$scope.verifyExams[i].verify = dataDetail.readState;
				});
			}
		});

		WordExam.getAllInfo($rootScope.id, function(data){
			$scope.wordExams = data.examDTOs;
			for(var i = 0; i < $scope.wordExams.length, i++){
				OneBookInShelf.get({id:$rootScope.id,bookId:$stateParams.bookId},function(dataDetail){
					//TRUE 已认证
					$scope.wordExams[i].verify = dataDetail.readState;
				});
			}
		});

		ThinkExam.getAllInfo($rootScope.id, function(data){
			$scope.thinkExams = data.examDTOs;
			for(var i = 0; i < $scope.thinkExams.length, i++){
				OneBookInShelf.get({id:$rootScope.id,bookId:$stateParams.bookId},function(dataDetail){
					//TRUE 已认证
					$scope.thinkExams[i].verify = dataDetail.readState;
				});
			}
		});



		$scope.MyAnswer = function(thinkExam){
			$rootScope.selectThinkExam = thinkExam;
		}

		function hideAllTabs(){
			$scope.isCertification = false;
			$scope.isWord = false;
			$scope.isThinking = false;
		}
		$scope.showCertification = function(){
			hideAllTabs();
			$scope.isCertification = true;
		}
		$scope.showWord = function(){
			hideAllTabs();
			$scope.isWord = true;
		}
		$scope.showThinking = function(){
			hideAllTabs();
			$scope.isThinking = true;
		}
		$scope.isCertification = true;
	}]);