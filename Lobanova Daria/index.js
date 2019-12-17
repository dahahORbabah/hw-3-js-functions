var readline = require('readline');
var splitAndMerge = require('./functions/splitAndMerge');

var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r.question('Enter str: ', function (str) {
    r.question('Enter sp: ', function (sp) {
        splitAndMerge(str, sp);
        r.close();
    });
});



