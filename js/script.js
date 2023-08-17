// for timmer
let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

// year, day, hour, second

function updateCountdown(endDate) {
  const now = new Date().getTime();
  const remainingTime = endDate - now;

  const oneMin = 60 * 1000;
  const oneHr = 60 * oneMin;
  const oneDay = 24 * oneHr;

  const addZeroes = (num) => (num < 10 ? `0${num}` : num);

  if (remainingTime <= 0) {
    clearInterval(i);
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1>Countdown has expired!</h1>`;
  } else {
    const daysLeft = Math.floor(remainingTime / oneDay);
    const hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    const minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    const secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}

// Set your desired end date and time
const endDate = new Date("2023-10-31T23:59:59").getTime();

// Initial call to display the countdown immediately
updateCountdown(endDate);

// Update the countdown every second (1000 milliseconds)
let i = setInterval(() => updateCountdown(endDate), 1000);


// for scroll to top

const scrollElement = document.querySelector(".scroll-top");

const scrollMax = document.querySelector(".firstsection");

const scrollTop = () => {
  scrollMax.scrollIntoView({ behaviour: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);

// loader
var preLoader = document.getElementById("loding");

window.addEventListener("load", function () {
  preLoader.style.display = "none";
});
