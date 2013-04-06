/*
All blocks are absolutely positioned.
Based on the screen size/dimensions the layout is determined
Four basic forms are possible:

landscape (desktop)
portrait
small landscape
small portrait

each block has a minimum width and height (defined in the css)
when no room is available for these dimensions the block turns into a option 
(with its content hidden by default)

design the layout of the portrait and smaller views extensively.

call different size images on smaller devices:
if (screen.width >= 600) {
	// load complicated script
	// swap in full-source images for low-source ones
}


*/

var Infoblocks = {

	orientation: 'landscape', // other option is portrait
	arrangementLogic:null,
	siteframeSpace: null,
	siteframeElement: null,
	minMargin: 2,
	maxMargin: 10,
	bodySize:null,
	bodyElement: null,

	initialize: function(){

		this.siteframeElement = $('siteFrame');
		this.bodyElement = $$('body')[0];
		this.setDimensionsOfSpace();
		this.buildBackground();

		console.log(this);

		window.addEvent('resize',this.arrangeBlocks.bind(this));

	},

	buildBackground: function(){
		var testObject = new Element('div',{
			class: 'testObject'
		});
		testObject.inject(this.bodyElement);
	},

	arrangeBlocks: function(eventObject) {

		this.setDimensionsOfSpace();

	},

	setDimensionsOfSpace: function(){

		// correcting the calculation for the body size:
		this.bodySize = window.getSize();
		this.bodyElement.setStyles({
			height: this.bodySize.y,
			width: this.bodySize.x
		});

		// getting the available space for the infoblocks:
		this.siteframeSpace = this.siteframeElement.getDimensions();
		this.orientation = ( this.bodySize.y >  this.bodySize.x)? 'portrait':'landscape';
		
		if(this.orientation == 'portrait'){
			this.bodyElement.removeClass('landscape');
			this.bodyElement.addClass('portrait');
		}else{
			this.bodyElement.removeClass('portrait');
			this.bodyElement.addClass('landscape');
		}
	},
};


$(document).addEvent('domready', function(){

	Infoblocks.initialize();
});
