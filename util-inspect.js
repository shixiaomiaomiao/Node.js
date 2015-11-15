var util = require("util");
function Person() {
	this.name = 'test';
	this.toString = function() {
		return this.name;
	}
}

var obj = new Person();
console.log(util.inspect(obj,true,2,true));
console.log(util.inspect(obj,{showHidden:true,color:true}));