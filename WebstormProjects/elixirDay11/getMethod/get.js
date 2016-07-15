/**
 * Created by rv on 15/7/16.
 */
var express = require('express');
var path = require('path');
var add = express();

add.listen(2222,function(){
   console.log('server running at port 2222');
});

add.get('/',function(request,response){
    response.end(JSON.stringify(request.query));
});