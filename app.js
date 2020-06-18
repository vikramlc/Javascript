class AgedPerson {
    printAge() {
        console.log(this.age);
    }
}

class Person extends AgedPerson {
    name = 'Max';

    constructor() {
        super();
        this.age = 30;
    }

    greet() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}

const p = new Person();
const p2 = new Person();

// Person {name: "Max", age: 30}
// age: 30
// name: "Max"
// __proto__: AgedPerson
// constructor: class Person
// greet: ƒ greet()
// __proto__:
// constructor: class AgedPerson
// printAge: ƒ printAge()
// __proto__: Object
console.log(p);

// Person {name: "Max", age: 30}
// age: 30
// name: "Max"
// __proto__: AgedPerson
// constructor: class Person
// greet: ƒ greet()
// __proto__:
// constructor: class AgedPerson
// printAge: ƒ printAge()
// __proto__: Object
console.log(p2);

console.log(p.__proto__ === p2.__proto__); // true

// function Person() {
//     this.name = 'Max';
//     this.age = 30;

//     this.greet = function() {
//         console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
//     };
// }

// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// };

// Person.prototype.printAge = function() {
//     console.log(this.age);
// }

// console.dir(Person);

// const person = new Person();
// person.greet();

// 1. Javascript behind the scene checks if the printAge function is present on the Person object.
// 2. If it is NOT present then it checks under the prototype property of the object.
// 3. Then it checks under the __proto__ property of the object.
// person.printAge(); 

// console.log(person.__proto__);

// function Person() {
//     this.name = 'Max';
//     this.age = 30;
// }

// Person.prototype.greet = function() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
// };

// const p = new Person();
// console.log(p);

// Getting and Setting prototypes of Objects
const course = {
    title: 'Javascript',
    rating: 5
};

Object.setPrototypeOf(course, {
    printRating: function() {
        console.log(`Rating: ${this.rating}/5`);
    }
});

course.printRating();
console.log(course.title);
// console.log(Object.getPrototypeOf(course));


// Different ways to create Object with restrictions
const student = Object.create({
    printProgress: function() {
        console.log(this.progress); // 0.8
    }
}, {
    name: {
        configurable: true,
        enumerable: true,
        value: 'Max',
        writable: true
    }
});

Object.defineProperty(student, 'progress', {
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: true
});

student.printProgress();

// Above is equivalent to below:
// const student = {
//     name: 'Max',
//     progress: 0.8
// }