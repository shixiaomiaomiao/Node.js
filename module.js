var name;
exports.setName = function( theName )
{
	name = theName;
}
exports.sayHello = function()
{
	console.log("hello " + name);
}
var test = function(){
	
	console.log("I am just a tester!")
}