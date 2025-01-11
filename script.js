
let storyText = document.getElementById("story-text");
let riddleText = document.getElementById("riddle-text");
let choicesContainer = document.getElementById("choices");
let gameImage = document.getElementById("game-image");
let backgroundMusic = new Audio('background_music.mp3');
backgroundMusic.loop = true;
backgroundMusic.play();

function checkAnswer() {
    let userAnswer = document.getElementById("user-answer").value.trim().toLowerCase();

    if (userAnswer === "keyboard") {
        playSound('correct_answer.mp3');
        storyText.innerHTML = "It's a keyboard! Well done! The gnome nods and opens the gate...";
        riddleText.innerHTML = "You see a garden path ahead. The gnome asks you another question.";
        document.getElementById("user-answer").value = ''; // Clear input field
        showNextChoices();
    } else {
        playSound('wrong_answer.mp3');
        storyText.innerHTML = "That's not the answer. Try again or ask for a hint.";
    }
}

function showNextChoices() {
    // Hide the current riddle input
    choicesContainer.innerHTML = `
        <p>The gnome smiles and gives you a choice:</p>
        <button onclick="continueToWitch()">Follow the path to the witch</button>
        <button onclick="turnBack()">Turn back and leave the garden</button>
    `;
}

function continueToWitch() {
    gameImage.src = "witch_image.jpg"; // Change to witch image
    storyText.innerHTML = "You follow the path, and soon, you encounter a mysterious witch standing in a clearing.";
    riddleText.innerHTML = "The witch asks: 'I speak without a mouth and hear without ears. What am I?'";
    choicesContainer.innerHTML = `<input type="text" id="user-answer" placeholder="Type your answer here...">
    <button onclick="checkWitchAnswer()">Submit Answer</button>`;
}

function checkWitchAnswer() {
    let userAnswer = document.getElementById("user-answer").value.trim().toLowerCase();

    if (userAnswer === "echo") {
        playSound('correct_answer.mp3');
        gameImage.src = "treasure_image.jpg"; // Change to treasure image
        storyText.innerHTML = "The witch laughs and grants you access to the hidden garden treasure!";
        riddleText.innerHTML = "You’ve found the treasure! Congratulations!";
    } else {
        playSound('wrong_answer.mp3');
        storyText.innerHTML = "That's not the answer. Try again or ask for a hint.";
    }
}

function turnBack() {
    gameImage.src = "garden_image.jpg"; // Go back to garden image
    storyText.innerHTML = "You turn back and leave the garden, but something about it stays with you.";
    riddleText.innerHTML = "Maybe you’ll come back another time...";
    choicesContainer.innerHTML = '';
}

// Helper function to play sound effects
function playSound(filename) {
    let sound = new Audio(filename);
    sound.play();
}
