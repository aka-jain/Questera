// // main controller (index)
app.controller('mainController',['$scope', function($scope){

// No content needed	

}])

// question answers controller
app.controller('questionsAnswers',['$scope','dataQuestionaire','$http','$routeParams','getName','processAnswer', function($scope, dataQuestionaire, $http, $routeParams, getName, processAnswer){
	
		// calling API response
	dataQuestionaire.success(function(data){

		// bind response to this scope
		$scope.data = data;

		// make empty questlist for current question
		$scope.questList = [];

		// get stored user name from service (factory here)
		var userName = getName.storeName()

		// set question number from route parameter
		$scope.quest_num = $routeParams.param-1;	

		// Set quest list from service
		processAnswer.setQuest($scope.quest_num);

		// initialize it to questlist
		$scope.questList=$scope.data[$scope.quest_num];
		

		// bind question, correctAns
		$scope.question = $scope.questList.quest;
		$scope.correctAns = $scope.questList.ans;

		// take ans for a particular question
		var answer = $scope.questList.ans;

		/*** remove this content if you want to add your own first question in API ***/

		// set first question of API from client side
		if($scope.quest_num==0){
			if(!angular.isUndefined(userName)){
				
				$scope.questList.options[0].option = userName;
			}
			else{
			
				$scope.questList.options[0].option = "Anonymous"
			}
		}
		/*** ---- ***/

		$scope.correctAnswer = $scope.questList.ans;


		// checking user's answers
		var check = processAnswer.storeUser();
		

		for(i in $scope.questList.options){
			for(j in check){
				if(check[j].questNum==$scope.quest_num && check[j].ans==$scope.questList.options[i].ans){
					$scope.questList.options[i].selected=true
				}
			}
		}
	})
}])



// results controller
app.controller('resultsController',['$scope','dataQuestionaire','$http', 'rightAnswers','$timeout','processAnswer',function($scope, dataQuestionaire, $http, rightAnswers, $timeout, processAnswer){
	
	// calling API response
	dataQuestionaire.success(function(data){

		$scope.data = data;

		$scope.$watch("data", function (newvalue, oldvalue) {
			$timeout(function(){
				rightAnswers.storeList($scope.data);
				
			},0)
				
		})

		 $scope.resetList = function() {
		 	console.log("check")
		 	rightAnswers.resetList();
		 	processAnswer.resetList();
		}

	});

}])

