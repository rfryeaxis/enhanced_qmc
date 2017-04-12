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
		,"../../enhanced_qmc/js/config/appObjectDetail/config.js"
		,"../../enhanced_qmc/js/config/obj-lib/configSidebar.js"
		,"../../enhanced_qmc/js/pages/obj-lib/drawSidebar.js"
		,"../../enhanced_qmc/js/pages/obj-lib/drawTable.js"
		,"../../enhanced_qmc/js/pages/obj-lib/approveAppObject.js"
		,"../../enhanced_qmc/js/pages/appObjectDetail/drawPageContent.js"
		,"../../enhanced_qmc/js/pages/appObjectDetail/drawAppObjectTable.js"
		,"../../enhanced_qmc/js/config/qrsConfig.js"
	], function 
	( 
		qlik
		,jQuery
		,bootstrap
		,config
		,configSidebar
		,drawSidebar
		,drawTable
		,approveAppObject
		,drawPageContent
		,drawAppObjectTable
		,qrs
	) {
	
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );
	
	var body = $("body");
	
	body.append(
		$('<div />')
			.attr('id','wrapper')
			.attr('class',"wrapper toggled")
	);
	
	var appObjectID = location.hash.substring(1,location.hash.length);
	var apps$ = qrs.get("/app/object/" + appObjectID);
	
	apps$.subscribe(function(response){
		$('#container-heading')
			.text('App Object: ' + response.name)
		;
	});
	
	//approveAppObject(qrs, appObjectID, true);
		
	drawSidebar($('#wrapper'), configSidebar);
	
	drawPageContent($('#wrapper'), approveAppObject, qrs, appObjectID, config);
	//drawAppObjectTable($('#app-table-container'), qrs, drawTable, config.pageContents.table);
	
	//callbacks -- inserted here --
	//open apps -- inserted here --
	//get objects -- inserted here --
	//create cubes and lists -- inserted here --

});

