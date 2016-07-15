/**
 * Created by rv on 15/7/16.
 */
var express = require('express');
var app = express();

app.get('/helloWorld',function(request,response){
   response.send('Hello world down by express');
});

app.listen(1234,function(){
    console.log('You are at the port: 1234');
});