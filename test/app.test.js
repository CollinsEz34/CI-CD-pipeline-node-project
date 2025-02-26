const { add, subtract, multiply, divide } = require('./calculator-app'); // Adjust the path as needed

test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('multiplies 4 * 2 to equal 8', () => {
    expect(multiply(4, 2)).toBe(8);
});

test('divides 8 / 2 to equal 4', () => {
    expect(divide(8, 2)).toBe(4);
});

test('dividing by zero should return an error', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});
