//readingDynamic.js

ctrls.controller("readingDynamicController", ['$scope', '$rootScope', 'NoteView', 'Student', 'Campus', 'Action', 'Pageable',
    function ($scope, $rootScope, NoteView, Student, Campus, Action, Pageable) {
    
        
        
    // Get student info and campus
    var student = Student.get({id : $rootScope.id}, function(){
        
        // Get headmaster
        $scope.campus = Campus.get({id: student.campusId});
    });

        
        
    // Create a pageable entity of actions
    $scope.actionPageable = new Pageable();
    
    // Set the parameters of pageable
    $scope.actionPageable.size = 5;
    
    // Build the pageable object
    $scope.actionPageable.build(Action);
        
    // Show the page 1
    $scope.actionPageable.showPage(1);
        

    
    // Make an instance of the NoteView
    $scope.noteView = new NoteView();

    // Transmit arguments to search engine
    $scope.noteView.ShowMoreNotes( {page: 0, size: 3, direction: "DESC", sortBy: "commentCount"} );
}]);