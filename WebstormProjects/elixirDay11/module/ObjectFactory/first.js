/**
 * Created by rv on 14/7/16.
 */
var movie = require('./module');

var emily = movie();
emily.favMovies = 'the Notebook';
console.log('emily movie',emily.favMovies);