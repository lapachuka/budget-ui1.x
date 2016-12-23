(function(){
	'use strict';

	angular.module('shared')
		.constant('CONSTANT', myConstant());

	function myConstant(){
		return {
			"BASE_URL": "http://budget.biz.ua"
		}
	}
})();