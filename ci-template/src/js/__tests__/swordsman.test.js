import Swordsman from '../Class/Swordsman';

describe('Swordsman Class Test', () => {
  test('should create Swordsman character', () => {
    const swordsman = new Swordsman('Aragorn');
    expect(swordsman).toEqual({
      name: 'Aragorn',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });

  test('damage reduces health correctly', () => {
    const swordsman = new Swordsman('Aragorn');
    const damage = 30;
    const expectedHealth = 100 - damage * (1 - swordsman.defence / 100);
    swordsman.damage(damage);

    expect(swordsman.health).toBeCloseTo(expectedHealth);
  });

  test('damage does not set health below 0', () => {
    const swordsman = new Swordsman('Aragorn');
    swordsman.damage(150);

    expect(swordsman.health).toBe(0);
  });
});