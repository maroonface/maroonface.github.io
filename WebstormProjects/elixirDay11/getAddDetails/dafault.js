/**
 * Created by rv on 15/7/16.
 */
var express = require('express');
var fs = require('fs');
var add = express();
var userDetails ={};
add.listen(7777,function(){
    console.log('Server is up at port 7777');
});
add.get('/addDetails',function(request,response){
    if(request.query.name !== null){
        userDetails.name = request.query.name;
    }
    if(request.query.age !== null){
        userDetails.age = request.query.age;
    }
    response.send('Details Added');

    var data = response.send(userDetails);

    fs.writeFileSync()('file.txt',  data );

});