// for of loop

// ["", "", ""]

// [{}, {}, {}]




const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}



const greetings = "Hello World"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}



// Maps

const map = new Map ()
map.set('IN', "India")
map.set('ISR', "Israel")
map.set('POL', "Poland")
map.set('IN', "India")



//console.log(map);


for (const [key, value] of map) {
    
    //console.log(key, ':-', value);

}

const myObj = {

    game1: 'COD',
    game2: 'GTA',
    game3: 'PUBG',



}


// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
    
// }