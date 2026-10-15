const { esMayorDeEdad } = require('./edad');

describe('esMayorDeEdad', () => {
    test('25 años es mayor de edad', () => {
        expect(esMayorDeEdad(25)).toBe(true);
    });

    test('10 años no es mayor de edad', () => {
        expect(esMayorDeEdad(10)).toBe(false);
    });

    test('17 años no es mayor de edad', () => {
        expect(esMayorDeEdad(17)).toBe(false);
    });

    test('18 años es mayor de edad', () => {
        expect(esMayorDeEdad(18)).toBe(true);
    });
});