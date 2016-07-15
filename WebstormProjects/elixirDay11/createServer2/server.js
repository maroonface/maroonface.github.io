/**
 * Created by rv on 14/7/16.
 */
var http = require('http');

var server = http.createServer(onRequest);

server.listen(8828, function(){
   console.log('Server was hit by a user');
});

function onRequest(request,response){

    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end('Hello form the server side' + request.url);
}
