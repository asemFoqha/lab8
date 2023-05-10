import ANIMATION from "./animation.js";

let startButton = $("#startButton");
let stopButton = $("#stopButton");
startButton.prop("disabled", true);
stopButton.prop("disabled", true);
let textarea = $("#viewer");
let size = $("#size");
let speed = $("#speed");
let timer = 1000;

let myInterval;

const startTheViewr = () => {
  let i = 0;
  let tempVal =
    ANIMATION[$("#animation").find(":selected").text()].split("=====\n");
  myInterval = setInterval(() => {
    if (i == tempVal.length) {
      i = 0;
    }
    textarea.html(tempVal[i]);
    i++;
  }, timer);
  startButton.prop("disabled", true);
};

startButton.on("click", startTheViewr);

stopButton.on("click", () => {
  clearInterval(myInterval);
  startButton.prop("disabled", false);
  changeOption();
});

$("#animation").on("change", changeOption);

function changeOption() {
  let selectedOption = $("#animation").find(":selected").text();
  if (selectedOption.toLowerCase() === "blank") {
    clearInterval(myInterval);
    startButton.prop("disabled", true);
    stopButton.prop("disabled", true);
    textarea.html("");
  }
  if (selectedOption.toLowerCase() === "exercise") {
    clearInterval(myInterval);
    startButton.prop("disabled", false);
    stopButton.prop("disabled", false);
    textarea.html(ANIMATION["exercise"]);
  }
  if (selectedOption.toLowerCase() === "bike") {
    clearInterval(myInterval);
    startButton.prop("disabled", false);
    stopButton.prop("disabled", false);
    textarea.html(ANIMATION["bike"]);
  }
  if (selectedOption.toLowerCase() === "juggler") {
    clearInterval(myInterval);
    startButton.prop("disabled", false);
    stopButton.prop("disabled", false);
    textarea.html(ANIMATION["juggler"]);
  }
  if (selectedOption.toLowerCase() === "dive") {
    clearInterval(myInterval);
    startButton.prop("disabled", false);
    stopButton.prop("disabled", false);
    textarea.html(ANIMATION["dive"]);
  }
}
size.on("change", () => {
  if (size.val().toLowerCase() === "medium") {
    textarea.css("font-size", "14px");
  }
  if (size.val().toLowerCase() === "small") {
    textarea.css("font-size", "9px");
  }
  if (size.val().toLowerCase() === "large") {
    textarea.css("font-size", "30px");
  }
});

speed.on("click", () => {
  if (speed.is(":checked")) {
    timer = 300;
  } else {
    timer = 1000;
  }
  clearInterval(myInterval);
  startTheViewr();
});
