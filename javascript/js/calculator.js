'use strict';
var calculator = (function() {
    var add = function(a, b) {
            if (isNaN(a) || isNaN(b)) {
                throw new Error('Not a number');
            } else {
                return a + b;
            }
        },
        subtract = function(a, b) {
            if (isNaN(a) || isNaN(b)) {
                throw new Error('Not a number');
            } else {
                return a - b;
            }
        },
        multiply = function(a, b) {
            if (isNaN(a) || isNaN(b)) {
                throw new Error('Not a number');
            } else {
                return a * b;
            }
        },
        divide = function(a, b) {
            if (isNaN(a) || isNaN(b)) {
                throw new Error('Not a number');
            } else if (b === 0) {
                throw new Error('Division by 0');
            } else {
                return a / b;
            }
        },
        factorial = function(a) {
            if (isNaN(a) || a < 0) {
                throw new Error('Wrong number');
            } else {
                return factorialCore(a);
            }

        },
        factorialCore = function(n) {
            if (n <= 1) return 1;

            var ret = 1;
            for (var i = 2; i <= n; ++i)
                ret *= i;

            return ret;
        }

    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        factorial: factorial
    }
})();
