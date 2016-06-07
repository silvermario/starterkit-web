'use strict';
var calculatorInterface = (function() {
    var add = function() {
            var a = parseInt(document.getElementById("firstNumber").value),
                b = parseInt(document.getElementById('second-number').value);
            document.getElementById('result').value = calculator.add(a, b);
        },
        subtract = function() {
            var a = parseInt(document.getElementById('firstNumber').value),
                b = parseInt(document.getElementById('second-number').value);

            document.getElementById('result').value = calculator.subtract(a, b);
        },
        multiply = function() {
            var a = parseInt(document.getElementById('firstNumber').value),
                b = parseInt(document.getElementById('second-number').value);

            try {
                document.getElementById('result').value = calculator.multiply(a, b);

            } catch (e) {
                document.getElementById('result').value = e;

            }
        },
        divide = function() {
            var a = parseInt(document.getElementById('firstNumber').value),
                b = parseInt(document.getElementById('second-number').value);
            try {
                document.getElementById('result').value = calculator.divide(a, b);

            } catch (e) {
                document.getElementById('result').value = e;

            }

        },
        factorial = function() {
            var a = parseInt(document.getElementById('firstNumber').value);

            try {
                document.getElementById('result').value = calculator.factorial(a);
            } catch (e) {
                document.getElementById('result').value = e;
            }
        };

    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        factorial: factorial
    };
})();
