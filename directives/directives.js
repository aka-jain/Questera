// intro message directive and handling script with getName service
app.directive('introMessage', function(getName){
	// Runs during compile
	return {
		templateUrl: '../partials/introMessage.html',
		link: function (scope, el, attrs) {

		// calling Anonymous self invoking function
			(function(){

				function introMsg(){
					this.init();
				}

				// making internal functions for intro msg
				introMsg.prototype={

					
					init: function(){

						// init or main function
						var self = this;
						var nameVal;


						


						setTimeout(function () {
	                        $("input#input1").get(0).focus();
	                    },1500);
						

						$("#welcome-intro, .error-intro").hide()


						// click event for done (submit name)

						


						scope.getNameVal =function () {

							// checking for name field
							if(!$('input1').val()){
								// calling done function
								self.done();
							}
						}

						$(".flow-div").css({
							'margin-top':'0'
						})
						


						// event for skip button
						scope.setAnonymous =function () {
							// call skip function
							self.skip();
							// call flow loader after 4s (for now this is temp)
							self.flowLoader()
								
						}

						// checking for enter key to enter name
						$("input#input1").keypress(function(e) {
							if (e.which == 13 && $('input1').val!=null) {
								e.preventDefault();
								scope.firstName = getName.firstName(scope.name);
								self.done();
							}

						});

						// checking for esc to skip name entry
						$(window).keyup(function(e) {
							if (e.which == 27 ) {
								scope.name="Anonymous";
								self.skip();
							}

						});


					},
					loadDots: function(){

						// loading dots function
						var i=0;

						// dots styling
						setInterval(function(){
							$("span.load-dots").css({
								'color':'#fff',
								'font-size':'1em'
							})
							$("span.load-dots-"+ i+ " ").css({
								'color':'#44af2b',
								'font-size':'2em'
							})
							
							i++;
							if(i==3){
								i=0;
							}
						},400);

					},
					flowLoader: function(){

						// flow loadder

						setTimeout(function () {
							$(".user-intro-container").fadeOut();
								$(".flow-div").css({
								'margin-top':'110vh'
							})
								$(".flow-container").css({
							})
						},4000)

					},
					done: function(){
						// click on done button or submit name



						var self = this;
							// take name
						nameVal=$("#input1").val();

						// setting up local storage
						if(typeof(Storage) !== "undefined" && nameVal.trim().length > 0) {
							sessionStorage.setItem('name', nameVal);

							scope.firstName = getName.firstName(scope.name);
						

							// move items down (animation)
							$(".move-down").css({
								'height':'0px',
								'padding':'0px',
								'overflow':'hidden',
								'transition':'all 0.32s ease-in-out'
							});

							$(".user-intro-container h1").css({
								'color':'#9d9d9d'
							})

							$(".user-intro-container h1 span").css({
								'color':'#fff'
							})

							// reseting name to first name only
							var firstName=nameVal.trim().split(" ");
								firstName[0]=firstName[0].substr(0, 1).toUpperCase() + firstName[0].substr(1).toLowerCase();
							
							$(".name-val").html(" " + firstName[0]+"!").hide().fadeIn("slow");

							// welcome msg
							setTimeout(function () {

								if($(window).outerWidth()<640){
									$(".intro-welcome").css({
										'height':'28px',
										'opacity':'1'
									});
								}
								else{
									$(".intro-welcome").css({
										'height':'50px',
										'opacity':'1'
									});
								}
								
							},500)

							// intro load timeout function
							setTimeout(function () {
								

								if($(window).outerWidth()<640){
									$(".intro-load").css({
										'height':'70px',
										'opacity':'1'
									});
								}
								else{
									$(".intro-load").css({
										'height':'50px',
										'opacity':'1'
									});
								}


							},500)

							setTimeout(function(){
								$("#welcome-intro").hide().fadeIn();
							},4400)
							$(".intro-load").css({
								'display':'block'
							})
							// calling dot loader
							self.loadDots();

							// calling flow loader after 4s (temp. for now)
							self.flowLoader();
						}else {
							// show error msg
							$(".intro-load").css({
								'display':'hide'
							})
							$(".error-intro").hide().fadeIn();
						}

					},
					skip: function(){
						scope.firstName = "Anonymous"; 

						$(".intro-load").css({
							'display':'block'
						})
						// skip button function
						var self = this;
							// show Anonymous user
						 $(".name-val").html(" Anonymous!").hide().fadeIn("slow");
						 $("h3.intro-welcome").html("Happy to see you here &#9786;");

						 $(".move-down").css({
						  	'height':'0px',
						  	'padding':'0px',
						  	'overflow':'hidden',
						  	'transition':'all 0.32s ease-in-out'
						  });
						  $(".user-intro-container h1").css({
						  	'color':'#9d9d9d'
						  });
						  $(".user-intro-container h1 span").css({
						  	'color':'#fff'
						  });



						// welcome msg
							setTimeout(function () {

								if($(window).outerWidth()<640){
									$(".intro-welcome").css({
										'height':'28px',
										'opacity':'1'
									});
								}
								else{
									$(".intro-welcome").css({
										'height':'50px',
										'opacity':'1'
									});
								}
								
							},500)

							// intro load timeout function
							setTimeout(function () {
								

								if($(window).outerWidth()<640){
									$(".intro-load").css({
										'height':'70px',
										'opacity':'1'
									});
								}
								else{
									$(".intro-load").css({
										'height':'50px',
										'opacity':'1'
									});
								}


							},500)
						setTimeout(function(){
							$("#welcome-intro").hide().fadeIn();
						},4400) 
						// show secret msg ;)
						 $("h3.intro-load").html("<span class='white ssh'>Sssshhh...</span> Loading our journey anonymously &#x1F910; <span class='load-dots load-dots-0'>.</span> <span class='load-dots load-dots-1'>.</span> <span class='load-dots load-dots-2'>.</span>")
						 // start dot loader
						 self.loadDots();
						 self.flowLoader();
					}
				}

				var introMsgObj = new introMsg();
				})();


		 }
	};
});

// question answer directive
app.directive('questionAnswer', function(processAnswer){
	// Runs during compile
	return {
		templateUrl: '../partials/questionAnswer.html',
		link: function (scope, el, attrs) {
			(function(){

				function questAns(){
					this.init();
				}

				
				questAns.prototype={
					init:function(){
						// initialize with init function

						$(".show-quest-error").hide()
						scope.getAnswer = function(event){

							// take user's answer
							var userAnswer = $('input.get-option:checked').val();
							if(angular.isUndefined(userAnswer)){
								event.preventDefault();
								$(".show-quest-error").hide().fadeIn();
							}
							else{
								var c = processAnswer.getQuest();
								processAnswer.processUser(c, userAnswer);
							}
						}
					}
				}

			
				var questAnsObj = new questAns();
			})();
		}
	}
})


// directive script for result page

app.directive('resultsPage', function(processAnswer, rightAnswers, $timeout, getName){
	// Runs during compile
	return {
		templateUrl: '../partials/resultsPage.html',

		link: function (scope, el, attrs) {
			// calling Anonymous self invoking function
			(function(){

				function result(){
					this.init();
				}

				// making internal functions for intro msg
				result.prototype={
					init:function(){

						var self = this;
						scope.userAnswersList = [];


						if(angular.isUndefined(getName.storeName())){
							scope.firstName ="Anonymous"
						}
						else{
							scope.firstName =getName.storeName()
						}

						var takeList = processAnswer.storeUser();
						for(i in takeList){
							scope.userAnswersList.push({
								ans:takeList[i].ans
							})
						}

						var userAns = scope.userAnswersList;
						scope.rightAns =[];
						
						// let the data load
						$timeout(function(){
							
							scope.rightAns = rightAnswers.getList()
							scope.correctCount = self.correctAnswers(userAns, scope.rightAns);
							scope.wrongCount = 5 - scope.correctCount


							// animate height of graph grid
							$timeout(function(){
								$(".graph-vertical-container .vert-correct").css({

									'height':(scope.correctCount*100)/5+ "%"
								});
								$(".graph-vertical-container .vert-wrong").css({
									'height':(scope.wrongCount*100)/5+ "%"
								});
							},0)

						},800)
	
					},
					correctAnswers:function(userAns, rightAns){
						// process number of correct answers user has made
						var self = this; 

						var i=0,j=0,correct=0, wrong=0;
						for(i=0; i<userAns.length;i++){
							
							if(userAns[i].ans == rightAns[i].ans){
								correct=correct+1;
							}
							else{
								wrong=+wrong+1;
							}
						}
						// return correct answers count
						return correct;

					}
				}

				var resultsObj = new result();
			})();
		}
	}
})


















