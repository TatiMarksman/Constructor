import Daemon from '../Class/Daemon';

describe('Daemon Class Test', () => {
  test('should create Daemon character', () => {
    const daemon = new Daemon('Megatron');
    expect(daemon).toEqual({
      name: 'Megatron',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  test('damage reduces health correctly', () => {
    const daemon = new Daemon('Megatron');
    const damage = 30;
    const expectedHealth = 100 - damage * (1 - daemon.defence / 100);
    daemon.damage(damage);

    expect(daemon.health).toBeCloseTo(expectedHealth);
  });

  test('damage does not set health below 0', () => {
    const daemon = new Daemon('Megatron');
    daemon.damage(200);

    expect(daemon.health).toBe(0);
  });
});