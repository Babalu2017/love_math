// Wait for the DOM to finish before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    console.log("The content has been loaded!");
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        // console.log(button);
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {            
                // alert("You clicked Submit!");
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                // alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2); 
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answe agaist the first element in
 * the returned calsulateCorrectAnswer array from
 * the calculateCorrectAnswer function
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculateAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculateAnswer[0];

    if (isCorrect) {
        alert(`${userAnswer}. You got it right! :D`);
    } else {
        alert(`Awwwww... you answered ${userAnswer}. The correct answer is ${calculateAnswer[0]}`);
    }

    runGame(calculateAnswer[1]);

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the DOM, and returns the correct answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById("operand1").innerText); // when javascript get data from the DOM they return as string su we use parseInt method to transform them into numbers.
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"]
    } else {
        alert(`Unimplemented operator ${gameType}`);
        throw `Unimplemented operator ${gameType}. Aborting!`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion() {
    
}

function displayMultiplayQuestion() {
    
}

function displayDivideQuestion() {
    
}
