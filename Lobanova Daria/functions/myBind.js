module.exports = Function.prototype.myBind = function(context) {
    var func = this;
    var bindArgs = [].slice.call(arguments, 1);
    return function() {
        var funcArgs = bindArgs.concat([].slice.call(arguments));
        return func.apply(context, funcArgs);
    }   
}