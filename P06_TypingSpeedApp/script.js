// 1. Display 5-6 chunks of sentances in the givenText area
// 2. Every time I click the reset button the text changes automatically
// 3. Wen i start writing, the clock starts
// 4. keep checking each alphabet of writingArea to givenTextArea - loop
// 5. if any alphabet doesn't match - red bg and a error sound
// 6. nothing and green bg if all going good
// 7. when all the letters matches, stop the watch and play a good sound

//selecting all elements
const givenTextArea = document.querySelector(".givenText");
const areaToWrite = document.querySelector(".areaToWrite");
const timeCount = document.querySelector(".allotedTime");
const resetButton = document.querySelector(".btn");

//making an array containing chunks of sentances
const sentances = [
  "insomnia sharpens your math skills because you spend all night calculating how much sleep you will get if you are able to fall asleep right now",
  "its only after we have lost everything that we are free to do anything by tyler durden from fight club",
  "i could die right now clem i am just happy i have never felt that before i am just exactly where i want to be",
  "sometimes it makes me sad though with andy being gone i have to remind myself that some birds aren not meant to be caged their feathers are just too bright and when they fly away the part of you that knows it was a sin to lock them up does rejoice",
  "wait a minute i think i left my conscience on your front doorstep oh oh wait a minute i think i left my consciousness in the sixth dimension but i am here right now right now",
];

resetButton.addEventListener("click", randomSentanceGenerator);

function randomSentanceGenerator() {
  let random = sentances[Math.floor(Math.random() * sentances.length)];
  givenTextArea.innerHTML = random;
}
