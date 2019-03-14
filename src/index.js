const cons = (a, b) => {
  const pair = f => f(a, b);
  pair.isPair = true;
  return pair;
};

const car = pair => pair(a => a);

const cdr = pair => pair((a, b) => b);

const isPair = pair => typeof pair === 'function' && pair.isPair === true;

const toString = (pair) => {
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
  cons, car, cdr, isPair, toString,
};
