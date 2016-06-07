describe('calculator tests', function() {
    'use strict';

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
    it('should throw an error', function() {
        // given
        var a = 'd',
            b = 3,
            resultFunction;
        // when
        resultFunction = function() {
            calculator.add(a, b);
        };
        // then
        expect(resultFunction).toThrow();
    });

    describe('subtract method', function() {
        it('should subtract b from a', function() {
            // given
            var a = 4,
                b = 5,
                result;
            // when
            result = calculator.subtract(a, b);
            // then
            expect(result).toBe(-1);
        });
    });
    describe('multiply method', function() {
        it('should multiply 2 numbers', function() {
            // given
            var a = 4,
                b = 3,
                result;
            // when
            result = calculator.multiply(a, b);
            // then
            expect(result).toBe(12);
        });
        it('should multiply 1 number by 0', function() {
            // given
            var a = 4,
                b = 0,
                result;
            // when
            result = calculator.multiply(a, b);
            // then
            expect(result).toBe(0);
        });
    });
    describe('divide method', function() {
        it('should divide 2 numbers', function() {
            // given
            var a = 8,
                b = 2,
                result;
            // when
            result = calculator.divide(a, b);
            // then
            expect(result).toBe(4);
        });
        it('should throw an error- dividing by 0', function() {
            // given
            var a = 4,
                b = 0,
                resultFunction;
            // when
            resultFunction = function() {
                calculator.divide(a, b);
            };
            // then
            expect(resultFunction).toThrow();
        });
    });
    describe('factorial method', function() {
        it('should compute factorial of 3', function() {
            // given
            var a = 3,
                result;
            // when
            result = calculator.factorial(a);
            // then
            expect(result).toBe(6);
        });
        it('should compute factorial of 2', function() {
            // given
            var a = 2,
                result;
            // when
            result = calculator.factorial(a);
            // then
            expect(result).toBe(2);
        });
        it('should throw an error for computing a factorial smaller than 0', function() {
            // given
            var a = -2,
                resultFunction;
            // when
            resultFunction = function() {
                calculator.factorial(a);
            };
            // then
            expect(resultFunction).toThrow();
        });
    });
});
