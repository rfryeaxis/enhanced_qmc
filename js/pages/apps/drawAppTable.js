define(function(require){
	'use strict';

	var draw = function(require, parent, qrs, drawTable, config){
		
		var apps$ = qrs.get("/app/full");
		
		apps$.subscribe(function(response){

			var tableArr = {
				header:[
					"App Name"
					,"Owner"
					,"App ID"
				]
				,body:[]
			};
			
			response.forEach(function(app){
				tableArr.body.push({
					col:[
						app.name
						,app.owner.name
						,app.id
					]
				})	
			})
			
			var parentHeight = parent[0].clientHeight * .75;
			var parentWidth = parent[0].clientWidth;
								
			drawTable($(parent), tableArr, config, parentHeight, parentWidth);
			
			$('#' + config.id + ' > tbody > tr').on('click', function(row) {
				var id = row.currentTarget.childNodes[2].innerHTML;
				//Go to new page - app detail #id
				location.href = location.origin + '/extensions/enhanced_qmc/html/app_detail.html#' + id
			});
		});
	}

	return draw;
});
