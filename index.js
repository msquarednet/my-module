// My Module
var doStuff = require("./doStuff");


var MyModule = {
	addThings: function(a,b) {
		return a+b;
	},
	doStuff: doStuff
};

module.exports = MyModule;
