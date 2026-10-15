const { sumar, restar } = require('./calculadora');

describe('Calculadora (mal hecha: casos incompletos)', () => {
    test('suma 0 + 0', () => {
        expect(sumar(0, 0)).toBe(0);
    });

    test('resta 0 - 0', () => {
        expect(restar(0, 0)).toBe(0);
    });
});