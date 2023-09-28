'use strict';

const game = {
  team1: 'Bayern Munich',
   
    
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// task 1
// const player1=game.players[0];
// const player2=game.players[1]; 
// substitute method.
const [player1,player2]=game.players;
console.log(player1,player2);
// task 2 
const [gk,...fieldPlayers]=player1;
console.log(gk,fieldPlayers);
// task 3
const allPlayers=[...player1,...player2];
console.log(allPlayers);
// task 4 
const player1Final=[...player1,'Messi','Pela','Marudona'];
console.log(player1Final);
// task 5 
// here is object accessing and changing keys or renaming keys;
const {odds:{team1,x:draw,team2}}=game;
console.log(team1,draw,team2);
// task 6
const printScore=function(...scored){
 const score=scored.length;
  console.log(`score is ${score}`);
}
printScore(...game.score);
// task 7 
// here the And operator is used substitute of if/else statement.
team1<team2&&console.log('team 2 wins.');
team1>team2&&console.log('team 1 wins');

