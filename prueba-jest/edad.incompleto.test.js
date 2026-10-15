const { esMayorDeEdad } = require('./edad');

describe('esMayorDeEdad (incompleta)', () => {
    test('un adulto de 25 años es mayor de edad', () => {
        expect(esMayorDeEdad(25)).toBe(true);
    });

    test('un niño de 10 años no es mayor de edad', () => {
        expect(esMayorDeEdad(10)).toBe(false);
    });
});