const nameSet = new Set(['Hi', 'how', 'are', 'you']);
nameSet.add('Hi');

if(nameSet.has('are')) {
    console.log('Present');
}

nameSet.delete('you');

for(const entry of nameSet.entries()) {
    console.log(entry); // o/p: ["Hi", "Hi"], ["how", "how"], ["are", "are"]
    console.log(entry[0]); // o/p: {"Hi", "how", "are"}
}

console.log('Values:');

for(const value of nameSet.values()) {
    console.log(value);
}

console.log(nameSet);