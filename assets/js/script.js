// Wait for the DOM to finish before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    console.log("The content has been loaded!");
    let buttons = document.getElementsByTagName("button");
    for (button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {
    
}

function displayMultiplayQuestion() {
    
}

function displayDivideQuestion() {
    
}
