//console.log("hello");
//console.log("how are you");
//let myName = Suejee;
//console.log("hello", myName);

//let a = 10;
//const b = 10;
//console.log(a);
//a = 30;
// console.log(a);
// console.log(b);
// const myName2 = "Ses";
// console.log("hello", myName);
// console.log("hello", myname2);

const myName = "ses";
const myAge = "19";

console.log(myName, myAge);

let a = 10;
let b = 1234;
let c = a + b;
console.log(c);
const id = 12345;
const city = "melbourne";
const uni = "RMIT";

const myStudentRecord = {
  name: "Ses",
  id: 12345,
  city: "melbourne",
};

console.log(myStudentRecord.name);
console.log(myStudentRecord.city);

const myAssignmentRecord = {
  id: 12345,
  as1Score: 78,
  as2Score: 86,
  as3Score: 70,
};

const total =
  myAssignmentRecord.as1Score +
  myAssignmentRecord.as2Score +
  myAssignmentRecord.as3Score;
console.log(total);

//boolean = test condition check true or false

const isItEvening = true;
const IsItEvening = false;

//back ticks
const myAddress = `rmit university 125
latrobe st
melbourn is ${myName}'s address `;
console.log(myAddress);
const myDetails = `hello, I am ${myName}, I work for ${uni}`;
console.log(myDetails);

const student1 = "Alice";
const student2 = "Sarah";
const student3 = "Jack";
const student4 = "Mike";

console.log("hello", student1);
console.log("hello", student2);
console.log("hello", student3);
console.log("hello", student4);

let students = [
  "Alice",
  "Sarah",
  "Jack",
  "Mike",
  "Emily",
  "John",
  "abcd",
  "asd",
];
//console.log("hello", students[0]);
//console.log("hello", students[1]);
//console.log("hello", students[2]);
//console.log("hello", students[3]);
//console.log("hello", students[4]);
//console.log("array size", students.length);
console.log("array size", students.length);
for (let i = 0; i < students.length; i++) {
  console.log("value of i", i);
  console.log("hello", students[i]);
}

//let ids = [12,13,14,15,16];
//let score = 88;
//if (score > 80) {
//console.log("hey you got HD");
//console.log("hey you got HD");
//} else if (score <= 80 && score > 70) {
//console.log("hey you got HD");
//} else if (score <= 70 && score > 50)
// console.log("hey you passed");
//{ else if (score < 50)
//{
//console.log ("sorry you failed")
//}

//let marks = "88";
//let marks2 = 88;
//console.log(marks == marks2);

let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 20 },
  { name: "cap", price: 50 },
];

console.log("shopping array size", shoppingCart.length);
let cartTotal = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  cartTotal = cartTotal + shoppingCart[i].price;
  console.log("my purchase iten is", shoppingCart[i].name);
  console.log("its price is", shoppingCart[i].price);
  console.log("value of i", i);
  console.log("total so far", cartTotal);
}

if (cartTotal > 100) {
  console.log("you got 10% discount");
} else {
  console.log("sorry you need to make a purchase of $200");
}
