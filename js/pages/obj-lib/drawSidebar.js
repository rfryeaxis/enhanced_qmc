define(function(require){
	'use strict';

	var draw = function(config){
		
		//<!-- Example sidebar -->
		//<!-- https://blackrockdigital.github.io/startbootstrap-simple-sidebar/-->
		
		var body = $("body");
		
		body.append(
			$(config.wrapper.type)
				.attr('id',config.wrapper.id)
				.attr('class',config.wrapper.class)
		);
		
		$('#' + config.wrapper.id).append(
			$(config.wrapper.sidebarWrapper.type)
				.attr('id',config.wrapper.sidebarWrapper.id)
		);
		
		$('#' + config.wrapper.sidebarWrapper.id).append(
			$(config.wrapper.sidebarWrapper.sidebarNavList.type)
				.attr('id',config.wrapper.sidebarWrapper.sidebarNavList.id)
				.attr('class',config.wrapper.sidebarWrapper.sidebarNavList.class)
		);

		config.wrapper.sidebarWrapper.sidebarNavList.listItems.forEach(function(row){
			$('#' + config.wrapper.sidebarWrapper.sidebarNavList.id).append(
				$(row.type)
					.attr('id',config.wrapper.sidebarWrapper.sidebarNavList.id + row.idAppend)
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

