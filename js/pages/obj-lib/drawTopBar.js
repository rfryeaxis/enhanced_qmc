define(function(require){
	'use strict';

	var draw = function(require, parent){

		//<!-- Example sidebar -->
		//<!-- https://blackrockdigital.github.io/startbootstrap-simple-sidebar/-->
		
		parent.append(
			$('<div />')
				.attr('id',"topbar-nav")
				.attr('class',"topbar-nav")
		);
				
		var topBarNav = $("#topbar-nav");
		
		var topBarItems = [
			{
				idAppend: '-col1'
				,class: "topbar-brand"
				,text: "Standard QMC"
				,href: "qmc.html"
			}
			,{
				idAppend: '-col2'
				,class: "topbar-brand"
				,text: "Enhanced QMC"
				,href: "apps.html"
			}
		];

		topBarItems.forEach(function(row){
			topBarNav.append(
				$('<li />')
					.attr('id',topBarNav.id + row.idAppend)
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

