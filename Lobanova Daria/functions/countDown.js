function countDown(num) {
    if (Number.isInteger(num)) {
        setInterval(function() {
            if(num >= 0) {
                console.log(num);
                num--;
            } else {
                clearInterval();
            }
        }, 1000);        
    } else {
        console.log('Input error');
        return;
    }
}

module.exports = countDown