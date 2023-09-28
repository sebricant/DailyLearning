'use strict';
let secretNumber= Math.trunc(Math.random()*20+1);
let score=20;
let highScore=0;
let guess;
let functionMessage=function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener("click",function () {
    guess= Number(document.querySelector('.guess').value);
//    if number not entered.
   if(!guess){
    // document.querySelector('.message').textContent="⛔No Number";
    functionMessage("⛔No Number");
   }
//    if win
   else if(guess===secretNumber){
    // document.querySelector(".message").textContent="🎉correct answer";
    functionMessage("🎉correct answer");
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('body').style.backgroundColor="#60b347";
    document.querySelector(".number").style.width='30rem';
    if(highScore<secretNumber){
        highScore=secretNumber;
        document.querySelector('.highscore').textContent=secretNumber;
    }
}
// if failed
else if(guess!==secretNumber){
    if(score>0){
        // document.querySelector('.message').textContent=guess>secretNumber?"📉 Guess is Higher!":"📈 Guess is Lower!"; // ternary operator;
        functionMessage(guess<secretNumber?"📉 Guess is Higher!":"📈 Guess is Lower!");
        document.querySelector('.score').textContent=score;
        score--;
    }else{
        // document.querySelector('.message').textContent="😔 You have failed."
        functionMessage("😔 You have failed.");
    }
}
// higher guess
// else if(secretNumber>guess){
//     if(score>0){
//         document.querySelector('.message').textContent="📉 Guess is Higher!"
//         document.querySelector('.score').textContent=score;
//         score--;
//     }else{
//         document.querySelector('.message').textContent="😔 You have failed."
//     }
//    }
// //    lower guess
//    else if(secretNumber<guess){
//     if(score>0){
//         document.querySelector('.message').textContent="📈 Guess is Lower!"
//         document.querySelector('.score').textContent=score;
//         score--;
//     }else{
//         document.querySelector('.message').textContent="😔 You have failed."
//     }
//    }
})
// reseting the game
document.querySelector('.again').addEventListener('click',function(){
    secretNumber= Math.trunc(Math.random()*20+1);
    score=19;
    guess= Number(document.querySelector('.guess').value="");
    // document.querySelector('.message').textContent="Start guessing...";
    functionMessage("Start guessing...");
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width="15rem";
    document.querySelector('.number').textContent="?";
    document.querySelector('.score').textContent="20";
})
