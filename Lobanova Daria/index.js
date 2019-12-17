var readline = require('readline');

var splitAndMerge = require('./functions/splitAndMerge');
var convert = require('./functions/convert');
var toCamelCase = require('./functions/toCamelCase');
var reverse = require('./functions/reverse');

var stringExpansion = require('./functions/stringExpansion');
var largest = require('./functions/largest');
var smallest = require('./functions/smallest');
var transform = require('./functions/transform');
var sum = require('./functions/sum');
var countDown = require('./functions/countDown');
var myBind = require('./functions/myBind');

var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Enter the number of function -> ');

r.on('line', function(line) {
    switch(line.trim()) {
        case '1':
            // r.question('Enter str: ', function (str) {
            //     r.question('Enter sp: ', function (sp) {
            //         splitAndMerge(str, sp);
            //         // r.close();
            //     });
            // });
            console.log(splitAndMerge('hello world', '!'));                       
            break;
        case '2':
            console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));            
            break;
        case '3':
            console.log(toCamelCase('The_stealth-warrior'));            
            break;
        case '4':
            console.log(reverse('A fun little challenge!'));            
            break;
        case '5':
            console.log(stringExpansion('3D2a5d2f'));
            break;
        default:
            process.exit(0);
    }
});





