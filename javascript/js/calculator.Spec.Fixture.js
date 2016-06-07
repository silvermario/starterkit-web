describe('calculator tests', function() {
    'use strict';

    // inject the HTML fixture for the tests
    beforeEach(function() {
      var fixture = '<div id="fixture"><input type="number" class="form-control" id="firstNumber">' +
        '<input type="number" class="form-control" id="secondNumber">' +
      '<button type="button" class="btn btn-primary btn-lg" onclick="calculatorInterface.add()" id="add">Add</button>' +
      '<button type="button" class="btn btn-primary btn-lg" onclick="calculatorInterface.subtract()">Subtract</button>' +
      '<button type="button" class="btn btn-primary btn-lg" onclick="calculatorInterface.multiply()">Multiply</button>' +
      '<button type="button" class="btn btn-primary btn-lg" onclick="calculatorInterface.divide()">Divide</button>' +
      '<button type="button" class="btn btn-primary btn-lg" onclick="calculatorInterface.factorial()">Factorial!</button>' +
      '<input id="result" type="number" class="form-control" disabled="disabled" placeholder="Result..." /></div>';

      document.body.insertAdjacentHTML(
        'afterbegin',
        fixture);
    });

    // remove the html fixture from the DOM
    afterEach(function() {
      document.body.removeChild(document.getElementById('fixture'));
    });

    describe('add method', function() {
        it('should add two numbers', function() {
            // given
            var a = 4,
                b = 3,
                result;
            // when
            result = calculator.add(a, b);
            // then
            expect(result).toBe(7);
        });
    });
    describe('add method', function() {
        it('should add two numbers', function() {
            // given
            console.log(document.getElementById('firstNumber').value);
            document.getElementById('firstNumber').value = 4;
            document.getElementById('secondNumber').value = 3;
            document.getElementById('add').click();
            // when
            //result = calculator.add(a, b);
            // then
            expect(document.getElementById('result').innerHTML).toBe(7);
        });
    });
});
