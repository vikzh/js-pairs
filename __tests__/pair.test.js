import {
  cons, car, cdr, toString,
} from '../src';

describe('Pair', () => {
  it('#cons', () => {
    const pair = cons(1, 2);
    expect(car(pair)).toBe(1);
    expect(cdr(pair)).toBe(2);
  });

  it('#toString', () => {
    const pair = cons('text1', 'text2');
    expect(toString(pair)).toBe('(text1, text2)');
  });

  it('#toString2', () => {
    const pair = cons(5, cons(7, 9));
    expect(toString(pair)).toBe('(5, (7, 9))');
  });

  it('#checkPair', () => {
    expect(() => {
      car('test');
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      cdr(2345);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      car(() => 1);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      car({ key: 'testValue' });
    }).toThrowErrorMatchingSnapshot();
  });
});
