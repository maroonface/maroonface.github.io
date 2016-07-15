/**
 * Created by rv on 14/7/16.
 */
var myObject = {
    favFood : 'pizza',
    favMovie : 'theShawshankRedemption'

}

// the object is passe das reference

var person =  myObject ;
person.favFood = 'sandwitch';

console.log(person.favFood);