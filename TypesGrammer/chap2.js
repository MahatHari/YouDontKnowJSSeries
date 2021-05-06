/* Arrays */
// => TODO: In JS arrays are just containers for any types of value from string to number to object
// to even another array (multidimensional arrays)

let a = [1, '2', [3]];
console.log(a.length); //3
console.log(a[0]); //1
console.log(a[2][0] === 3); //true

// => Sparse Array => leaving or creating empty/missing slots in array
let b = [];
b[0] = 1;
b[2] = 2;
console.log(b[1]); // undefined => missing slots
console.log(b.length); //3
console.log(b[1] === 'undefined'); // Though b[1] returns undefined, it returns false on check

// Arrays as object => key value => acts differenct with lenght property
let c = [];
c[0] = 1;
c['foobar'] = 2;
console.log(c.length); //1
console.log(c.foobar); // 2
console.log(c); // [1, foobar:2]

/* Strings */

/* JS strings are not the same as arrays of character */
let a1 = 'foo';
let b1 = ['f', 'o', 'o'];
// Strings do have shallow resemblance to arrasy, they are array likes
// have .length, indexOf, concat methods lik arrays

console.log(a1.length); //3
console.log(b1.length); //3

console.log(a1.indexOf('o'));
console.log(b1.indexOf('o'));

let c1 = a1.concat('bar');
let d1 = b1.concat(['b', 'a', 'r']);
console.log(c1), console.log(a1);
console.log(a1 === c1); //false
console.log(b1 === d1); //false

// Borrowing array methods when dealing with strings, that are not actually available for string

console.log(a1.join); // undefined
// But = >
let a2 = Array.prototype.join.call(a1, '-');
console.log(a2); // => returns string f-o-o
console.log(typeof a2);

// using .map on String
let a3 = Array.prototype.map
  .call(a1, (v) => {
    return v.toUpperCase() + '.';
  })
  .join('');
console.log(a3);

// Reversing a string => arrays have reverse() in-place mutator method but strings dont have
//console.log(a1.reverse()); //=> TypeError a1.reverse is not a function

console.log(b1.reverse()); //=> modifies the arrays
console.log(b1);

//=> Reversing String => convert to array => reverse => join to string
let a4 = a1.split('').reverse().join('');
console.log('Reversed String=>', a4);

/* Numbers */

let x = 42.59;
x.toFixed(0);
let y = x.toFixed(0); //=> changes to string
console.log(typeof y, y);

console.log(0xf3); //=> hexadecimal for 243
console.log(0363); // => octal for 243  => will not work in strict mode

console.log(0o363); //=> THIS is now ES6 way of declaring octal number
console.log(0o363); /// 0O363 => with capital O is same with 0o363  small o;

console.log(0b11); // => for 3 in binary, also Captial 0B would work

// Rounding error, calsue as the tolerance for comparision
// Tiny value is often called Machine Epsilon, 2^-52;
if (!Number.EPSILON) {
  Number.EPSILON = Math.pow(2, -52);
}

function numberCloseEnoughToEqual(n1, n2) {
  return Math.abs(n1 - n2) < Number.EPSILON;
}

let p = 0.1 + 0.2;
let q = 0.3;

console.log('Floating Point Numbs, 0.1+0.2===0.3', p === q);

console.log(
  'With Tolerance Comparision, 0.1+0.2≈0.3 ',
  numberCloseEnoughToEqual(p, q)
);

// To test if a value is safe integer, using ES6 => Number.isSafeInteger()
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
console.log(Number.isSafeInteger(Math.pow(2, 53))); // false
console.log(Number.isSafeInteger(Math.pow(2, 53) - 1)); //true

//Polyfill for safe integer
if (!Number.isSafeInteger) {
  Number.isSafeInteger = function (num) {
    return Number.isInteger(num) && Math.abs(num) <= Number.MAX_SAFE_INTEGER;
  };
}

/* Special Values  */
// for undefined type  =>  value is undefined  => missing value OR hasnot had any value yet
// for null type = val is null => empty value OR had value but does not have anymore

// VOID operator => no return even though can have side effects

function doTestThing() {
  if (!App.ready) {
    // try again later
    return void setTimeout(doTestThing, 100);
  }
  let result;
  result = 2 + 2;
  console.log(result);

  if (doTestThing()) {
    // handle next task right away
    return 2 + 3;
  }
}

let App = { ready: true };

doTestThing(App);
setTimeout(() => (App.ready = false), 100);
