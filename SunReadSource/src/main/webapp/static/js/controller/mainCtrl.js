//mainCtrl.js
var ctrls = angular.module('nourControllers',['nourConfig', 'ngResource', 'userServices', 'noteServices', 'noteViewServices', 'noteTakeServices', 'paraServices', 'commentServices'
                                             ,'examServices', 'classServices', 'questionServices','reviewServices'
                                             ,'bookDetailServices','bookshelfServices','bookshelfViewServices','bookInShelfServices','addbookToShelfServices','dropBookFromShelfServices'
                                             ,'lackFeedbackServices','conditionSearchServices','quickSearchServices','oneBookInShelfServices'
                                             ,'weeklyHotServices','monthlyHotServices','weeklyRecommendServices','monthlyRecommendServices'
                                             , 'campusServices', 'actionServices', 'pageableServices', 'hotclazzServices', 'hotreaderServices']);
ctrls.controller("mainController", ['$rootScope', '$scope', 'Student',"Bookshelf", "Note", "Class", "PassExam", 'Action', 'Pageable', 'Hotclazz', 'Hotreader',
  function ($rootScope, $scope, Student,Bookshelf, Note, Class, PassExam, Action, Pageable, Hotclazz, Hotreader) {
    //$rootScope.id = 2;
    //get userid
    $rootScope.id = sessionStorage.getItem("userId");


    //student info
    Student.get({id : $rootScope.id} ,function(data){
      $scope.userInfo = data;
      $rootScope.student = data;
      // Create a classes entitiy
      Class.get({id: $scope.userInfo.clazzId}, function(classData){
        $scope.userInfo.class=classData.name;
        $scope.userInfo.school=classData.campusName;
      });

      // Create a pageable entity of actions
      $scope.actionPageable = new Pageable();

      // Set the parameters of pageable
      $scope.actionPageable.size = 3;

      // Build the pageable object
      $scope.actionPageable.build(Action);

      // Show the page 1
      $scope.actionPageable.showPage(1);

      // Create a Hotreaders entitiy
      $scope.hotReaders={};
      Hotreader.get({campusId: data.campusId, page: 0, size: 3 }, function(dataHot){
        $scope.hotReaders.first = dataHot.content[0];
        //$scope.hotReaders.others = dataHot.content;
        $scope.hotReaders.others = dataHot.content.slice(1);
      });
    });

    //bookshelf
    Bookshelf.get({id : $rootScope.id}, function(data){
      $scope.bookshelf = data;

        //todo
        //目标完成率
      })

    //testing
    PassExam.get($rootScope.id, function(data){
      $scope.exam = data;
    })

    //note
    Note.get({by: "users", id: $rootScope.id,  page: 0, size: 4, direction: "DESC", sortBy: "creationTime"},
      function(data){
        $scope.notes = data.content;
      })

    //hot note
    Note.get({page:0, size: 3, sortBy: 'commentCount', direction: 'DESC'}, function(data){
      $scope.hotNotes = data.content;
    })



  }]);
ctrls.filter('formatImg', function(){
  return function(input){
    if (input == undefined || input == "") {
      return "../static/img/picture.jpg";
    };
    return input;
  }
});

ctrls.filter('formatSize4', function(){
  return function(input){
    return input.substring(0, 4) + '...';
  }
});

ctrls.filter('formatSize6', function(){
  return function(input){
    return input.substring(0, 6) + '...';
  }
});

ctrls.filter('formatGender', function(){
 return function(input){
  if (input == 'male') {
    return "男生";
  };
  return "女生";
}
});
