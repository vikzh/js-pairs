import {
  cons, car, cdr, toString,
} from '../src';

describe('Pair', () => {
  it('#cons', () => {
    const pair = cons(1, 2);
    expect(car(pair)).toBe(1);
    expect(cdr(pair)).toBe(2);
  });
});
