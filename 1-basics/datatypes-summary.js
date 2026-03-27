// primitive datat types

// 7 types :  string, number, boolean, null, undefined, symbol and BigInt

const score = 100
const scoreValue = 100.3     


const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber= 11432605161511641154515121511515151679954n      // bigInt



// reference (non primitive)

// Array, objects, functions


const heros = ["Baal", "Devil", "Omio"];    // array

let myObj = {                      // object
    name: "Akhil",
    age : 29,
}


const myFunction = function() {    // function
    console.log("Hello World");
}


console.log(typeof heros);