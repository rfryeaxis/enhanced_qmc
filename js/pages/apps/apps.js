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
		,"../../enhanced_qmc/js/config/obj-lib/configSidebar.js"
		,"../../enhanced_qmc/js/pages/obj-lib/drawSidebar.js"
		,"../../enhanced_qmc/js/pages/apps/pageContents.js"
		,"../../enhanced_qmc/js/config/qrsConfig.js"
	], function 
	( 
		qlik
		,jQuery
		,bootstrap
		,config
		,configSidebar
		,drawSidebar
		,drawPageContents
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
	
	drawSidebar($('#wrapper'), configSidebar);
	drawPageContents($('#wrapper'), config);
	//callbacks -- inserted here --
	//open apps -- inserted here --
	//get objects -- inserted here --
	//create cubes and lists -- inserted here --

	/*
				<!-- Page Content -->
				<div id="page-content-wrapper">
					<div class="container-fluid">
						<div class="row">
							<div class="col-lg-12">
								<h1>Apps</h1>
								<p></p>
								<a href="#menu-toggle" class="btn btn-default" id="menu-toggle">Toggle Menu</a>
							</div>
						</div>
						<div id = "app_table_container"></div>
					</div>
				</div>
				<!-- /#page-content-wrapper -->

	}
	*/
	function getApps(){
		var apps$ = qrs.get("/app/full");
		
		apps$.subscribe(function(response){
			var tableConfig = config.pageContents.table;			
			var app_table_container = document.getElementById('app-table-container');		
			
			$(app_table_container)
				.append(
					$('<table />')
						.attr('id',tableConfig.id)
						.attr('class','table table-striped table-hover table-responsive')
						.attr('style','width:' + tableConfig.width + 'px')
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
			
			tableConfig.cols.forEach(function(col){
				$('#app_thead_tr')
					.append(
						$('<th />')
							.attr('id','app_head_tr'+col.idAppend)
							.text(col.label)
							.attr('style','width:' + col.relativeWidth * tableConfig.width + 'px')
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
			
			$('#' + tableConfig.id + ' > tbody > tr').on('click', function(row) {
				var id = row.currentTarget.childNodes[2].innerHTML;
				//Go to new page - app detail #id
				location.href = location.origin + '/extensions/enhanced_qmc/html/app_detail.html#'+ id

			});
		});
	}
	
	getApps();	
});

