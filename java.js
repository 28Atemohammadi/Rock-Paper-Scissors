let humanScore = 0;   // امتیاز های اولی
let computerScore = 0;

function getComputerChoice() {  // انتخاب تصادفی کامپیوتر 
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {   //منطق برنده‌ی هر راند
  if (humanChoice === computerChoice) return "tie";
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "human";
  }
  return "computer";
}

function updateUI(humanChoice) {   // تابع اصلی برای اجرای بازی (با UI)
  if (humanScore >= 5 || computerScore >= 5) return;   // این تابع هر بار که کاربر روی یکی از دکمه‌ها کلیک کنه اجرا میشه.
                                                    
  const computerChoice = getComputerChoice();   //کامپیوتر یک انتخاب جدید انجام می‌ده
  const result = playRound(humanChoice, computerChoice);    //تابع playRound اجرا می‌شه تا نتیجه مشخص بشه

  const roundResult = document.getElementById("round-result");   // بروزرسانی متن صفحه (نتیجه و امتیاز)
  const scoreDisplay = document.getElementById("score");
  const winnerDisplay = document.getElementById("winner");

  if (result === "tie") {
    roundResult.textContent = `It's a tie! Both chose ${humanChoice}`;
  } else if (result === "human") {
    humanScore++;
    roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) { //اعلام برنده نهایی
    const finalWinner = humanScore > computerScore ? "You won the game!" : "Computer won the game!";
    winnerDisplay.textContent = finalWinner;
  }
}

// Event listeners   //اتصال دکمه‌ها به بازی
document.getElementById("rock").addEventListener("click", () => updateUI("rock"));   // هر دکمه با کلیک، بازی رو با انتخاب مربوطه اجرا می‌کنه
document.getElementById("paper").addEventListener("click", () => updateUI("paper"));
document.getElementById("scissors").addEventListener("click", () => updateUI("scissors"));
