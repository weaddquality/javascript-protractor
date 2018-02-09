'use strict';  

var utils = require('./utils.js');

var addqpage = function(){
	
	var logo = element(by.css('.logo'));   
		
	//Exported
	this.logo =logo;
		
	this.clickLogo = function(){
//		console.log('Click logo)
		utils.waitForElement(logo,4000);
		logo.click();	
	};
	
};
module.exports = new addqpage();