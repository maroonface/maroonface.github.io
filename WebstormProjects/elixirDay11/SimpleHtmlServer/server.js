/**
 * Created by rv on 15/7/16.
 */
var express = require('express');
var path = require('path');
var add = express();

add.get('/', function(request , response){
   response.sendFile('index.html',{root : path.join(__dirname,'./')});
});


add.listen(8888,function(){
    console.log('server is hosted on : 8888');
});