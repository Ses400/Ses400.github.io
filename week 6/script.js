const playButton = document.querySelector("#my-audio");
console.log(playButton);

const myAudio = document.querySelector("#my-audio");
console.log(myAudio);

const myVideo = document.querySelector("#my-video");
console.log(myVideo);

playButton.addEventListener("click", playAudio);

function playAudio() {
  myVideo.play();
}

playButton.addEventListener("click", playAudio);

function playAudio() {
  myAudio.play();
}

const pauseButton = document.querySelector("#pauseButton");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAudio);

function pauseAudio() {
  myAudio.play();
}

const popSound = document.querySelector("#pop-sound");
console.log(popSound);

//access sound

const popButton = document.querySelector("#pop-button");
console.log(popButton);

//access the button to listen
//when someone clicks
//plays audio

popButton.addEventListener("click", popAudio);

function popAudio() {
  popSound.play();
}
