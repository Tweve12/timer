let start = document.querySelector(".button__start");
let stop = document.querySelector(".button__stop");
let hoursTime = document.querySelector("#hours");
let minutesTime = document.querySelector("#minutes");
let secondsTime = document.querySelector("#seconds");
let hour;
let min;
let sec;
let stayTime;

function startTimer(){
    hour = +hoursTime.value;
    min = +minutesTime.value;
    sec = +secondsTime.value;
    stayTime = (hour*3600)+(min*60)+sec;
    setInterval(updateTimer, 1000);
};

function updateTimer(){
    stayTime -= 1;

    hour = stayTime/3600;
    min = stayTime%3600/60
    sec = stayTime%60
    


    hoursTime.value = Math.floor(hour);
    minutesTime.value = Math.floor(min);
    secondsTime.value = Math.floor(sec);
};

function stopTimer(){
    console.log(2);
};

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
