// console.log("Say \"what\" again!");

// let age = 30
// const age = 30 // Throws an error because 'const' can't be reassigned.
// age = 31

// console.log(age)

// ======= DATA TYPES: String, Number, Boolean, null, undefidined. ======

// const name = 'John'
// const age = 30
// const rating = 4.5
// const isCool = true
// const x = null // null is an object??
// const y = undefined
// let z 

// console.log(typeof x);

// ========= Concatenation =========
// console.log("My name is " + name + " and I am " + age);
// ======= Template Strings ========
// console.log(`My name is ${name} and I am ${age}`);

// const s = 'Hello World'
// const l = 'tech, monkey, sweet, code'
// console.log(s.length); // .length is a property, not a method. Hence no ()
// // console.log(s.toLocaleUpperCase());
// // console.log(s.substring(0,5).toLocaleUpperCase());
// console.log(s.split('')); // Creates an array of each letter
// console.log(l.split(', '));

// ======================= Arrays ==========================

// const numbers = new Array(1,2,3,4,5)

// console.log(numbers);

// const fruits = ['apples','oranges','pears'];
// // console.log(fruits);
// fruits[3] = 'grapes' 
// // Manipulation vs. reassigning 
// // console.log(fruits[1]);
// fruits.push('mangos')
// fruits.unshift('strawberries')
// // console.log(fruits);
// // fruits.pop();
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('oranges'));
// console.log(fruits);

// Paused at 25 min. 

// ======================= Object Literals ==========================

const person = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['music','movies','sports'],
    address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
    }
}

// console.log(person);
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);

// === DESTRUCTURING setting variables using the object ====

// const { firstName, lastName, address: { city }} = person; 

// console.log(firstName);
// console.log(city);

// person.email = 'john@gmail.com'

// console.log(person);

//========ARRAYS and OBJECTS

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        completed: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        completed: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        completed: false
    }
]

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);