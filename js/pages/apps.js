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
		,"../../enhanced_qmc/js/config/apps/config.js"
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

	function getApps(){	
		var apps$ = qrs.get("/app/full");
		
		apps$.subscribe(function(response){
			console.log(response);

			var app_table_container = document.getElementById('app_table_container');			
			$(app_table_container)
				.append(
					$('<table />')
						.attr('id',config.table.id)
						.attr('class','table table-striped table-hover table-responsive')
						.attr('style','width:' + config.table.width + 'px')
				)
			;
			
			$('#app_table')
				.append(
					$('<thead />')
						.attr('id','app_thead')
					)
			;
			
			$('#app_thead')
				.append(
					$('<tr />')
						.attr('id','app_thead_tr')
					)
			;
			
			config.table.cols.forEach(function(col){
				$('#app_thead_tr')
					.append(
						$('<th />')
							.attr('id','app_head_tr'+col.idAppend)
							.text(col.label)
							.attr('style','width:' + col.relativeWidth * config.table.width + 'px')
					)
			})
			
			$('#app_table')
				.append(
					$('<tbody />')
						.attr('id','app_tbody')
				)
			;
			
			for(var i = 0; i < response.length; i++){
				var id = 'app_tbody_tr';
				var name = response[i].name;
				var owner = response[i].owner.name;
				var appID = response[i].id;
				
				$('#app_tbody')
					.append(
						$('<tr />')
							.attr('id',id + '_row'+i)
					)
				;
				
				$('#' + id + '_row'+i)
					.append(
						$('<td />')
							.attr('id',id + '_name')
							.text(name)
					)
				;
				
				$('#' + id + '_row'+i)
					.append(
						$('<td />')
							.attr('id',id + '_owner')
							.text(owner)
					)
				;
				
				$('#' + id + '_row'+i)
					.append(
						$('<td />')
							.attr('id',id + '_id')
							.text(appID)
					)
				;
			}
			
			$('#' + config.table.id + ' > tbody > tr').on('click', function(row) {
				var id = row.currentTarget.childNodes[2].innerHTML;
				//Go to new page - app detail #id
				location.href = location.origin + '/extensions/enhanced_qmc/html/app_detail.html#'+ id

			});
			console.log(app_table_container);

		});
	}
	
	console.log(config);
	
	getApps();
});

