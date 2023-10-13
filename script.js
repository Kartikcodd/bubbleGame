var timer = 60;
var score = 0;
var Hitrm = 0; 
function scorePt(){
    score += 10;
    document.querySelector("#Scoreval").textContent  = score;
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === Hitrm){
        scorePt();
        makeBubble();
        newHit();
    }
    else{
        timer -= 2 ;
    }
})


function runTime(){
    var timeInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;
        }
    },1000)
}
function makeBubble(){
var clutter =``;
for(let i = 1 ; i<= 160 ;i++){
    var rm = Math.floor(Math.random()*10)
clutter +=  `<div class="bubble">${rm}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter;
}
function newHit(){
    Hitrm = Math.floor(Math.random()*10)
document.querySelector("#Hits").textContent = Hitrm;

}










makeBubble();
newHit();
runTime();
