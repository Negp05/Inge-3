const { sumar, restar } = require('./calculadora');

describe('Calculadora (mal hecha: sin aserciones)', () => {
    test('prueba sumar', () => {
        sumar(2, 3);
    });

    test('prueba restar', () => {
        restar(8, 3);
    });
});