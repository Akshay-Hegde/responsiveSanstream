

var Main = {

	initialize: function() {

		$('extended-bio-link').addEvent('click', Main.handleContentToggle);

	},

	handleContentToggle: function (eventObject) {
		
		eventObject.stop();
		console.log(eventObject);
		$(document).getElement( eventObject.target.get('href') ).toggleClass('shown');

	}

};

$(document).addEvent('domready', Main.initialize);
