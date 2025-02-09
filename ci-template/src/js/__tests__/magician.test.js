import Magician from '../Class/Magician';

describe('Magician Class Test', () => {
  test('should create Magician character', () => {
    const magician = new Magician('Gandalf');
    expect(magician).toEqual({
      name: 'Gandalf',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  test('damage reduces health correctly', () => {
    const magician = new Magician('Gandalf');
    const damage = 30;
    const expectedHealth = 100 - damage * (1 - magician.defence / 100);
    magician.damage(damage);

    expect(magician.health).toBeCloseTo(expectedHealth);
  });

  test('damage does not set health below 0', () => {
    const magician = new Magician('Gandalf');
    magician.damage(200);

    expect(magician.health).toBe(0);
  });
});