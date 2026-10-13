const { sumar, restar } = require('./calculadora');

describe('Pruebas de la calculadora', () => {
    test('suma dos números positivos', () => {
        expect(sumar(2, 3)).toBe(5);
    });

    test('resta dos números', () => {
        expect(restar(8, 3)).toBe(5);
    });

    test('suma números negativos', () => {
        expect(sumar(-2, -3)).toBe(-5);
    });
});