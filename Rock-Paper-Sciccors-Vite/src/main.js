import { getResult} from "./gameLogic.js";

const start = document.querySelector("#startscreen");
const startButton = document.querySelector("#startbutton");
const rules = document.querySelector("#rules");
const rulesButton = document.querySelector("#closebutton");
const score = document.querySelector("#score");
const result = document.querySelector("#results");
const userChoice = document.querySelector("#userchoice");
const computerChoice = document.querySelector("#computerchoice");

let scoreCount = 0;

// Hide Starting Screen
startButton.addEventListener("click", () => {
  start.classList.add("hidden");
});

// User Choice Input
const choiceButtons = document.querySelectorAll("button[data-choice]");
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.dataset.choice;
        console.log(userChoice);
        const outcome = getResult(userChoice);
        console.log(outcome);
        updateUI(outcome);
    });
});

// UI Update (Results and Score)
async function updateUI(outcome) {
    result.textContent = outcome;
    if (outcome === "win") {
        scoreCount = scoreCount + 1;
        score.textContent = "Score: " + scoreCount;
    }
    result.classList.remove("hidden");
};