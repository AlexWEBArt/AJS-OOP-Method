import Character from '../character';

test('Damage test', () => {
  const hero = new Character('Elusiv', 'Daemon');
  hero.damage(10);
  expect(hero.health).toBe(94);
});

test('Ultimate damage test', () => {
  const hero = new Character('Elusiv', 'Daemon');
  hero.damage(200);
  expect(hero.health).toBe(0);
});

test('Level up test', () => {
  const hero = new Character('Elusiv', 'Daemon');
  const heroUpgrade = {
    name: 'Elusiv',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  hero.damage(10);
  hero.levelUp();
  expect(hero).toEqual(heroUpgrade);
});

test('Level up error', () => {
  const hero = new Character('Elusiv', 'Daemon');
  hero.damage(200);
  expect(() => hero.levelUp()).toThrow();
});
