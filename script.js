let start = document.querySelector(".button__start");
let stop = document.querySelector(".button__stop");
let hoursTime = document.querySelector("#hours");
let minutesTime = document.querySelector("#minutes");
let secondsTime = document.querySelector("#seconds");
let hour;
let min;
let sec;
let stayTime;
let interval;

function startTimer(){
    hour = +hoursTime.value;
    min = +minutesTime.value;
    sec = +secondsTime.value;
    stayTime = (hour*3600)+(min*60)+sec;

    start.classList.add("hide");
    stop.classList.add("show");

    start.classList.remove("show");
    stop.classList.remove("hide");

    document.documentElement.requestFullscreen();

    interval = setInterval(updateTimer, 1000);
};

function updateTimer(){
    stayTime -= 1;

    hour = Math.floor(stayTime/3600);
    min = Math.floor(stayTime%3600/60);
    sec = Math.floor(stayTime%60);
    
    hour = hour.toString().padStart(2, "0");
    min = min.toString().padStart(2, "0");
    sec = sec.toString().padStart(2, "0");
    
    
    hoursTime.value = hour;
    minutesTime.value = min;
    secondsTime.value = sec;
};

function stopTimer(){
    stop.classList.add("hide");
    start.classList.add("show");

    stop.classList.remove("show");
    start.classList.remove("hide");

    setTimeout(() => {
        document.exitFullscreen();
    }, 1000);

    setTimeout(() => {
        stop.style.opacity = 0.1;
    }, 500);
    

    clearInterval(interval);
};

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
