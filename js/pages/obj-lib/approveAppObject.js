define(function(require){
	'use strict';

	var approveAppObject = function(qrs, appObjectID, approved){
		var appObject$ = qrs.get("/app/object/" + appObjectID);
		
		var update$ = appObject$
		  .mergeMap(m=>{
			m.approved = approved;
			return qrs.put("/app/object/" + appObjectID, JSON.stringify(m), "application/json");
		  });
		update$.subscribe(s=>console.log(s));
	}

	return approveAppObject;
});

