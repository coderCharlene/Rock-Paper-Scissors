let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result1_div = document.getElementById("result1");
const result2_div = document.getElementById("result2");
const rock_image = document.getElementById("rock");
const paper_image = document.getElementById("paper");
const scissors_image = document.getElementById("scissors");

const getComputerChoice = () =>
{
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber)
  {
    case 0 : return "rock";
    case 1 : return "paper";
    case 2 : return "scissors";
  }
}

const determineWinner = (userChoice,computerChoice) =>
{
  if (userChoice === computerChoice)
    return "The game is a tie!";
  if (userChoice === "rock")
  {
    if (computerChoice === "paper")
    {
      computerScore++;
      computerScore_span.innerHTML = computerScore;
      return "The computer won!";
    }
    else
    {
      userScore++;
      userScore_span.innerHTML = userScore;
      return "You won!";
    }
  }
   if (userChoice === "scissors")
   {
        if (computerChoice === "paper")
        {
          userScore++;
          userScore_span.innerHTML = userScore;
          return "You won!";
        }
         else
         {
           computerScore++;
           computerScore_span.innerHTML = computerScore;
          return "The computer won!";
         }
    } 
    if (userChoice === "paper")
    {
      if (computerChoice === "scissors")
      {
        computerScore++;
        computerScore_span.innerHTML = computerScore;
        return "The computer won!";
      }
      else
      {
        userScore++;
        userScore_span.innerHTML = userScore;
        return "You won!";
      }
    }
    if (userChoice === "bomb")
    {
      userScore++;
      userScore_span.innerHTML = userScore;
      return "You won!";
    }
  }

const playGame = choiceOfUser =>
{
  const computerChoice = getComputerChoice();
  result1_div.innerHTML = "You threw : " + choiceOfUser + "\t The computer threw : " + computerChoice;
  result2_div.innerHTML = determineWinner(choiceOfUser,computerChoice);
}

const main = () =>
{
  rock_image.addEventListener("click",function()
  {
    playGame("rock");
  });
  paper_image.addEventListener("click",function()
  {
    playGame("paper");
  });
  scissors_image.addEventListener("click",function()
  {
    playGame("scissors");
  });
}

main();
