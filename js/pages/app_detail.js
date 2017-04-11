/*
 * Enhanced QMC using RxQ wrapper
 * @owner Ray Frye
 */

 /*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};

require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( 
	[
		"js/qlik"
		,"../../enhanced_qmc/lib/jquery/jquery.js"
		,"../../enhanced_qmc/lib/bootstrap/js/bootstrap.js"
		,"../../enhanced_qmc/js/config/app_detail/config.js"
		,"../../enhanced_qmc/js/config/qrsConfig.js"
	], function 
	( 
		qlik
		,jQuery
		,bootstrap
		,config 
		,qrs
	) {
	
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	//get objects -- inserted here --
	//create cubes and lists -- inserted here --

	function getAppProperties(){	
		var appID = location.hash.substring(1,location.hash.length);
		var apps$ = qrs.get("/app/" + appID);
		
		apps$.subscribe(function(response){
			var app_label = document.getElementById('app_label');			
			$(app_label)
				.text('Application:' + response.name)
			;
			
		});
	}
	
	console.log(config);
	
	getAppProperties();
});

