function toCamelCase(str) {
    var reg = /[a-zA-z]/;
    var arr = str.split('');
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i].match(reg) || arr[i] === '_') {
            result[i] = arr[i + 1].toUpperCase();
            arr.splice(i + 1, 1);            
        } else {
            result[i] = arr[i];
        }        
    }
    return result.join('');
}

module.exports = toCamelCase