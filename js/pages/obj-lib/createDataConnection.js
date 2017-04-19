define(function(require){
	'use strict';

	var createDataConnection = function(qrs, connectionName, connectionString){
		var connectionConfig = {
			name: connectionName
			,connectionString: connectionString
			,type: "folder"
		};
		
		var newConnection$ = qrs.post("/dataconnection",JSON.stringify(connectionConfig),"application/json");
		
		newConnection$.subscribe(function(response){
			var object$ = qrs.get("/dataconnection/"+response.id);
			var update$ = object$
			.mergeMap(m=>{
				m.engineObjectId = response.id;
				return qrs.put("/dataconnection/" + response.id,JSON.stringify(m),"application/json");
			});	
			update$.subscribe(s=>console.log(s));
		})
	}

	return createDataConnection;
});

