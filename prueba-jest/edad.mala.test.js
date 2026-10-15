const { esMayorDeEdad } = require('./edad');

describe('esMayorDeEdad (mal hecha)', () => {
    test('acepta a un adulto', () => {
        expect(esMayorDeEdad(25)).toBeDefined();
    });

    test('rechaza a un menor', () => {
        esMayorDeEdad(10);
    });

    test('devuelve un booleano', () => {
        expect(typeof esMayorDeEdad(30)).toBe('boolean');
    });
});