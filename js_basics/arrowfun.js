const user = {

    username: "Akhil",

    price: 999,

    welcomeMsg: function() {
console.log(`${this.username} , welcome to website.`);

console.log(this);

    }
}

// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

// console.log(this);


// function COdE() {

//     console.log(this);
// }

// COdE()



// const coDe = function() {

//     let username = "Akhil"
//     console.log(this.username);

// }





// const addTwo = (num1, num2) =>  {

//     return num1 + num2

// }

// console.log(addTwo(3, 4))









// const addTwo = (num1, num2) =>    num1 + num2


// const addTwo = (num1, num2) =>    (num1 + num2)


const addTwo = (num1, num2) =>   ({  username: "Akhil"})

   



console.log(addTwo(3, 4))




// const myArray = [1, 2, 3, 4, 5, 6, ]

// myArray.forEach()