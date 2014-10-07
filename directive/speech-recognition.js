angular.module("speechRecognition", [])
	.factory("recognition", function() {
			return {
				getInstance: function() {
					return new webkitSpeechRecognition();
				}	
			}
		})
	.directive("voiceCapture", function(recognition) {
		return {
			restrict: 'E',
			scope: {
				transcript: "@",
			},
			controller: function($scope) {
				$scope.setConfig = function(lang, continuous, interimResults) {
					if(!$scope.recognition) {
						$scope.recognition = recognition.getInstance(); 
					}

					$scope.recognition.lang = lang;	
					$scope.recognition.interimResults = interimResults || true;
					$scope.recognition.continuous = continuous || true;  
				}

				$scope.startCapture = function() {
					$scope.recognition.start();
				}
			},
			link: function(scope, element, attrs) {
				// set the language
				scope.setConfig(attrs.lang);
				
				// call event when got the results
				scope.recognition.onresult = function() {
					var final_transcript = '';
					for (var i = event.resultIndex; i < event.results.length; ++i) {
				      if (event.results[i].isFinal) {
				        final_transcript += event.results[i][0].transcript;
				      } 
				    }
				    scope.transcript = final_transcript;
					scope.$digest();
				}

			},
		
			template: "<textarea cols='60' rows='20' value=''>{{transcript}}</textarea><br><button ng-click='startCapture();'>Start Capture</button>"

		}
	});