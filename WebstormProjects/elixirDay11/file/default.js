/**
 * Created by rv on 14/7/16.
 */
var fs = require('fs');

console.log('Executed before file reading');
var data = fs.readFileSync('file','utf8');
console.log(data);
console.log('Executed after file reading');