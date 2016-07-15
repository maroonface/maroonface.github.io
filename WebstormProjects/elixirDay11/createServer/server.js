/**
 * Created by rv on 14/7/16.
 */
// to create a server

var http = require('http');
var fs = require('fs');



function onRequest(request,response){

    console.log('User connected'+request.url);

    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("Hello form the server side: :D");

}



http.createServer(onRequest).listen(8888);

console.log('the server is up and running');