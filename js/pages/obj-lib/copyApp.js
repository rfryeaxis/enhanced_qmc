define(function(require){
	'use strict';

	var copyApp = function(qrs, appID, appName, appOwnerID, publishToStreamID){	
		var copyApp$ = qrs.post('/app/' + appID + '/copy?name=' + appName, "application/json");
		
		copyApp$.subscribe(function(appResponse) {
			var app$ = qrs.get("/app/"+appResponse.id);
			
			var update$ = app$
			.mergeMap(m=>{
				m.owner.id = appOwnerID;
				return qrs.put("/app/" + appResponse.id,JSON.stringify(m),"application/json");
			});	
			
			update$.subscribe(function(updateResponse){
				console.log(updateResponse);
				if(publishToStreamID){
					var publish$ = qrs.put("/app/" + updateResponse.id + "/publish?stream=" + publishToStreamID,"application/json");
					publish$.subscribe(p=>console.log(p));
				}
			})
		})
	}

	return copyApp;
});

