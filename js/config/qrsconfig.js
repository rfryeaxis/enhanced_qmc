define(function(require){
	'use strict';
	
	 var config = {
		host: "qliksenseserver"
		,port: 443
		,isSecure: true
	};

	var qrs = RxQ.connectQRS(config);
	return qrs;
})