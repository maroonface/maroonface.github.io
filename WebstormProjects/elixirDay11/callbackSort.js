/**
 * Created by rv on 14/7/16.
 */
// to sort a array of objects
var myArray = [
    {
      num : 3 ,
      string : 'ravi'
    },
    {

        num : 11 ,
        string : 'rahul'

    },
    {

        num : 34 ,
        string : 'kuldeep'
    }

];

myArray.sort(function(var1,var2){
    if(var1.string > var2.string){
        return -1;
    }
    else{
        return 1;
    }
});

console.log(myArray);

// to sort a number array

var numArray = [ 77,34,5,6,2,3,90];

numArray.sort(function(num1,num2){
    if(num1 < num2){
        return -1;
    }
    else{
        return 1;
    }
});

console.log(numArray);