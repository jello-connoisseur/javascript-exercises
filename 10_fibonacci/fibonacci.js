const fibonacci = function(num) {

    if (num < 0){
        return "OOPS";
    }
    let fib = [];
    fib[0] = 1;
    fib[1] = 1;

    for (i = 3; i <= num; i++){
        let newFib = fib[i-2] + fib[i-3];
        fib.push(newFib);
    }

    return fib[num-1];

};

// Do not edit below this line
module.exports = fibonacci;
