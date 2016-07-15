/**
 * Created by rv on 15/7/16.
 */
var express = require('express');
var add = express();

add.listen(7777,function(){
    console.log('server is running at port 7777');
});

add.get('/',function(request,response){
   var firstname = 'Hello ' + request.query.firstName;
    response.send(firstname);
});