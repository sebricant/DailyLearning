'use strict';

// Selecting Elements
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const dice=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnHold=document.querySelector('.btn--hold');
const btnRoll=document.querySelector('.btn--roll');
const currentScore0El=document.getElementById('current--0');
const currentScore1El=document.getElementById('current--1');

let currentScore,score,activePlayer,player;

const init=function(){

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    currentScore=0;
    currentScore0El.textContent=0;
    currentScore1El.textContent=0;
    score=[0,0];
    activePlayer=0;
    player=true;
    score0El.textContent=0;
    score1El.textContent=0;
    dice.classList.add('hidden'); 
}

// involking all the default variables
init();

const switchPlayer=function(){
    // switch player
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer=activePlayer===0?1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click',function(){

    if(player){

        // generate a random dice roll;
        const diceRoll=Math.trunc(Math.random()*6)+1;
    
        // show dice
        dice.classList.remove('hidden');
        dice.src=`dice-${diceRoll}.png`;
    
        // check condition
        if(diceRoll!==1){
    
            currentScore+=diceRoll;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
            // currentScore0El.textContent=currentScore;
        }else{
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click',function(){
    // checking player has won or not;
    if(player){
    score[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
        if(score[activePlayer]>=100){
            player=false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            dice.classList.add('hidden');
        }else{
            switchPlayer();
        }
    }
})

// reset all default values 

btnNew.addEventListener('click',init);

