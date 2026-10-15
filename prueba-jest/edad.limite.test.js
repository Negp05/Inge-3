const { esMayorDeEdad } = require('./edad');

describe('esMayorDeEdad (caso límite)', () => {
    test('una persona de exactamente 18 años es mayor de edad', () => {
        expect(esMayorDeEdad(18)).toBe(true);
    });
});