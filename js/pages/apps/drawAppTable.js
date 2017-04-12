define(function(require){
	'use strict';

	var draw = function(parent, qrs, drawTable, config){
		
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
			
			drawTable($(parent), tableArr, config);
			
			$('#' + config.id + ' > tbody > tr').on('click', function(row) {
				var id = row.currentTarget.childNodes[2].innerHTML;
				//Go to new page - app detail #id
				location.href = location.origin + config.rowLinkTarget + id
			});
		});
	}

	return draw;
});
