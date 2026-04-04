// Immediately invoked functions expressions (IIFE)


(function code () {

    console.log(`DB CONNECTED`);
} )  ();


(  (name)  => {

console.log(`DB CONNECTED TWO  ${name}`);

} ) ("Akhil")