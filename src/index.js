const cons = (a, b) => {
  const pair = f => f(a, b);
  pair.isPair = true;
  return pair;
};

const isPair = pair => typeof pair === 'function' && pair.isPair === true;

const checkPair = (pair) => {
  if (!isPair(pair)) {
    const value = typeof pair === 'object' ? JSON.stringify(pair, null, 2) : String(pair);
    throw new Error(`Argument must be pair, but it was '${value}'`);
  }
};

const car = pair => {
  checkPair(pair);
  return pair(a => a);
};

const cdr = pair => {
  checkPair(pair);
  return pair((a, b) => b);
};

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
