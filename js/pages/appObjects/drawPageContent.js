define(function(require){
	'use strict';

	var draw = function(parent, config){
		
		//<!-- Example sidebar -->
		//<!-- https://blackrockdigital.github.io/startbootstrap-simple-sidebar/-->
				
		$(parent).append(
			$(config.pageContents.type)
				.attr('id',config.pageContents.id)
		);
		
		$('#' + config.pageContents.id).append(
			$(config.pageContents.container.type)
				.attr('id',config.pageContents.container.id)
				.attr('class',config.pageContents.container.class)
		);

		$('#' + config.pageContents.container.id).append(
			$(config.pageContents.container.row.type)
				.attr('id',config.pageContents.container.row.id)
				.attr('class',config.pageContents.container.row.class)
		);
		
		$('#' + config.pageContents.container.row.id).append(
			$(config.pageContents.container.row.headerRow.type)
				.attr('id',config.pageContents.container.row.headerRow.id)
				.attr('class',config.pageContents.container.row.headerRow.class)
		);
		$('#' + config.pageContents.container.row.headerRow.id).append(
			$(config.pageContents.container.row.headerRow.heading.type)
				.attr('id',config.pageContents.container.row.headerRow.heading.id)
				.attr('class',config.pageContents.container.row.headerRow.heading.class)
				.text(config.pageContents.container.row.headerRow.heading.text)
		);

		$('#' + config.pageContents.container.row.id).append(
			$(config.pageContents.container.row.headerRow.paragraph.type)
				.attr('id',config.pageContents.container.row.headerRow.paragraph.id)
				.attr('class',config.pageContents.container.row.headerRow.paragraph.class)
				.text(config.pageContents.container.row.headerRow.paragraph.text)
		);
		
		$('#' + config.pageContents.id).append(
			$(config.pageContents.tableContainer.type)
				.attr('id',config.pageContents.tableContainer.id)
				.attr('class',config.pageContents.tableContainer.class)
		);
	}

	return draw;
});
