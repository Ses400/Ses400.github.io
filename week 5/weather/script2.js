let a = 10;
let b = 40;
function add(a, b) {
  let c = a + b;
  console.log("value of c", c);
  return c;
}

function subtract(a, b) {
  let f = a - b;
  console.log("value of f", f);
  return f;
}

function greet(name) {
  let newName = name.toUpperCase();
  let msg = "";
  if (newName === "ROHIT") {
    msg = "HELLO" + newName;
  } else {
    msg = "sorry i do not kknow you";
    console.log(msg);
    return msg;
  }
}
let name = "Sue-jee";
greet(name);

let sum = add(a, b);
console.log("value of sum", sum);
let sum2 = add(45, 67);
let d = 56;
let e = 8788;
let sum3 = add(d, e);
console.log("value of sum", sum3);
let balance = subtract(100, 35);
console.log("value of balance");
