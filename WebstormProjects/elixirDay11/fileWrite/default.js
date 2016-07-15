/**
 * Created by rv on 14/7/16.
 */
var fs = require('fs');
console.log('Executed before the fiel write');
fs.writeFileSync('file','This is the second file my dear','utf8');
console.log('file written');
console.log('Executed after teh file write');