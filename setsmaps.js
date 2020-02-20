// const nameSet = new Set(['Hi', 'how', 'are', 'you']);
// nameSet.add('Hi');

// if(nameSet.has('are')) {
//     console.log('Present');
// }

// nameSet.delete('you');

// for(const entry of nameSet.entries()) {
//     console.log(entry); // o/p: ["Hi", "Hi"], ["how", "how"], ["are", "are"]
//     console.log(entry[0]); // o/p: {"Hi", "how", "are"}
// }

// console.log('Values:');

// for(const value of nameSet.values()) {
//     console.log(value);
// }

// console.log(nameSet);

const person1 = {name: 'Max'};
const person2 = {name: 'Manuel'};

const personData = new Map([[person1, [{date: 'Yesterday', price: 10}]]]);

for(const entry of personData.entries()) {
    console.log(entry);
}

console.log(personData.get(person1));

console.log('Key Value: ');
for(const [key, value] of personData.entries()) {
    console.log(key, value);
}

console.log('Values:');
for(const value of personData.values()) {
    console.log(value);
}

console.log(personData);