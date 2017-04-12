define(function(require){
	'use strict';

	var config = {
		table: {
			id: "app_table"
			,width: 500
			,relativeWidth: 7/10
			,relativeHeight: 1
			,cols : [
				{
					idAppend: '-col1'
					,label: "App Name"
					,relativeWidth: 2/10
					,headerRelativeHeight: 1
					,rowRelativeHeight: 1
				}
				,{
					idAppend: '-col2'
					,label: "Owner"
					,relativeWidth: 2/10
					,headerRelativeHeight: 1
					,rowRelativeHeight: 1			
				}
				,{
					idAppend: '-col3'
					,label: "ID"
					,relativeWidth: 2/10
					,headerRelativeHeight: 1
					,rowRelativeHeight: 1			
				}
			]
		}
	};
	
	return config;
})