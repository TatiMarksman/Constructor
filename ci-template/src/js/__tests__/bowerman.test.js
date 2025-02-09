import Bowerman from '../Class/Bowerman';

describe('Bowerman Class Test', () => {
  test('should create Bowerman character', () => {
    const bowerman = new Bowerman('Robin');
    expect(bowerman).toEqual({
      name: 'Robin',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  test('damage reduces health correctly', () => {
    const bowerman = new Bowerman('Robin');
    const damage = 30;
    const expectedHealth = 100 - damage * (1 - bowerman.defence / 100);
    bowerman.damage(damage);

    expect(bowerman.health).toBeCloseTo(expectedHealth);
  });

  test('damage does not set health below 0', () => {
    const bowerman = new Bowerman('Robin');
    bowerman.damage(150);

    expect(bowerman.health).toBe(0);
  });
});