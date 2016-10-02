/*** using factory mathods to make services ***/

// API call service
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
            // first name processing
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
	// var correctAnswers = [];
	var userAnswers = [];
	var getAns;
    var getQuest;

    return {
    	processUser: function(questNum, ans){
            var i=0, flag=1;


                userAnswers.push({
                questNum:questNum,
                ans:ans
            })
    		return
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
        },
        setQuest: function(quest_num){
            getQuest = quest_num
            return
        },
        getQuest: function(){
            return getQuest
        },
        resetList: function(){
            userAnswers = [];
            return
        }
    }               
});

// process right answers from API
app.factory('rightAnswers', function(){
    var list = [];
    return {
        storeList:function(data){
            for (i in data){
                list.push({
                    ans:data[i].ans
                })
              
            }
            return
        },
        getList:function(){
            return list;
        },
        resetList: function(){
            list = [];
            return
        }
    }
})
