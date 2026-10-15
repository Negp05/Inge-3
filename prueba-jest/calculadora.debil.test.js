const { sumar, restar } = require('./calculadora');

describe('Calculadora (mal hecha: aserciones débiles)', () => {
    test('sumar devuelve algo', () => {
        expect(sumar(2, 3)).toBeDefined();
    });

    test('restar devuelve un número', () => {
        expect(typeof restar(8, 3)).toBe('number');
    });

    test('sumar es igual a sí mismo', () => {
        const resultado = sumar(1, 1);
        expect(resultado).toBe(resultado);
    });
});