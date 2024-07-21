function fibonacci(num) {
// your code here
	if (num<=0){
		throw new ERROR("Input must be positive integer")
	}
	    if (num == 1) {
        return 0;
    }
	    if (num == 2){
			return 1;
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
