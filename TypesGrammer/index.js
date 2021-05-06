function testFunction(a, b) {
  console.log(a);
}

// checking in type of Function
console.log(typeof testFunction === 'function');

// parameter length
console.log(testFunction.length);

// Arrays are Objects in Javascript
const a = [1, 2, 3];
console.log(typeof a === 'object');

// Values as Types  => In JS Varaibale dont have Types, Values have Types
let b = 2;
console.log(typeof b); // number

b = 'c';
console.log(typeof b); // string

// Undefined Vs Undeclared
let c;
console.log(typeof c); // undefined

let d = 42;
console.log(typeof d); // number
d = c;
console.log(typeof d); // undefined

// e is not defined
// console.log(e);   // Reference Error e is not defined

// check if a variable is defined or not if not define

// Immediately Invoked Function Expression (IIFE)
(function () {
  /* function featureXYZ(y) {
    console.log(y * y);
  } */

  function doSomethingCool(x) {
    let helper =
      typeof featureXYZ !== 'undefined'
        ? featureXYZ(x)
        : function (x) {
            console.log('Hi', x * x * x);
          };
    let val = helper(x);
    return val;
  }
  doSomethingCool(4);
})(); //=> Bracket at the end of function body, invokes function immediately

// Dependency Injection => passing function inside function and define another function
// if function does not exist

function testSomethingCool(featureXYZ) {
  let helper =
    featureXYZ ||
    function () {
      console.log('I exist if featureXYZ is not passed ');
    };
  let val = helper();
  return val;
}

// calling functions
testSomethingCool();
