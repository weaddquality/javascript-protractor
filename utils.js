module.exports.writeScreenShot = writeScreenShot;
module.exports.waitForElement = waitForElement;
module.exports.printCapabilites = printCapabilites;
module.exports.waitForText = waitForText;


// For Screenshots
var fs = require('fs');
function writeScreenShot(data, filename) {
	var stream = fs.createWriteStream(filename);
	stream.write(new Buffer(data, 'base64'));
	stream.end();
}
// Take Screen shots	
//      var utils = require('./utils.js');
//		browser.takeScreenshot().then(function(data) {
//			utils.writeScreenShot(data, 'picture.png');
//		});


//For wait for non Angular pages
function waitForElement(el, waitTimeoutMilliseconds){
//	console.log('Wait for Element '+el.locator().toString()+'for '+waitTimeoutMilliseconds);
	return browser.wait(function() { return el.isPresent(); }, waitTimeoutMilliseconds)
    .then(function(){
    	browser.sleep(200);
    	return browser.wait(function() { return el.isPresent(); }, waitTimeoutMilliseconds);
//    	return browser.wait(function() { return el.isDisplayed(); }, waitTimeoutMilliseconds);
    });
}

function waitForText(el){
	browser.wait(function(){
		el.isPresent().then(function(){
			console.log('is Presented');
		}).then(function(){
			return browser.wait(el.getText().then(function(text){
				browser.waitForAngular();
				console.log('GetText: '+text);
			}));
		}); 
	});
}

// Print to console log the Capabilities    
function printCapabilites(){
	browser.getCapabilities().then(function(cap) {
		console.log(cap);
	});
}


