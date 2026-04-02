function sayMyName () {
    console.log("A");
    console.log("k");
    console.log("h");
    console.log("i");
    console.log("l");
}

// sayMyName()


// function addTwoNumbers(num1, num2) {

// console.log(num1 + num2);

// }


function addTwoNumbers(num1, num2) {

// let result = num1 + num2
// console.log("Akhil")
// return result

return num1 + num2
}

const result = addTwoNumbers(7, 55)

// console.log("Result: ", result);




function loginUserMsg (username = "sam"){
// if (username === undefined){
if (!username){
    console.log("Please enter a username");
    return

}

return `${username} just logged in.`


}
console.log (loginUserMsg(""))
console.log (loginUserMsg())