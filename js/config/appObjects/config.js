define(function(require){
	'use strict';

	var config = {
		pageContents: {
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
							,text: 'App Objects'
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
						,relativeWidth: 4/20
						,headerRelativeHeight: 1
						,rowRelativeHeight: 1
					}
					,{
						idAppend: '-col2'
						,relativeWidth: 2/20
						,headerRelativeHeight: 1
						,rowRelativeHeight: 1			
					}
					,{
						idAppend: '-col3'
						,relativeWidth: 4/20
						,headerRelativeHeight: 1
						,rowRelativeHeight: 1			
					}
					,{
						idAppend: '-col4'
						,relativeWidth: 2/20
						,headerRelativeHeight: 1
						,rowRelativeHeight: 1			
					}
					,{
						idAppend: '-col5'
						,relativeWidth: 2/20
						,headerRelativeHeight: 1
						,rowRelativeHeight: 1			
					}
					,{
						idAppend: '-col6'
						,relativeWidth: 5/20
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
