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
		
		,"../../enhanced_qmc/js/config/newApp/config.js"
		,"../../enhanced_qmc/js/pages/obj-lib/copyApp.js"
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
		,copyApp
	) {
	
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	var contentWrapper = drawContentWrapper(require, drawTopBar, drawSidebar);
	drawContentHeader(require, contentWrapper, 'New App');
	
	var populateUserList = function(parent){
		var users$ = qrs.get('/user/full', "application/json");
		users$.subscribe(function(response){
			response.forEach(function(user) {
				parent.append($('<option />')
					.attr('id','option-user-'+user.id)
					.attr('value',user.id)
					.text(user.name)
				)
			})
		});
	}
	
	$(contentWrapper).append($('<div >')
		.text('New App')
	)
	.append($('<p />'))
	.append($('<p />')
		.attr('id','new-app-name-label')
		.text('Enter New App Name: ')
	)
	.append($('<input />')
		.attr('id','new-app-name')
	)
	.append($('<p />')
		.attr('id','new-app-owner-label')
		.text('Enter New App Owner: ')
	)
	.append($('<select />')
		.attr('id','new-app-owner')
	)
	.append($('<p />'))
	.append($('<button />')
		.on('click',function(){
			copyApp(qrs, config.templates.QVDGenerator, 'E_' + $('#new-app-name')[0].value, $('#new-app-owner')[0].value);
			copyApp(qrs, config.templates.QVDGenerator, 'T_' + $('#new-app-name')[0].value, $('#new-app-owner')[0].value);
			copyApp(qrs, config.templates.FrontEnd, $('#new-app-name')[0].value, $('#new-app-owner')[0].value);
		})
		.text('Create App')
	)
	
	populateUserList($('#new-app-owner'));
	
	//callbacks -- inserted here --
	//open apps -- inserted here --
	//get objects -- inserted here --
	//create cubes and lists -- inserted here --

});

