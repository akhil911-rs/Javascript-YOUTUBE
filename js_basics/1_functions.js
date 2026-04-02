// function sayMyName () {
//     console.log("A");
//     console.log("k");
//     console.log("h");
//     console.log("i");
//     console.log("l");
// }

// // sayMyName()


// // function addTwoNumbers(num1, num2) {

// // console.log(num1 + num2);

// // }


// function addTwoNumbers(num1, num2) {

// // let result = num1 + num2
// // console.log("Akhil")
// // return result

// return num1 + num2
// }

// const result = addTwoNumbers(7, 55)

// // console.log("Result: ", result);




// function loginUserMsg (username = "sam"){
// // if (username === undefined){
// if (!username){
//     console.log("Please enter a username");
//     return

// }

// return `${username} just logged in.`


// }
// console.log (loginUserMsg(""))
// console.log (loginUserMsg())


//////////////////////////////////////////////////////////////////////////////////////////////2part



function calculateCartPrice ( val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Akhil",
    price: "199",
}

function handleObject(anyobject){

console.log(`Username is ${anyobject.username} and price is ${anyobject.price}` );


}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399,
})  




const  MynewArray = [200, 400, 600, 8000]

function returnSecondValue(getArray){

    return getArray[1]
}

// console.log(returnSecondValue(MynewArray));
console.log(returnSecondValue([200, 400, 600, 8000]));
