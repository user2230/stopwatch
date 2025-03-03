const startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset");
let seconds = 0;
let minutes = 0;
let running = false; /* standaart telt ie nog niet */

const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");

let timer;  

startButton.onclick = function(){
    if(running === true){ /* als stopwatch al loopt dan mogen we niks doen */
        return;
    } 
    running = true;
    timer = setInterval(function(){
        seconds = seconds + 1; 
        if(seconds === 60){
            minutes = minutes + 1;
            minutesTimer.innerText = minutes;
            seconds = 0;
        }
        secondsTimer.innerText = seconds;
    }, 1000); /* 1000 ms = 1 seconde */ 
        
}

stopButton.onclick = function(){
    clearInterval(timer);
    running = false;
}
resetButton.onclick = function(){
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    secondsTimer.innerText = seconds;
    minutesTimer.innerText = minutes
    running = false;
}