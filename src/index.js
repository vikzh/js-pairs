/**
 * Make a pair
 * @param a any
 * @param b any
 * @returns {function(*): *}
 * @example
 * const pair = cons(1, 'text');
 * @example
 * const pair = cons(1, cons(3, 4));
 */
const cons = (a, b) => {
  const pair = f => f(a, b);
  pair.isPair = true;
  return pair;
};

/**
 * Check if it a Pair
 * @param pair
 * @returns {boolean}
 * @example
 * const pair1 = cons (1, 2);
 * isPair(pair1); // true
 * @example
 * const somethingElse = 'iAmText';
 * isPair(somethingElse); // false
 */
const isPair = pair => typeof pair === 'function' && pair.isPair === true;

const checkPair = (pair) => {
  if (!isPair(pair)) {
    const value = typeof pair === 'object' ? JSON.stringify(pair, null, 2) : String(pair);
    throw new Error(`Argument must be pair, but it was '${value}'`);
  }
};

/**
 * Get first element from pair
 * @param pair
 * @returns first Element
 * @example
 * const pair = cons(1, 2);
 * car(pair); //1
 */
const car = (pair) => {
  checkPair(pair);
  return pair(a => a);
};

/**
 * Get second element from pair
 * @param pair
 * @returns second element
 * @example
 * const pair = cons(1, 2);
 * cdr(pair); //2
 */
const cdr = (pair) => {
  checkPair(pair);
  return pair((a, b) => b);
};

/**
 * Convert pair to string
 * @param pair
 * @returns string
 * @example
 * const pair1 = cons(1, 2);
 * toString(pair1); // (1, 2)
 * @example
 * const pair2 = cons(1, cons(1, 2));
 * toString(pair2); // (1, (1, 2));
 */
const toString = (pair) => {
  checkPair(pair);
  const iter = (p) => {
    if (!isPair(p)) {
      return String(p);
    }
    const left = car(p);
    const right = cdr(p);
    return `(${iter(left)}, ${iter(right)})`;
  };

  return iter(pair);
};

export {
  cons, car, cdr, isPair, toString, checkPair,
};
