

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


var BuyButtons = {

	parsedQueryString: null,

	initialize: function() {

		console.log(window.location.href);
		if(window.location.search.length > 0){

			BuyButtons.parsedQueryString = window.location.search.replace('?','').parseQueryString();
			console.log(BuyButtons.parsedQueryString);
		}

		if(BuyButtons.parsedQueryString){
			
			Object.each(BuyButtons.parsedQueryString, BuyButtons.presetForm);
		}
	},

	presetForm: function(value, key){

		var formElements = $$("[name='" + key + "']");
		
		console.log(formElements,formElements[0].get('type'));

		if(formElements.length > 0){

			if(formElements[0].get('type') == 'radio'){
				
				formElements.each(function(radio, index){
				
					if(radio.get('value') == value) radio.selected = true;
					else							radio.selected = false;
				});
			}
			else{

				formElements[0].set(value) = value;
			}
		}
	}
}

$(document).addEvent('domready', function(){
	
	Main.initialize();
	BuyButtons.initialize();
});
