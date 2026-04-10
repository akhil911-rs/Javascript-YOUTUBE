const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currval) {

//     console.log(`accumulator: ${accumulator} and currval: ${currval}`);
// return accumulator + currval

// }, 0)




const myTotal = myNums.reduce(  (accumulator, currval) =>  accumulator+currval, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JS course", 
        price: 2999,


},

    {
        itemName: "Py course", 
        price: 999,


},

    {
        itemName: "Mobile dev course", 
        price: 5999,


},

    {
        itemName: "data science course", 
        price: 12999,


},
]

const priceToPay = shoppingCart.reduce(  ( accumulator, item) => accumulator + item.price, 0)

console.log(priceToPay);