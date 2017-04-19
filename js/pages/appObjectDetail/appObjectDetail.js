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
		
		,"../../enhanced_qmc/js/config/appObjectDetail/config.js"
		,"../../enhanced_qmc/js/pages/obj-lib/copyAppObject.js"
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
		,copyAppObject
	) {
	
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	var contentWrapper = drawContentWrapper(require, drawSidebar);
	drawContentHeader(require, contentWrapper, 'App Object Detail');

	var populateAppList = function(parent){
		var apps$ = qrs.get('/app/full', "application/json");
		apps$.subscribe(function(response){
			response.forEach(function(app) {
				parent.append($('<option />')
					.attr('id','option-app-'+app.id)
					.attr('value',app.id)
					.text(app.name)
				)
			})
		});
	}
	
	var appObjectID = location.hash.substring(1,location.hash.length);
	var appObject$ = qrs.get("/app/object/" + appObjectID);
	var appName;
		
	appObject$.subscribe(function(response){		
		var appObjectName = response.name
		var appObjectID = response.id
		
		$(contentWrapper).append($('<div >')
			.text('App Object: ' + appObjectName)
			.append($('<div />')
				.attr('id','approved')
				.text('Approved: ' + response.approved)
			)
			.append($('<div />')
				.text('Published: ' + response.published)
			)
		);
		
		$(contentWrapper).append(
		$('<button />')
			.attr('type','button')
			.on('click', function(){
				approveAppObject(qrs, appObjectID, true)
				
				location.reload()
			})
			.text('approve')
		);

		$(contentWrapper).append(
		$('<button />')
			.attr('type','button')
			.on('click', function(){
				approveAppObject(qrs, appObjectID, false)
				
				location.reload()
			})
			.text('unapprove')
		);
		
				
		$(contentWrapper).append($('<p />')
		)
		
		$(contentWrapper).append($('<div />')
			.attr('id','new-app-label')
			.text('Select app to copy to')
		)
		
		$(contentWrapper).append($('<select />')
			.attr('id','new-app')
		)
		
		$(contentWrapper).append($('<p />')
		)
		
		$(contentWrapper).append($('<button />')
			.attr('id','copy-app-object')
			.on('click',function(){
				console.log(response);
				copyAppObject(qrs, response.id, $('#new-app')[0].value);
			})
			.text('Copy App Object')
		)
		
		populateAppList($('#new-app'));
		
	});
	
	//callbacks -- inserted here --
	//open apps -- inserted here --
	//get objects -- inserted here --
	//create cubes and lists -- inserted here --

});

