define(function(require){
	'use strict';

	var copyAppObject = function(qrs, appObjectID, newAppID){	
		
		var newApp$ = qrs.get("/app/" + newAppID);
		newApp$.subscribe(function(newAppResponse){
			
			var appObject$ = qrs.get('/app/object/' + appObjectID, "application/json");
			
			appObject$.subscribe(function(appObjectResponse) {
				
				var newAppObjectConfig = {
					name: appObjectResponse.name
					,objectType: appObjectResponse.objectType
					,app: newAppResponse
					,attributes: appObjectResponse.attributes
					,contentHash: "JKL:SDJFLKAoiu2w3e098u23rjfk;af"
				}
				
				//var newAppObjectConfig = appObjectResponse;
				//newAppObjectConfig.app = newAppResponse;
				//delete newAppObjectConfig.id;
				newAppObjectConfig.app.availabilityStatus = 1;
				
				//var newAppObject$ = qrs.put('/app/object/' + appObjectID, JSON.stringify(newAppObjectConfig), "application/json");
				var newAppObject$ = qrs.post('/app/object/', JSON.stringify(newAppObjectConfig), "application/json");

				newAppObject$.subscribe(function(newAppObjectResponse){
					console.log(newAppObjectResponse);
					/*
					var object$ = qrs.get("/app/object/"+newAppObjectResponse.id);
					var update$ = object$
					.mergeMap(m=>{
						m.engineObjectId = newAppObjectResponse.id;
						return qrs.put("/app/object/" + newAppObjectResponse.id,JSON.stringify(m),"application/json");
					});	
					update$.subscribe(s=>console.log(s));
					*/
				})
				
				/*
				var update$ = appObject$
				.mergeMap(m=>{
					m.app = newAppResponse;
					return qrs.put("/app/object,JSON.stringify(m),"application/json");
				});	
				
				update$.subscribe(p=>console.log(p));
				*/
			
			//var copyAppObject$ = qrs.get('/app/' + newAppID, "application/json");
			/*
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
			*/
			})
		})
	}

	return copyAppObject;
});

