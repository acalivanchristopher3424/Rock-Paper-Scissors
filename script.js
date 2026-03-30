let computerScoreTotal = 0;
let humanScoreTotal = 0;

function playRound(humanChoice, computerChoice) {
  const paper = 2;
  const scissors = 1;
  const rock = 0;
  
  let score = () => console.log(`human score: ${humanScoreTotal} \ncomputer score: ${computerScoreTotal}\n`)

  switch(humanChoice) {
    case rock:
        if(computerChoice == paper){
          console.log("winner Computer");
          computerScoreTotal++;
          score();
        } 
        else if (computerChoice == scissors){
          console.log("winner Human");
          humanScoreTotal++;
          score();
        }
        else if (computerChoice == rock){
          console.log("Draw");
          score();
        }
        break;
    case paper:
        if(computerChoice == rock){
          console.log("winner Human");
          humanScoreTotal++;
          score();
        } 
        else if (computerChoice == scissors){
          console.log("winner Computer");
          computerScoreTotal++;
          score();
        }
        else if (computerChoice == paper){
          console.log("Draw");
          score();
        }
        break;
    case scissors:
        if(computerChoice == paper){
          console.log("winner Human");
          humanScoreTotal++;
          score();
        } 
        else if (computerChoice == rock){
          console.log("winner Computer");
          computerScoreTotal++;
          score();
        }
        else if (computerChoice == scissors){
          console.log("Draw");
          score();
        }
        break;
     default:
        console.log("Wrong Input");
        score();
  }

  scoreDiv.textContent = `Player: ${humanScoreTotal} | Computer: ${computerScoreTotal}`;
  if (humanScoreTotal == 5) {
//   console.log("Congratulations! You win the game!");
  announce.textContent = "Congratulations! You win the game!";
  stack.appendChild(announce);
} else if (computerScoreTotal == 5) {
//   console.log("Computer wins the game! Better luck next time.");
  announce.textContent = "Computer wins the game! Better luck next time.";
  stack.appendChild(announce);
}
}

// let person = () => parseInt(prompt("Please choose 0(rock), 1(scissors), 2(paper): "));
let computerSelection = () => Math.floor(Math.random() * 3);

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", () => playRound(0, computerSelection()));
paperBtn.addEventListener("click", () => playRound(2, computerSelection()));
scissorsBtn.addEventListener("click", () => playRound(1, computerSelection()));


const scoreDiv = document.createElement("div");
// scoreDiv.textContent = `Player: ${humanScoreTotal} | Computer: ${computerScoreTotal}`;
const stack = document.querySelector(".stack");
stack.appendChild(scoreDiv);

const announce = document.createElement("div");






// playRound(person(), computerSelection());
// playRound(person(), computerSelection());
// playRound(person(), computerSelection());
// playRound(person(), computerSelection());
// playRound(person(), computerSelection());

// console.log("END OF GAME");
// ----------------------------------------------- //


// List of prime numbers up to a given number

// let input = parseInt(prompt("enter a number: "));
// let count = 0;

// function isPrime(num) {
//   if(num < 2) {
//     return "invalid number";
//   } else if (num === 2) {
//     return true;
//   } else {
//     let i = num - 1;
//     for(; i > 1; i--){
//       if(num%i == 0){
//         return false;
//       }
//     }
//     return true;
//   }
// }

// for(let i = 0; i < input; i++){
//   if(isPrime(i)){
//     console.log(`${i} `);
//   }
// }