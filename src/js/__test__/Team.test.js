import Character from '../Character';
import Team from '../Team';

const bowman = new Character('Bob', 'Bowman');
const daemon = new Character('Hellscream', 'Daemon');
const swordsman = new Character('Knife', 'Swordsman');

test('check similar characters', () => {
  const team = new Team();
  team.add(bowman);
  team.add(daemon);
  team.add(swordsman);
  const expected = 'This member is already exist';
  const received = team.add(bowman);
  expect(received).toBe(expected);
});

test('check group characters 1', () => {
  const team = new Team();
  const expected = 1;
  const received = team.addAll(bowman, bowman);
  expect(received).toEqual(expected);
});

test('check group characters 2', () => {
  const team = new Team();
  const expected = 2;
  const received = team.addAll(bowman, daemon, daemon);
  expect(received).toEqual(expected);
});

test('check group characters 3', () => {
  const team = new Team();
  const expected = 3;
  const received = team.addAll(bowman, daemon, swordsman);
  expect(received).toEqual(expected);
});

test('check group characters 4', () => {
  const team = new Team();
  const expected = 3;
  const received = team.addAll(bowman, daemon, swordsman, swordsman);
  expect(received).toEqual(expected);
});

test('check array', () => {
  const team = new Team();
  team.addAll(bowman, daemon, swordsman);
  const expected = [
    {
      name: 'Bob',
      type: 'Bowman',
    },
    {
      name: 'Hellscream',
      type: 'Daemon',
    },
    {
      name: 'Knife',
      type: 'Swordsman',
    },
  ];
  const received = team.toArray();
  expect(received).toEqual(expected);
});
