function sum(nums) {
    return (arguments.length === 0) ? 0 : nums + sum.apply(null, [].slice.call(arguments, 1)); 
}

module.exports = sum