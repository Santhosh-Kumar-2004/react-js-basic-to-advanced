// 1. React ES6 Classes
class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
  }
  const mycar = new Model("Ford", "Mustang");
  mycar.show();

console.log(mycar)

// 2. React ES6 Arrow Functions
hello = () => {
    return "Hello World!";
  }

App = () => {
    return "It's me SanOp"
}

hello = () => "Hello World!";

// 3. React ES6 Variables
var x = 5.6; //var has a function scope, not a block scope.

let x = 5.6; //let has a block scope.

const x = 5.6; //const has a block scope. and the value of the const never change

// 4. React ES6 Array Methods
const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

console.log(myArray)
console.log(myList)

// 5. React ES6 Destructuring

//Before
const vehicles = ['mustang', 'f-150', 'expedition'];
// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

//after
const vehicles1 = ['mustang', 'f-150', 'expedition'];
// new way
const [car1, truck1, suv1] = vehicles;  //When destructuring arrays, the order that variables are declared is important.
const [truck2] = vehicles;
console.log(truck2)

//Destructuring comes in handy when a function returns an array:
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);

const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
}
  
myVehicle(vehicleOne);
  
function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}

// 6. React ES6 Spread Operator
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

// 7. React ES6 Modules

// Modules
// JavaScript modules allow you to break up your code into separate files.

// This makes it easier to maintain the code-base.

// ES Modules rely on the import and export statements.

// Export
// You can export a function or variable from any file.

// Let us create a file named person.js, and fill it with the things we want to export.

// There are two types of exports: Named and Default.

// Import
// You can import modules into a file in two ways, based on if they are named exports or default exports.

// Named exports must be destructured using curly braces. Default exports do not.

//Export code
export const name = "Jesse"
export const age = 40

const name = "Jesse"
const age = 40

export { name, age }

//import cods
import { name, age } from "./person.js";

import message from "./message.js";

// 8. React ES6 Ternary Operator
// The ternary operator is a simplified conditional operator like if / else.

// Syntax: condition ? <expression if true> : <expression if false></expression>
if (authenticated) {
    renderApp();
  } else {
    renderLogin();
  } 

//   With Ternary
authenticated ? renderApp() : renderLogin();