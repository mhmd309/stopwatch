let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let timer;

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

const displayMinutes = document.getElementById("minutes");
const displaySeconds = document.getElementById("seconds");
const displayMilliseconds = document.getElementById("milliseconds");

function startTimer() {
  timer = setInterval(() => {
    milliseconds += 10;

    if (milliseconds >= 1000) {
      milliseconds = 0;
      seconds++;
    }

    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }

    displayMinutes.textContent = formatTime(minutes);
    displaySeconds.textContent = formatTime(seconds);
    displayMilliseconds.textContent = formatMilliseconds(milliseconds);
  }, 10);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;

  displayMinutes.textContent = "00";
  displaySeconds.textContent = "00";
  displayMilliseconds.textContent = "00";
}

function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}

function formatMilliseconds(value) {
  return value < 100 ? `0${value / 10}` : value / 10;
}

startButton.addEventListener("click", () => startTimer());
stopButton.addEventListener("click", () => stopTimer());
resetButton.addEventListener("click", () => resetTimer());