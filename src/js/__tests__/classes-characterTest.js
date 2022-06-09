import {
  Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../classes-character';

test('Creating a Bowerman', () => {
  const hero = {
    name: 'Elusiv',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const result = new Bowerman('Elusiv');
  expect(result).toEqual(hero);
});

test('Creating a Swordsman', () => {
  const hero = {
    name: 'Elusiv',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const result = new Swordsman('Elusiv');
  expect(result).toEqual(hero);
});

test('Creating a Magician', () => {
  const hero = {
    name: 'Elusiv',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const result = new Magician('Elusiv');
  expect(result).toEqual(hero);
});

test('Creating a Daemon', () => {
  const hero = {
    name: 'Elusiv',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const result = new Daemon('Elusiv');
  expect(result).toEqual(hero);
});

test('Creating a Undead', () => {
  const hero = {
    name: 'Elusiv',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const result = new Undead('Elusiv');
  expect(result).toEqual(hero);
});

test('Creating a Zombie', () => {
  const hero = {
    name: 'Elusiv',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const result = new Zombie('Elusiv');
  expect(result).toEqual(hero);
});
