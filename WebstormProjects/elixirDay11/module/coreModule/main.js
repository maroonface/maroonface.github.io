/**
 * Created by rv on 14/7/16.
 */
var fs = require('fs');
fs.writeFileSync('some.txt','this is sometext created using require js');
console.log(fs.readFileSync('some.txt').toString());