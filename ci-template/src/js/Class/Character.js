class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Name must be between 2 and 10 characters');
    }
    if (!types.includes(type)) {
      throw new Error('Invalid type');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

export default Character;