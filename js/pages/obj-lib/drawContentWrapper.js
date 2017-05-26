define(function(){
	'use strict';
		
	var draw = function(
		require
		, drawTopBar
		, drawSidebar
		){
			var height = document.documentElement.clientHeight;
			var body = $("body");
			
			body.append($('<div />')
				.attr('id','wrapper')
				.append($('<div />')
					.attr('id','topbar-wrapper')
				)
			)
			if(drawSidebar) {
				$('#wrapper').append($('<div />')
					.attr('id','sidebar-wrapper')
				)
			}
			$('#wrapper').append($('<div />')
				.attr('id','page-content-wrapper')
				.attr('style','height:' + height + 'px')
			)
			
			var wrapper = $('#wrapper');
			var topBarWrapper = $('#topbar-wrapper');
			var sidebarWrapper = $('#sidebar-wrapper');
			var pageContentWrapper = $('#page-content-wrapper');
			
			drawTopBar(require, topBarWrapper);
			if(drawSidebar){
				drawSidebar(require, sidebarWrapper);	
			}
			else{
				wrapper.attr('style','padding-left: 0px');
				//pageContentWrapper.attr('style','margin-left:0px;');
			}
			
			return pageContentWrapper;
		}

	return draw;
})
