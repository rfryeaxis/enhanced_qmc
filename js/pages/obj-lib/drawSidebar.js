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
				idAppend: '-row1'
				,class: "sidebar-brand"
				,text: "Enhanced QMC"
				,href: "#"
			}
			,{
				idAppend: '-row1'
				//,class: ""
				,text: "Apps"
				,href: "apps.html"
			}
			,{
				idAppend: '-row1'
				//,class: ""
				,text: "App Objects"
				,href: "appObjects.html"
			}
			,{
				idAppend: '-row1'
				//,class: ""
				,text: "Data Connections"
				,href: "#"
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

