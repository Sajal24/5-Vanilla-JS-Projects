// 1. Display 5-6 chunks of sentances in the givenText area
// 2. Every time I click the reset button the text changes automatically
// 3. Wen i start writing, the clock starts
// 4. keep checking each alphabet of writingArea to givenTextArea - loop
// 5. if any alphabet doesn't match - red bg and a error sound
// 6. nothing and green bg if all going good
// 7. when all the letters matches, stop the watch and play a good sound

//selecting all elements
const givenTextArea = document.querySelector(".givenText");
const borderChange = document.getElementById("areaToWrite");
const areaToWrite = document.querySelector("#inputArea");
const timeCount = document.querySelector(".allotedTime");
const resetButton = document.querySelector(".btn");
let i = 0;

//making an array containing chunks of sentances
const sentances = [
  "its only after we have lost everything that we are free to do anything by tyler durden from fight club",
  "insomnia sharpens your math skills because you spend all night calculating how much sleep you will get if you are able to fall asleep right now",
  "i could die right now clem i am just happy i have never felt that before i am just exactly where i want to be",
  "sometimes it makes me sad though with andy being gone i have to remind myself that some birds aren not meant to be caged their feathers are just too bright and when they fly away the part of you that knows it was a sin to lock them up does rejoice",
  "wait a minute i think i left my conscience on your front doorstep oh oh wait a minute i think i left my consciousness in the sixth dimension but i am here right now right now",
];

let randomSentance =
  "its only after we have lost everything that we are free to do anything by tyler durden from fight club";

//reset button functionality - to change the sentances in a random order
resetButton.addEventListener("click", randomSentanceGenerator);

function randomSentanceGenerator() {
  randomSentance = sentances[Math.floor(Math.random() * sentances.length)];
  givenTextArea.innerHTML = randomSentance;
}

// start checking the writing text letter by letter and when wrong letter - borders: red and if going right - borders: blue; and at last when all sentance.letter.length is equal to written sentences.letter.length with every letter correct -> border: dark green;

areaToWrite.addEventListener("keypress", (e) => {
  if (i < randomSentance.length) {
    if (e.key === randomSentance[i]) {
      console.log("y");
      if (i == randomSentance.length - 1) {
        borderChange.style.borderColor = "green";
      } else borderChange.style.borderColor = "blue";
      i++;
    } else {
      console.log("no");
      borderChange.style.borderColor = "red";
    }
  }
});
