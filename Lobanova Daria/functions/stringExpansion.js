function stringExpansion(str) {
    if (!str.length) {
        return str;
    } else {
        var chars = str.split('');
        var lastChar = chars[chars.length - 1];        
        var result = [];
        for (var i = 0; i < chars.length; i++) {
            if (!isNaN(chars[i])) {
                if (isNaN(chars[i + 1])) {
                    for (var j = 0; j < chars[i]; j++) {
                        result.push(chars[i + 1]);
                    }
                } 
            } else {
                if (result.length === 0) {
                    while(isNaN(chars[i + 1]) && i < chars.length - 1) {
                        result.push(chars[i]);
                        i++;
                    }
                    if (isNaN(lastChar)) {
                        result.push(lastChar);
                    }
                }
            }
        }
        return result.join('');
    }    
}

module.exports = stringExpansion