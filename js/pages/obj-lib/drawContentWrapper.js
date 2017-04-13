define(function(){
	'use strict';
		
	var draw = function(
		require
		, drawSidebar
		){
			var height = document.documentElement.clientHeight;
			var body = $("body");
			
			body.append($('<div />')
				.attr('id','wrapper')
				.append($('<div />')
					.attr('id','sidebar-wrapper')
				)
				.append($('<div />')
					.attr('id','page-content-wrapper')
					.attr('style','height:' + height + 'px')
				)
			)
			
			var wrapper = $('#wrapper');
			var sidebarWrapper = $('#sidebar-wrapper');
			var pageContentWrapper = $('#page-content-wrapper');
			
			drawSidebar(require, sidebarWrapper);	
			
			return pageContentWrapper;
		}

	return draw;
})
