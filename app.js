// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const testArray1 = ['ANWAR KHAN', 'NARENDER  DHAWAN'];

// const value11 = testArray1.find((name) => {
//     const splits = name.split(/\s+/);
//     return splits[0].trim()==='NARENDER' && splits[1].trim()==='DHAWAN';
// });

// console.log(value11);

/*
const prices = [10.99, 2.99, 5.99, 8.99];
const tax = 0.19;
const taxAdjustedPrices = [];

// ForEach have access to the index and also we can take action on each element
prices.forEach((price, idx, prices) => {
    const actualObj = { index: idx, taxAdjPrice: price * (1 + tax)};
    taxAdjustedPrices.push(actualObj);
});

console.log(taxAdjustedPrices);
*/

const prices = [10.99, 2.99, 5.99, 8.99];
const tax = 0.19;

// ForEach have access to the index and also we can take action on each element
const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const actualObj = { index: idx, taxAdjPrice: price * (1 + tax)};
    return actualObj;
});

console.log(prices, taxAdjustedPrices);

// Sort()
// This converts elements in array in string and thenn sorts.
const naturalSortedPrices = prices.sort(); 
console.log('Natural Sorted Prices', naturalSortedPrices); // o/p: [10.99, 2.99, 5.99, 8.99]

// This sorts elements based on the condition in the sort method.
const sortedPrices = prices.sort((a, b) => {
    if(a > b) {
        return 1;
    } else if(a < b) {
        return -1;
    } else {
        return 0;
    }
});

console.log('Sorted Prices', sortedPrices);
console.log('Reversed Prices', sortedPrices.reverse());

// Filter()
const filteredPrices = prices.filter((price, idx, prices) => {
    return price > 6;
});

console.log('Filtered Prices', filteredPrices);

// Reduce(): Accepts 2 parameters: 1st: function(), 2nd: initial value
const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
    return prevValue + curValue;
}, 0);

console.log('Sum: ', sum);