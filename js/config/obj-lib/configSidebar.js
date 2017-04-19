define(function(require){
	'use strict';

	var config = {
		sidebarWrapper: {
			id: "sidebar-wrapper"
			,type: '<div />'
			,sidebarNavList: {
				id: "sidebar-nav"
				,class: "sidebar-nav"
				,type: '<ul />'
				,listItems : [
					{
						idAppend: '-row1'
						,class: "sidebar-brand"
						,text: "Enhanced QMC"
						,href: "#"
						,type: '<li />'
					}
					,{
						idAppend: '-row2'
						//,class: ""
						,text: "Apps"
						,href: "apps.html"
						,type: '<li />'
					}
					,{
						idAppend: '-row3'
						//,class: ""
						,text: "App Objects"
						,href: "appObjects.html"
						,type: '<li />'
					}
					,{
						idAppend: '-row4'
						//,class: ""
						,text: "Data Connections"
						,href: "#"
						,type: '<li />'
					}
					,{
						idAppend: '-row5'
						//,class: ""
						,text: "New App"
						,href: "#"
						,type: '<li />'
					}
				]
			}
		}
	};
	
	return config;
})