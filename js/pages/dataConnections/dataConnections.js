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
		,"../../enhanced_qmc/js/pages/obj-lib/drawTopBar.js"
		,"../../enhanced_qmc/js/pages/obj-lib/drawContentWrapper.js"
		,"../../enhanced_qmc/js/pages/obj-lib/drawContentHeader.js"
		,"../../enhanced_qmc/js/pages/obj-lib/drawTable.js"
		
		,"../../enhanced_qmc/js/config/dataConnections/config.js"
		,"../../enhanced_qmc/js/pages/obj-lib/createDataConnection.js"
	], function 
	(
		qlik
		,jQuery
		,bootstrap
		,qrs
		,drawSidebar
		,drawTopBar
		,drawContentWrapper
		,drawContentHeader
		,drawTable

		,config
		,createDataConnection
	) {
	
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	var contentWrapper = drawContentWrapper(require, drawTopBar, drawSidebar);
	drawContentHeader(require, contentWrapper, 'Data Connections');
	
	$(contentWrapper).append($('<div >')
		.text('New Connection')
	)
	.append($('<p />'))
	.append($('<p />')
		.attr('id','new-connection-name-label')
		.text('Enter New Connection Name: ')
	)
	.append($('<input />')
		.attr('id','new-connection-name')
	)
	.append($('<p />'))
	.append($('<p />')
		.attr('id','new-connection-definition-label')
		.text('Enter New Connection Definition: ')
	)
	.append($('<input />')
		.attr('id','new-connection-definition')
	)
	.append($('<p />'))
	.append($('<button />')
		.on('click',function(){
			createDataConnection(qrs, $('#new-connection-name')[0].value, $('#new-connection-definition')[0].value);
		})
		.text('Create Connection')
	)
	
	//callbacks -- inserted here --
	//open apps -- inserted here --
	//get objects -- inserted here --
	//create cubes and lists -- inserted here --

});

