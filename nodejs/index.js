/*(function(exports,require,module,__filename,__dirname){
    console.log(_dirname);
    console.log(_filename)
});*/

/*var greet = require('./greet');
greet.sayHello("Manoram");

*/

var http = require('http');
http.createServer(function(request,response){
    response.statusCode = 200;
    response.end("hello World!!");
}).listen(3000,function(){
    console.log("Server started on port 3000");
});
console.log("I have created a server");