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
            //input string and separator
            // r.question('Enter str: ', function (str) {
            //     r.question('Enter sp: ', function (sp) {
            //         splitAndMerge(str, sp);
            //         // r.close();
            //     });
            // });
            console.log(splitAndMerge('Hello world', ',')); 
            console.log(splitAndMerge('My name is Jonh', ' '));                      
            break;
        case '2':
            //input in while 2 param`s
            console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));            
            break;
        case '3':
            //input string
            console.log(toCamelCase('The_Stealth_Warrior'));
            console.log(toCamelCase('the-stealth-warrior'));            
            break;
        case '4':
            //input string
            console.log(reverse('A fun little challenge!'));            
            break;
        case '5':
            //input string
            console.log(stringExpansion('3D2a5d2f'));
            console.log(stringExpansion('3d332f2a'));
            console.log(stringExpansion('abcde'));
            break;
        case '6':
            //input number of elements and the array
            console.log('Largest -> ' + largest(2, 0.1, -5, 100, 3));
            console.log('Smallest -> ' + smallest(2, 0.1, -5, 100, 3));
            break;
        case '7':
            //input: 1.number of elements 2.the array 3.the element to find
            console.log(transform([10, 20, 30, 40, 50])[3]());
            console.log(transform([10, 20, 30, 40, 50])[4]());
            break;
        case '8':
            //input: 1.number of elements 2.the array
            console.log(sum(1, 3, 5, 7));
            break;
        case '9':
            //input the integer number
            console.log(countDown(3));
            break;
        case '10':
            console.log(myBind());
            break;
        default:
            process.exit(0);
    }
});





