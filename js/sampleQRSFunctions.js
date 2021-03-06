//RxQ examples
/*
 var config = {
    host: "qliksenseserver"
	,port: 443
	,isSecure: true
};

var qrs = RxQ.connectQRS(config);


var qrsAbout$ = qrs.get("/about");
// -> Returns an Observable for the response to a GET request against this path
qrsAbout$.subscribe(s=>console.log(s));
*/

/*
//Publish/Unpublish sheet example
var publishSheet$ = qrs.put("/app/object/9cea4232-4260-496b-88c6-b2d090922348/unpublish");
publishSheet$.subscribe(s=>console.log(s));
*/

/*
//Attempt to unpublish app, doesn't work
//Update app name example:
var object$ = qrs.get("/app/aa8861e3-12a1-4876-af0b-5de9f8b0a160");
object$.subscribe(s=>console.log(s));
var update$ = object$
  .mergeMap(m=>{
    m.stream = null;
    return qrs.put("/app/aa8861e3-12a1-4876-af0b-5de9f8b0a160",JSON.stringify(m),"application/json");
  });
update$.subscribe(s=>console.log(s));
*/

/*
//Update sheet name example:
var object$ = qrs.get("/app/object/9cea4232-4260-496b-88c6-b2d090922348");
var update$ = object$
  .mergeMap(m=>{
    m.name = "About";
    return qrs.put("/app/object/9cea4232-4260-496b-88c6-b2d090922348",JSON.stringify(m),"application/json");
  });
update$.subscribe(s=>console.log(s));
*/

/*
//Approve Sheet example:
var object$ = qrs.get("/app/object/9cea4232-4260-496b-88c6-b2d090922348");
var update$ = object$
  .mergeMap(m=>{
    m.approved = false;
    return qrs.put("/app/object/9cea4232-4260-496b-88c6-b2d090922348",JSON.stringify(m),"application/json");
  });
update$.subscribe(s=>console.log(s));
*/

/*
//Create new data connection example:
var m = {
		name: "new connection"
		,connectionString: "fake connection"
		,type: "folder"
};
var newConnection$ = qrs.post("/dataconnection",JSON.stringify(m),"application/json");
newConnection$.subscribe(function(response){
	console.log(response);
	
	var object$ = qrs.get("/dataconnection/"+response.id);
	var update$ = object$
	  .mergeMap(m=>{
		m.engineObjectId = response.id;
		return qrs.put("/dataconnection/" + response.id,JSON.stringify(m),"application/json");
	  });	
	 update$.subscribe(s=>console.log(s));
})
*/