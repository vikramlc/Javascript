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

// Factory functions
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));

function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  alert( "Hello, " + getFullName() );
  alert( "Bye, " + getFullName() );

}

// sayHiBye('Vikram', 'Chawan');

// Closures
let username = 'Max';

function greetUser() {
  // let name = 'Anna';
  console.log('Hi ' + name);
}

name = 'Manuel';
greetUser();
