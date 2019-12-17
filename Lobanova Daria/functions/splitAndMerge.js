function splitAndMerge(str, sp) {
    var separatedStr = str.split(' ');
    var separatedWords = [];

    for (var i = 0; i < separatedStr.length; i++) {
        separatedWords[i] = separatedStr[i].split('').join(sp);
        
    }
    var result = separatedWords.join(sp);
    return result;    
}

module.exports = splitAndMerge