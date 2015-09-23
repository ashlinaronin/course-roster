courseRoster.controller('StudentsCtrl', function StudentsCtrl($scope, $stateParams, CoursesFactory, UtilitiesFactory) {
	$scope.course = UtilitiesFactory.findById(CoursesFactory.courses, $stateParams.courseId);
	$scope.addStudent = function() {
		$scope.course.students.push({ name: $scope.studentName });
		
		// Reset input box
		$scope.studentName = null;
	}
});