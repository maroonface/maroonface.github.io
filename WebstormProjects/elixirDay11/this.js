/**
 * Created by rv on 14/7/16.
 */
//this is basically a reference to whoever is calling it

var ravi = {
    myNameFunction : function(){
        console.log('My name is ravi');
        console.log(this === ravi);
    }
};

ravi.myNameFunction();

