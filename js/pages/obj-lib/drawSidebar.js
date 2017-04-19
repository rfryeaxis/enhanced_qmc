define(function(require){
	'use strict';

	var draw = function(require, parent){

		//<!-- Example sidebar -->
		//<!-- https://blackrockdigital.github.io/startbootstrap-simple-sidebar/-->
		
		parent.append(
			$('<div />')
				.attr('id',"sidebar-nav")
				.attr('class',"sidebar-nav")
		);
		
		var sidebarNav = $("#sidebar-nav");
		
		var sidebarItems = [
			{
				idAppend: '-row-title'
				,class: "sidebar-brand"
				,text: "Enhanced QMC"
				,href: "#"
			}
			,{
				idAppend: '-row-apps'
				//,class: ""
				,text: "Apps"
				,href: "apps.html"
			}
			,{
				idAppend: '-row-new-app'
				//,class: ""
				,text: "New App"
				,href: "new_app.html"
			}
			,{
				idAppend: '-row-app-objects'
				//,class: ""
				,text: "App Objects"
				,href: "appObjects.html"
			}
			,{
				idAppend: '-row-data-connections'
				//,class: ""
				,text: "Data Connections"
				,href: "data_connections.html"
			}
		];

		sidebarItems.forEach(function(row){
			sidebarNav.append(
				$('<li />')
					.attr('id',sidebarNav.id + row.idAppend)
					.attr('class',row.class)
					.append(
						$('<a />')
							.attr('href',row.href)
							.text(row.text)
					)
			);
		})
	}

	return draw;
});

