//function checkWeather() {
//const temp = document.querySelector("#myTemp");
//console.log(temp);
//const t = temp.value;
//console.log(t);
//if (t > 40) {
//console.log("it's super hot");
//body.style.backgroundColor = "red";
//} else if (t <= 40 && t > 30) {
//console.log("it's sunny and warm");
//body.style.backgroundColor = "pink";
//} else if (t <= 30 && t > 18) {
//console.log("it's quite pleasant");
//body.style.backgroundColor = "green";
//} else if (t <= 18 && t > 8) {
//console.log("it is quite cold");
//body.style.backgroundColor = "blue";
//} else if (t <= 8) {
//console.log("it is freezing");
//}
//}

function checkWeather() {
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");
  console.log("I am just being clicked");
  let myInput = document.querySelector("#myTemp");
  let temp = myInput.value;
  console.log("current temp is", temp);
  if (temp >= 20 && temp < 30) {
    body.style.backgroundColor = "orange";
    outer.style.backgroundColor = "purple";
    console.log("it feels sunny and warm");
  } else if (temp >= 10 && temp < 20) {
    body.style.backgroundColor = "lightblue";
    outer.style.backgroundColor = "lime";
    console.log("it feels cold");
  } else if (temp >= 30) {
    body.style.backgroundColor = "crimson";
    outer.style.backgroundColor = "blue";
    console.log("it is boiling hot");
  } else if (temp < 10) {
    body.style.backgroundColor = "gray";
    outer.style.backgroundColor = "yellow";
    console.log("it is freezing");
  }
}
