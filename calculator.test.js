const calculator = require('./calculator');

test('addition', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('subtraction', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test('multiplication', () => {
    expect(calculator.multiply(3, 5)).toBe(15);
});

test('division', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('divide by zero', () => {
    expect(() => {
        calculator.divide(5, 0);
    }).toThrow(Error);
});