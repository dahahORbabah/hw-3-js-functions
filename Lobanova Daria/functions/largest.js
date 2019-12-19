function largest(){
    var largest = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] > largest) {
            largest = arguments[i];
        }
    }
    return largest;    
}

module.exports = largest