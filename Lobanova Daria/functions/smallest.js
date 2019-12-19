function smallest(){
    var smallest = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] < smallest) {
            smallest = arguments[i];
        }
    }
    return smallest;    
}

module.exports = smallest