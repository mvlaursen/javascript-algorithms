function Factorializer() {
    function tailAux(n, runningFactorial) {
        if (n === 1)
            return runningFactorial;
        else
            return tailAux(n - 1, n * runningFactorial);
    }

    this.tail = function(n, runningFactorial) {
        return tailAux(n, 1);
    };
}

Factorializer.prototype.nonTail = function(n) {
    if (n === 1)
        return 1;
    else
        return n * this.nonTail(n - 1);
}

Factorializer.prototype.loop = function(n) {
    var runningFactorial = 1;
    
    for (var i = 2; i <= n; i++) {
        runningFactorial *= i;
    }

    return runningFactorial;
}

var factorializer = new Factorializer();
console.log("nonTail: " + factorializer.nonTail(15));
console.log("tail: " + factorializer.tail(15));
console.log("loop: " + factorializer.loop(15));
