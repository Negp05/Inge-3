const { sumar, restar } = require('./calculadora');

describe('Calculadora (pruebas que fallan)', () => {
    test('sumar 2 + 3 debería dar 6', () => {
        expect(sumar(2, 3)).toBe(6);
    });

    test('restar 8 - 3 debería dar 4', () => {
        expect(restar(8, 3)).toBe(4);
    });
});