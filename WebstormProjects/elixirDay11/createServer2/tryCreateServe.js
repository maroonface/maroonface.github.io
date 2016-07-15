/**
 * Created by rv on 15/7/16.
 */
var express = require('express');
var add = express();

add.listen(8888,function(){
    console.log('the sserver is ported at 8888');
});

add.get('/',function(request,response){
   response.send('helloWorld');
});