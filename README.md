[![Maintainability](https://api.codeclimate.com/v1/badges/dbf278721139bc62da89/maintainability)](https://codeclimate.com/github/vikzh/js-pairs/maintainability)[![Test Coverage](https://api.codeclimate.com/v1/badges/dbf278721139bc62da89/test_coverage)](https://codeclimate.com/github/vikzh/js-pairs/test_coverage)[![Build Status](https://travis-ci.org/vikzh/js-pairs.svg?branch=master)](https://travis-ci.org/vikzh/js-pairs)
# js-pairs
## Install
````
npm install pairs-js
````
## Using
````js
import { cons, car, cdr, toString } from 'pairs-js';

const pair = cons(1, 2);
car(pair); // 1
cdr(pair); // 2
toString(pair); // (1, 2)

const pair2 = cons(1, cons(2, 3));
car(pair); //1
cdr(pair); //pair(2, 3);
toString(pair2); //(1, (2, 3);
````

## Documentation
### Table of Contents

-   [cons][1]
    -   [Parameters][2]
    -   [Examples][3]
-   [isPair][4]
    -   [Parameters][5]
    -   [Examples][6]
-   [car][7]
    -   [Parameters][8]
    -   [Examples][9]
-   [cdr][10]
    -   [Parameters][11]
    -   [Examples][12]
-   [toString][13]
    -   [Parameters][14]
    -   [Examples][15]

## cons

Make a pair

### Parameters

-   `a`  any
-   `b`  any

### Examples

```javascript
const pair = cons(1, 'text');
```

```javascript
const pair = cons(1, cons(3, 4));
```

Returns **function (any): any** 

## isPair

Check if it a Pair

### Parameters

-   `pair`  

### Examples

```javascript
const pair1 = cons (1, 2);
isPair(pair1); // true
```

```javascript
const somethingElse = 'iAmText';
isPair(somethingElse); // false
```

Returns **[boolean][16]** 

## car

Get first element from pair

### Parameters

-   `pair`  

### Examples

```javascript
const pair = cons(1, 2);
car(pair); //1
```

Returns **any** first Element

## cdr

Get second element from pair

### Parameters

-   `pair`  

### Examples

```javascript
const pair = cons(1, 2);
cdr(pair); //2
```

Returns **any** second element

## toString

Convert pair to string

### Parameters

-   `pair`  

### Examples

```javascript
const pair1 = cons(1, 2);
toString(pair1); // (1, 2)
```

```javascript
const pair2 = cons(1, cons(1, 2));
toString(pair2); // (1, (1, 2));
```

Returns **any** string

[1]: #cons

[2]: #parameters

[3]: #examples

[4]: #ispair

[5]: #parameters-1

[6]: #examples-1

[7]: #car

[8]: #parameters-2

[9]: #examples-2

[10]: #cdr

[11]: #parameters-3

[12]: #examples-3

[13]: #tostring

[14]: #parameters-4

[15]: #examples-4

[16]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
