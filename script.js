let start = document.querySelector(".button__start");
let stop = document.querySelector(".button__stop");
let hoursTime = document.querySelector("#hours");
let minutsTime = document.querySelector("#minuts");
let secondsTime = document.querySelector("#seconds");

function startTimer(){
    let hour = +hoursTime.value;
    let min = +hoursTime.value;
    let sec = +hoursTime.value;
    let allSec = hour*3600+min*60+sec;
    console.log(allSec);

};

function updateTimer(){

};

function stopTimer(){
    console.log(2);
};

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
