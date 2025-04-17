const { calculateAge, isAdult } = require('../ageUtils');

describe('Age utilities', () => {
  test('calculates age for someone born in 2000', () => {
    expect(calculateAge(2000)).toBe(25);
  });

  test('calculates age for someone born in 1995', () => {
    expect(calculateAge(1995)).toBe(30);
  });

  test('calculates age for someone born in 2020', () => {
    expect(calculateAge(2020)).toBe(5);
  });

  test('checks if someone born in 2000 is an adult', () => {
    expect(isAdult(2000)).toBe(true);
  });

  test('checks if someone born in 2020 is not an adult', () => {
    expect(isAdult(2020)).toBe(false);
  });
});
