app.factory('dataQuestionaire', ['$http', function ($http) {
	
	// serving API directly
	return $http.get('../data/questionaire.json').success(function (main_data) {
			return main_data;
		})
		.error(function (err) {
			return err;
		});
}]);

// taking first name from full name
app.factory('getName', function(){
	var addName = [];
    return {

        firstName: function(nameVal){
        	if(!angular.isUndefined(nameVal)){
        		var name=nameVal.trim().split(" ");
				name[0]=name[0].substr(0, 1).toUpperCase() + name[0].substr(1).toLowerCase();
	        	addName.push(nameVal);
	        	return name[0];
        	}

           
        },
        storeName: function(){
        	
        	
        	return addName[0];
        }  
    }               
});

// process answers
app.factory('processAnswer', function(){
	var correctAnswers = [];
	var userAnswers = [];
	var getAns;
    return {
    	processCorrect:function(ans){
			correctAnswers.push(ans);
    		return 
		},
    	processUser: function(ans){
    		userAnswers.push(ans)
    		return
    	},
        storeCorrect: function(){
        	
        	return correctAnswers
           
        },
        storeUser: function(){
        	
        	return userAnswers
        
        },
        getAnswer: function(ans){
        	 getAns=ans;
        	 return 
        },
        setAnswer: function(){
        	return getAns;
        } 
    }               
});