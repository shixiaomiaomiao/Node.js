var fs = require("fs");
var util = require("util");
/*fs.rename('./events.EventEmitter-error.js','./events-EventEmitter-error.js',function(error){
	if(error) 
	{
		throw error;
	}
	console.log('renamed complete!')
})*/
/*fs.stat("./events-EventEmitter-error.js",function( err ,stat){
	if( err )
	{
		throw err;
	}
	console.log("stat: " + JSON.stringify(stat))
	console.log(err);
})*/
fs.readFile("QA.txt","UTF-8",function(err,data){
	if( err )
	{
		console.log(err);
	}
	console.log(data);
	console.log("err : "+ err);
})