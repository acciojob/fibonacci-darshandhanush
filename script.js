function fibonacci(num) {
// your code here
	    if (num <= 1) {
        return num;
    }
    
    let fibPrev = 0;
    let fibCurr = 1;
    let fibNext;
    
    for (let i = 2; i <= num; i++) {
        fibNext = fibPrev + fibCurr;
        fibPrev = fibCurr;
        fibCurr = fibNext;
    }
    
    return fibCurr;
	
}

module.exports = fibonacci;
