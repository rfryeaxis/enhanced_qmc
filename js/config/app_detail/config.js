define(function(require){
	'use strict';

	var tableConfig = {
		table: {
			id: "app_table"
			,width: 500
			,relativeWidth: 7/10
			,relativeHeight: 1
			,cols : [
				{
					idAppend: '_col1'
					,label: "App Name"
					,relativeWidth: 2/10
					,headerRelativeHeight: 1
					,rowRelativeHeight: 1
				}
				,{
					idAppend: '_col2'
					,label: "Owner"
					,relativeWidth: 2/10
					,headerRelativeHeight: 1
					,rowRelativeHeight: 1			
				}
				,{
					idAppend: '_col3'
					,label: "ID"
					,relativeWidth: 2/10
					,headerRelativeHeight: 1
					,rowRelativeHeight: 1			
				}
			]
		}
	};
	
	return tableConfig;
})