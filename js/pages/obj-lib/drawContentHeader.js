define(function(){
	'use strict';
	
	var draw = function(require, parent, headerLabel){
		/*
		require( 
			[
				"js/qlik"
				,"../../enhanced_qmc/lib/jquery/jquery.js"
				,"../../enhanced_qmc/lib/bootstrap/js/bootstrap.js"
				,"../../enhanced_qmc/js/config/obj-lib/configContentWrapper.js"
				,"../../enhanced_qmc/js/config/obj-lib/configSidebar.js"
				,"../../enhanced_qmc/js/pages/obj-lib/drawSidebar.js"
			], function 
			( 
				qlik
				,jQuery
				,bootstrap
				,config
				,configSidebar
				,drawSidebar
			) {
			*/
			parent.append($('<div />')
				.attr('id','container-header-row')
				.attr('class','col-lg-12')
				.append($('<h1 />')
					.attr('id', 'container-header')
					.text(headerLabel)
				)
			)
//		});		
	}
	
	return draw;
})