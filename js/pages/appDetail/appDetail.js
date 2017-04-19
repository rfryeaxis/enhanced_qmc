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
		,"../../enhanced_qmc/js/config/qrsConfig.js"
		,"../../enhanced_qmc/js/pages/obj-lib/drawSidebar.js"
		,"../../enhanced_qmc/js/pages/obj-lib/drawContentWrapper.js"
		,"../../enhanced_qmc/js/pages/obj-lib/drawContentHeader.js"
		,"../../enhanced_qmc/js/pages/obj-lib/drawTable.js"
		
		,"../../enhanced_qmc/js/config/appDetail/config.js"
		,"../../enhanced_qmc/js/pages/obj-lib/copyApp.js"
	], function 
	(
		qlik
		,jQuery
		,bootstrap
		,qrs
		,drawSidebar
		,drawContentWrapper
		,drawContentHeader
		,drawTable

		,config
		,copyApp
	) {
	
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	var contentWrapper = drawContentWrapper(require, drawSidebar);
	drawContentHeader(require, contentWrapper, 'App Detail');
	
	var populateStreamList = function(parent){
		var streams$ = qrs.get('/stream/full', "application/json");
		streams$.subscribe(function(response){
			response.forEach(function(stream) {
				parent.append($('<option />')
					.attr('id','option-stream-'+stream.id)
					.attr('value',stream.id)
					.text(stream.name)
				)
			})
		});
	}
	
	var appID = location.hash.substring(1,location.hash.length);
	var app$ = qrs.get("/app/" + appID);
	
	app$.subscribe(function(response){
		var appName = response.name
		var appOwner = response.owner.name;
		var appStream = 'Not Published'
		if(response.stream){
			appStream = response.stream.name
		}
		
		$(contentWrapper).append($('<div >')
			.text('App: ' + appName)
			.append($('<div />')
				.attr('id','approved')
				.text('Owner: ' + appOwner)
			)
			.append($('<div />')
				.attr('id','current-stream')
				.text('Current Stream: ' + appStream)
			)
			.append($('<div />')
				.attr('id','new-app-stream-label')
				.text('Select new stream')
			)
			.append($('<select />')
				.attr('id','new-app-stream')
			)
			.append($('<button />')
				.on('click',function(){
					copyApp(qrs, response.id, response.name, response.owner.id, $('#new-app-stream')[0].value);
				})
				.text('Copy App')
			)
		)
		
		populateStreamList($('#new-app-stream'));
	});
	
	
	//callbacks -- inserted here --
	//open apps -- inserted here --
	//get objects -- inserted here --
	//create cubes and lists -- inserted here --

});

