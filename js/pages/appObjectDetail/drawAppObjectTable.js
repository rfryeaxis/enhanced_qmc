define(function(require){
	'use strict';

	var draw = function(parent, qrs, drawTable, config){
		
		var appObjects$ = qrs.get("/app/object/full?filter=objectType eq 'sheet'");
		
		appObjects$.subscribe(function(response){
			console.log(response);

			var tableArr = {
				header:[
					"Object Name"
					,"App Name"
					,"Object Type"
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
						,appObject.app.name
						,appObject.objectType
						,appObject.published
						,appObject.approved
						,appObject.id
					]
				})		
			})
			
			drawTable($(parent), tableArr, config);
			
		});
	}

	return draw;
});
