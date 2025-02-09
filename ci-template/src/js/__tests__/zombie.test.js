import Zombie from '../Class/Zombie';

describe('Zombie Class Test', () => {
  test('should create Zombie character', () => {
    const zombie = new Zombie('Walker');
    expect(zombie).toEqual({
      name: 'Walker',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });

  test('damage reduces health correctly', () => {
    const zombie = new Zombie('Walker');
    const damage = 30;
    const expectedHealth = 100 - damage * (1 - zombie.defence / 100);
    zombie.damage(damage);

    expect(zombie.health).toBeCloseTo(expectedHealth);
  });

  test('damage does not set health below 0', () => {
    const zombie = new Zombie('Walker');
    zombie.damage(150);

    expect(zombie.health).toBe(0);
  });
});