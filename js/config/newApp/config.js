define(function(require){
	'use strict';

	var config = {
		templates:{
			QVDGenerator: "351f4a08-2637-4738-815c-ff6a72981bd4"
			,FrontEnd: "64dd2bc4-6f0e-45b4-a583-1d0abb541f97"
		}
		,pageContents: {
			id: "page-content-wrapper"
			,type: '<div />'
			,container: {
				id: 'headerContainer'
				,class: 'container-fluid'
				,type: '<div />'
				,row: {
					id: 'container-row'
					,class: 'row'
					,type: '<div />'
					,headerRow:{
						id: 'container-header-row'
						,class: 'col-lg-12'
						,type: '<div />'
						,heading: {
							id: 'container-heading'
							,text: 'App Object Detail'
							,type: '<h1 />'
						}
						,paragraph: {
							id: 'container-paragraph'
							,text: ''
							,type: '<p />'
						}
					}
				}
			}
			,tableContainer: {
				id: 'app-table-container'
				,type: '<div />'
			}
			,table: {
				id: "app_table"
				,relativeWidth: 7/10
				,relativeHeight: 1
				,cols : [
					{
						idAppend: '-col1'
						,relativeWidth: 2/15
						,headerRelativeHeight: 1
						,rowRelativeHeight: 1
					}
					,{
						idAppend: '-col2'
						,relativeWidth: 2/15
						,headerRelativeHeight: 1
						,rowRelativeHeight: 1			
					}
					,{
						idAppend: '-col3'
						,relativeWidth: 2/15
						,headerRelativeHeight: 1
						,rowRelativeHeight: 1			
					}
					,{
						idAppend: '-col4'
						,relativeWidth: 1/15
						,headerRelativeHeight: 1
						,rowRelativeHeight: 1			
					}
					,{
						idAppend: '-col5'
						,relativeWidth: 1/15
						,headerRelativeHeight: 1
						,rowRelativeHeight: 1			
					}
					,{
						idAppend: '-col6'
						,relativeWidth: 3/15
						,headerRelativeHeight: 1
						,rowRelativeHeight: 1			
					}
				]
				,rowLinkTarget: '/extensions/enhanced_qmc/html/appObjectDetail.html#'
			}
		}
	};
	
	return config;
})
