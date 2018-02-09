//  to run from commando prompt: protractor conf.js --capabilities.browserName=chrome --baseUrl=http://www.addq.se/ --params.user=tomas.helmfridsson@addq.se


// An example configuration file.
exports.config = {
	directConnect: true,    // comment this row to ignore this for saucelab run
	sauceUser : "sauceUser",
	sauceKey : "sauceKey",
	params : {
		user : 	'tomas.helmfridsson@addq.se'
	},
	
	baseUrl : 'https://www.addq.se/',
	// Capabilities to be passed to the webdriver instance.
	capabilities: {
    	'browserName': 'chrome',   // Use this if not run on saucelab
//	  	'browserName': 'safari',   // Need MAC
//		'browserName': 'firefox',
//		'browserName': 'MicrosoftEdge',
//	  	'browserName': 'internet explorer',
//  	'platform': 'ANY',
//  	'version': '11'
        "name" : "AddQ example test",
        'loggingPrefs': {
            'driver': 'ALL', // Driver logger: Driver logger is to capture the messages logged at driver level(Logged by the webdriver).
            'server': 'ALL', // Server logger: Server logger is to capture the messages logged at selenium server console.
            'browser': 'ALL' // Browser logger: Browser logger is to capture the messages logged in the Browser console.
          }
	// The logging levels available in protractor are: “OFF”, “SEVERE”, “WARNING”, “INFO”, “CONFIG”, “FINE”, “FINER”, “FINEST”, “ALL”.
  },
  
  	// Framework to use. Jasmine is recommended.
  	framework: 'jasmine',

  	// Spec patterns are relative to the current working directory when
  	// protractor is called.
  	specs: ['testcases.js'],

  	// Options to be passed to Jasmine.
  	jasmineNodeOpts: {
  		defaultTimeoutInterval: 30000
  	},
 
  	// Run Before all Tests
  	onPrepare: function() {
  		  		
//  		console.log(jasmine);
  		browser.waitForAngularEnabled(false).then(function(){
			browser.get(browser.baseUrl)
  		}); 

  	}
};
