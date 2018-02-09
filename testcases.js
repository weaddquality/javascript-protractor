var utils = require('./utils.js');
var ap = require('./addqpage.js');

describe('Securemailbox Tests', function() {

	beforeEach(function(){
		 // example click homelogo to start from before all tests
		 ap.clickLogo();
	});

	
	it('Should work to ...', function(){
		//expect logo to exists just as an easy example
		expect((ap.logo).isPresent()).toBe(true);
	},30000);
		
});




