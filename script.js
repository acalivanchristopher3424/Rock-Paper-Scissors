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
}

let person = () => parseInt(prompt("Please choose 0(rock), 1(scissors), 2(paper): "));
let computerSelection = () => Math.floor(Math.random() * 3);



playRound(person(), computerSelection());
playRound(person(), computerSelection());
playRound(person(), computerSelection());
playRound(person(), computerSelection());
playRound(person(), computerSelection());

console.log("END OF GAME");