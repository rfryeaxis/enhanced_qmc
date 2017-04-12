define(function(require){
	'use strict';

	var draw = function(parent, config){
		
		//<!-- Example sidebar -->
		//<!-- https://blackrockdigital.github.io/startbootstrap-simple-sidebar/-->
				
		$(parent).append(
			$(config.sidebarWrapper.type)
				.attr('id',config.sidebarWrapper.id)
		);
		
		$('#' + config.sidebarWrapper.id).append(
			$(config.sidebarWrapper.sidebarNavList.type)
				.attr('id',config.sidebarWrapper.sidebarNavList.id)
				.attr('class',config.sidebarWrapper.sidebarNavList.class)
		);

		config.sidebarWrapper.sidebarNavList.listItems.forEach(function(row){
			$('#' + config.sidebarWrapper.sidebarNavList.id).append(
				$(row.type)
					.attr('id',config.sidebarWrapper.sidebarNavList.id + row.idAppend)
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

