// 1. Let and Const

// 'let' allows reassignment but is block-scoped.
let x = 10; 
x = 20; // Reassigning is allowed.
console.log(x); // Output: 20

// 'const' creates an immutable variable.
const y = 30; 
// y = 40; // Error: Assignment to a constant variable.
console.log(y); // Output: 30

//-----------------------------------------------------------------------------

// 2. Arrow Functions

// Traditional function
function add(a, b) {
    return a + b;
  }
  
// Arrow function: Shorter syntax for the same functionality
const addArrow = (a, b) => a + b;

console.log(add(2, 3));       // Output: 5
console.log(addArrow(2, 3)); // Output: 5
  
//-----------------------------------------------------------------------------

// 3. Template Literals

const name1 = "John";
const age1 = 25;

// Using template literals
const message = `My name is ${name1} and I am ${age1} years old.`;
console.log(message); // Output: My name is John and I am 25 years old.

// Multiline strings
const multiline = `This is line one.
This is line two.`;
console.log(multiline);
// Output:
// This is line one.
// This is line two.

//-----------------------------------------------------------------------------

// 4. Default Parameters
function greet(name = "Guest") {
    // 'Guest' is used if no name is provided.
    return `Hello, ${name}!`;
  }
  
console.log(greet());       // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!
  
//-----------------------------------------------------------------------------

// 5. Destructuring
// Array destructuring
const numbers = [1, 2, 3];
const [first, second] = numbers; // Assigns 1 to 'first', 2 to 'second'
console.log(first, second); // Output: 1 2

// Object destructuring
const person = { name: "Alice", age: 25 };
const { name, age } = person; // Assigns 'Alice' to 'name' and 25 to 'age'
console.log(name, age); // Output: Alice 25

//-----------------------------------------------------------------------------

// 6. Rest and Spread Operators
// Rest operator: Combines the remaining arguments into an array.
function sum(...nums) {
    return nums.reduce((total, n) => total + n, 0);
  }
  console.log(sum(1, 2, 3)); // Output: 6
  
  // Spread operator: Spreads elements into a new array.
  const arr1 = [1, 2];
  const arr2 = [...arr1, 3, 4]; // Combines elements into a new array.
  console.log(arr2); // Output: [1, 2, 3, 4]
  
//-----------------------------------------------------------------------------

// 7. Modules (Import/Export)
// Exporting a function (module.js)
export const greet = () => "Hello!";

// Importing a function (main.js)
import { greet } from "./module.js";
console.log(greet()); // Output: Hello!

//-----------------------------------------------------------------------------

// 8. Classes
class Person {
    constructor(name) {
      // Constructor initializes the object's properties.
      this.name = name;
    }
  
    greet() {
      // Method inside the class.
      return `Hello, ${this.name}!`;
    }
  }
  
  const person1 = new Person("Alice");
  console.log(person1.greet()); // Output: Hello, Alice!

//-----------------------------------------------------------------------------

//   9. Promises
const fetchData = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error fetching data.");
    }
  });
  
  fetchData
    .then(response => console.log(response)) // If successful.
    .catch(error => console.error(error));   // If an error occurs.
    
//-----------------------------------------------------------------------------

// 10. Enhanced Object Literals
const name2 = "Alice";
const age2 = 25;

const person2 = {
  name2, // Property shorthand
  age2,  // Property shorthand
  greet() {
    // Method shorthand
    return `Hello, ${this.name}!`;
  },
};

console.log(person2.greet()); // Output: Hello, Alice!

//-----------------------------------------------------------------------------

// 11. For...of Loop
const numbers3 = [1, 2, 3];
for (const num of numbers3) {
  console.log(num); // Output: 1, 2, 3 (one per line)
}

//-----------------------------------------------------------------------------

// 12. Map and Set
// Using Map
const map = new Map();
map.set("name", "Alice");
console.log(map.get("name")); // Output: Alice

// Using Set
const set = new Set([1, 2, 2, 3]);
console.log(set); // Output: Set { 1, 2, 3 }

//-----------------------------------------------------------------------------

// 13. Symbols
const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log(sym1 === sym2); // Output: false (each Symbol is unique)

//-----------------------------------------------------------------------------

// 14. Iterators and Generators
function* generator() {
    yield 1; // Pauses here and returns 1.
    yield 2; // Pauses here and returns 2.
  }
  
  const gen = generator();
  console.log(gen.next().value); // Output: 1
  console.log(gen.next().value); // Output: 2
  

  