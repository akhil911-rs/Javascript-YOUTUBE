const marvelHeroes = ["Spiderman", "Captainamerica", "Ironman"];
const DcHeros = ["panther", "joker", "batman"];



// marvelHeroes.push(DcHeros);
// console.log(marvelHeroes);


// const allHeroes = marvelHeroes.concat(DcHeros);
// console.log(allHeroes);



const allNewHeroes = [...marvelHeroes, ...DcHeros]

// console.log(allNewHeroes);


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)

console.log(realAnotherArray);



console.log(Array.isArray("Akhil"))
console.log(Array.from("Akhil"))
console.log(Array.from({name: "Akhil"}))




let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3));

