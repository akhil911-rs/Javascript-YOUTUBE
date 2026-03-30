// singleton
//object.create //


// object literals//

const mySym = Symbol("key1")

 const JsUser = {
    name: "Akhil", 
    "full name": "Akhil Kumar",
    [mySym] : "myKey1",
    age : 18,
    location: "Jabalpur",
    email: "abc@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["Mon", "Sat"]
 }


//   console.log(JsUser.email);
//   console.log(JsUser["email"]);
//   console.log(JsUser["full name"]);
//   console.log(JsUser.mySym);
//   console.log(JsUser[mySym]);

  JsUser.email = "akhilchatgpt@gmail.com"
//   Object.freeze(JsUser)

JsUser.email = "akhilchatmsi@gmail.com"

// console.log(JsUser);


JsUser.greeting = function () {
console.log("Hello Js User")
}

console.log(JsUser.greeting);




JsUser.greetingto = function () {
console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingto());



















