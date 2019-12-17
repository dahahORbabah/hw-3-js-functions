function reverse(str) {
    var arr = str.split(' ');
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result[i] = arr[i].split('').reverse().join('');        
    }
    return result.join(' ');
}

module.exports = reverse