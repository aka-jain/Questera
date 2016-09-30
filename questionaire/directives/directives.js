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
						},0)

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
								$(".intro-welcome").css({
									'height':'50px',
									'opacity':'1'
								});
							},500)

							// intro load timeout function
							setTimeout(function () {
								$(".intro-load").css({
									'height':'50px',
									'opacity':'1'
								});
							},500)

							setTimeout(function(){
								$("#welcome-intro").hide().fadeIn();
							},4400)
							// calling dot loader
							self.loadDots();

							// calling flow loader after 4s (temp. for now)
							self.flowLoader();
						}else {
							// show error msg
							$(".error-intro").hide().fadeIn();
						}

					},
					skip: function(){
						scope.firstName = "Anonymous"; 
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

						setTimeout(function () {
							$(".intro-welcome").css({
								'height':'50px',
								'opacity':'1'
							});
						},500);
						setTimeout(function () {
							$(".intro-load").css({
								'height':'50px',
								'opacity':'1'
							});
						},500);
						setTimeout(function(){
							$("#welcome-intro").hide().fadeIn();
						},0)
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
// intro message directive and handling script with getName service
app.directive('questionAnswer', function(processAnswer){
	// Runs during compile
	return {
		templateUrl: '../partials/questionAnswer.html',
		link: function (scope, el, attrs) {
			(function(){

				function questAns(){
					this.init();
				}

				// making internal functions for intro msg
				questAns.prototype={
					init:function(){


						
						setTimeout(function(){
							console.log($("input:checked").val());
						})
						
						scope.getAnswer = function(){

		processAnswer.processCorrect(scope.correctAnswer);
		// var userAnswer = processAnswer.userAnswer();
		// processAnswer.processCorrect(scopw.)
	}
	console.log(processAnswer.processCorrect(scope.correctAnswer))

					}

				}

		
		var questAnsObj = new questAns();
	})();
	}
}
})




















