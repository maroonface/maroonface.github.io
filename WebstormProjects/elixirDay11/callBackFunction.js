/**
 * Created by rv on 14/7/16.
 */
let add =   function(a,b){
        return a+b;
};

let multiply = function(a,b){
        return a*b;
};

let calc = function( a , b , callback ){
        if(typeof callback === 'function'){
                return callback( a , b );
        }
};

console.log(calc( 2,3, function(a,b){
        return a-b;
}
));