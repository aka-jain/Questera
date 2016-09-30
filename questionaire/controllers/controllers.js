// // main controller (index)
app.controller('mainController',['$scope','dataQuestionaire','$http', function($scope, dataQuestionaire, $http){
	

	// $scope.getNameVal = function(){
	// 	$scope.firstName = $scope.name;
	// 	console.log($scope.firstName)
	// }
// dataQuestionaire.success(function(data){
	
// })
	
	

}])

// main controller (index)
app.controller('questionsAnswers',['$scope','dataQuestionaire','$http','$routeParams','getName','processAnswer', function($scope, dataQuestionaire, $http, $routeParams, getName, processAnswer){
	
dataQuestionaire.success(function(data){

	$scope.data = data;

	$scope.questList = [];
	var userName = getName.storeName()

	
	

	
	$scope.quest_num = $routeParams.param-1;

	$scope.questList=$scope.data[$scope.quest_num];
	// console.log($scope.data[quest_num]);

	$scope.question = $scope.questList.quest;
	$scope.correctAns = $scope.questList.ans;
	var answer = $scope.questList.ans;

	if($scope.quest_num==0){
		if(!angular.isUndefined(userName)){
			$scope.questList.options[0].a = userName;
		}
		else{
			$scope.questList.options[0].a = "Anonymous"
		}
	}
	

	$scope.correctAnswer = $scope.questList.ans;


	




 processAnswer.getAnswer($scope.correctAns);
		// var userAnswer = processAnswer.userAnswer();




})

// console.log();


	
	

}])



