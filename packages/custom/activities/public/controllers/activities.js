'use strict';

angular.module('mean.activities').controller('ActivitiesController', ['$scope', 'Global', 'Activities',
  function($scope, Global, Activities) {
    $scope.global = Global;
    $scope.package = {
      name: 'activities'
    };
    $scope.vocabItems = [
	    {
	    	word: 'ball',
	    	images: ['ball.jpg', 'tennis_ball.jpg']
	    },
	    {
	    	word: 'house',
	    	images: ['house.jpg', 'house-icon.png']
	    }
    ];

    $scope.pickRandom = function(array) {
    	return array[Math.floor(Math.random()*array.length)];
    };

  }
]);
