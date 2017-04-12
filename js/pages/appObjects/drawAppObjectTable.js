define(function(require){
	'use strict';

	var draw = function(parent, qrs, drawTable, config){
		
		var appObjects$ = qrs.get("/app/object/full?filter=objectType eq 'sheet'");
		
		appObjects$.subscribe(function(response){

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
			
			$('#' + config.id + ' > tbody > tr').on('click', function(row) {
				var id = row.currentTarget.childNodes[5].innerHTML;
				//Go to new page - app detail #id
				location.href = location.origin + config.rowLinkTarget + id
			});
		});
	}

	return draw;
});
