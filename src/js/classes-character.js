import Character from './character';

export class Bowerman extends Character {
  constructor(name, type) {
    super(name, type = 'Bowerman');
  }
}

export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type = 'Swordsman');
  }
}

export class Magician extends Character {
  constructor(name, type) {
    super(name, type = 'Magician');
  }
}

export class Daemon extends Character {
  constructor(name, type) {
    super(name, type = 'Daemon');
  }
}

export class Undead extends Character {
  constructor(name, type) {
    super(name, type = 'Undead');
  }
}

export class Zombie extends Character {
  constructor(name, type) {
    super(name, type = 'Zombie');
  }
}
