define(function(require){
	'use strict';

	var draw = function(require, parent, qrs, drawTable, config){
		
		var appObjects$ = qrs.get("/app/object/full?filter=objectType eq 'sheet'");
		
		appObjects$.subscribe(function(response){

			var tableArr = {
				header:[
					"Object Name"
					,"Type"
					,"App Name"
					,"Published"
					,"Approved"
					,"Object ID"
				]
				,body:[]
			};
			
			response.forEach(function(appObject){
				tableArr.body.push({
					col:[
						appObject.name
						,appObject.objectType
						,appObject.app.name
						,appObject.published
						,appObject.approved
						,appObject.id
					]
				})	
			})
			
			var parentHeight = parent[0].clientHeight * .75;
			var parentWidth = parent[0].clientWidth;
								
			drawTable($(parent), tableArr, config, parentHeight, parentWidth);
			
			$('#' + config.id + ' > tbody > tr').on('click', function(row) {
				var id = row.currentTarget.childNodes[5].innerHTML;
				//Go to new page - app detail #id
				location.href = location.origin + '/extensions/enhanced_qmc/html/app_object_detail.html#' + id
			});
		});
	}

	return draw;
});
