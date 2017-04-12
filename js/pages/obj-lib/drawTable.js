define(function(require){
	'use strict';

	var draw = function(parent, tableArr, config){

		//setup table
		$(parent)
			.append(
				$('<table />')
					.attr('id',config.id)
					.attr('class','table table-striped table-hover table-responsive')
					.attr('style','width:' + config.width + 'px')
					.append(
						$('<thead />')
							.attr('id',config.id + '_thead')
							.append(
								$('<tr />')
									.attr('id',config.id + 'thead_tr')
								)
						)
					.append(
						$('<tbody />')
							.attr('id',config.id + '_tbody')
					)
			)
		;
				
		//append header row to table
		for(var colNo = 0; colNo < tableArr.header.length; colNo++){
			$('#' + config.id + 'thead_tr')
				.append(
					$('<th />')
						.attr('id',config.id + 'thead_tr' + config.cols[colNo].idAppend)
						.text(tableArr.header[colNo])
						.attr('style','width:' + config.cols[colNo].relativeWidth * config.width + 'px')
				)
		}

		//append body rows
		for(var rowNo = 0; rowNo < tableArr.body.length; rowNo++){

			$('#' + config.id + '_tbody')
				.append(
				$('<tr />')
					.attr('id',config.id + '_tbody' + '_row' + rowNo)
				)
			;
			
			tableArr.body[rowNo].col.forEach(function(col){
				$('#' + config.id + '_tbody' + '_row' + rowNo)
					.append(
						$('<td />')
							//.attr('id',id + '_name')
							.text(col)
					)
				;
			})
		}
	}

	return draw;
});

