// Pure functions
function addPureFun(num1, num2) {
  return num1 + num2;
}

console.log(addPureFun(1,2));
console.log(addPureFun(12,22));

// Impure functions
function addImpureFun(num1) {
  const num2 = 5*Math.random();
  return num1 + num2;
}

console.log(addImpureFun(10));
console.log(addImpureFun(42));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1,2));
