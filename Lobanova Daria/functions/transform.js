function transform(baseArray) {
   var newArray = baseArray.map(function(num) {
        return function() {
            return num;                 
        }
    })
    return newArray;
}

module.exports = transform