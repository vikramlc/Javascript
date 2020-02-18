const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const testArray1 = ['ANWAR KHAN', 'NARENDER  DHAWAN'];

const value11 = testArray1.find((name) => {
    const splits = name.split(/\s+/);
    return splits[0].trim()==='NARENDER' && splits[1].trim()==='DHAWAN';
});

console.log(value11);