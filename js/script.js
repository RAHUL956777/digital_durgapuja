// for timmer

let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

let endDate = new Date(2022, 9, 30, 6, 30 );
let endTime = endDate.getTime();


function countdown(){
    let todayDate = new Date();
    let todayTime = todayDate.getTime();

    let reminingTime = endTime - todayTime;

    // 60 second = 1000 millisecond
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    // function for formate number if it is single digit
    let addZeroes = num => num < 10 ? `0${num}`: num;

    // if end datee is before today date
    if(endTime < todayTime){
        clearInterval(i)
        document.querySelector(".countdown").innerHTML = `<h1>Countdown had expired!</h1>`;
    }else{
        let daysLeft = Math.floor(reminingTime / oneDay);
        

        let hrsLeft = Math.floor((reminingTime % oneDay) / oneHr);

        let minsLeft = Math.floor((reminingTime % oneHr) / oneMin);
        
        let secsLeft = Math.floor((reminingTime % oneMin) / 1000);
        
        // displaying values
        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrsLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent = addZeroes(secsLeft);
    }
}
let  i = setInterval(countdown,1000);
countdown();



// for scroll to top

const scrollElement = document.querySelector(".scroll-top");

const scrollMax = document.querySelector(".firstsection");

const scrollTop = ()=>{
    scrollMax.scrollIntoView({ behaviour: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);