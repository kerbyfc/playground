define(function (require) {
	var $ = require('jquery');
	var $el = $('<a href="#" id="send-result">Send result</a>').appendTo('body');
	var EMAIL = 'alexander.lukin@infowatch.com,roman.efremenko@infowatch.com';


	var email ={

		set: function (subj, code) {
			$el.attr('href', 'mailto:' + EMAIL
				+ '?subject=' + encodeURIComponent('Result for ' + subj)
				+ '&body=' + encodeURIComponent(code)
			);
		}

	};


	$el.mousedown(function () {
		email.onclick(email);
	});



	// export
	return email;
});
