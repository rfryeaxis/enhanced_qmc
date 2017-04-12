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
						idAppend: '-row1'
						//,class: ""
						,text: "Apps"
						,href: "apps.html"
						,type: '<li />'
					}
					,{
						idAppend: '-row1'
						//,class: ""
						,text: "App Objects"
						,href: "#"
						,type: '<li />'
					}
					,{
						idAppend: '-row1'
						//,class: ""
						,text: "Data Connections"
						,href: "#"
						,type: '<li />'
					}
				]
			}
		}
	};
	
	return config;
})