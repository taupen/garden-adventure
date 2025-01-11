let storyText = document.getElementById("story-text");
let riddleText = document.getElementById("riddle-text");

function checkAnswer() {
    let userAnswer = document.getElementById("user-answer").value.trim().toLowerCase();

    if (userAnswer === "keyboard") {
        storyText.innerHTML = "It's a keyboard! Well done! The garden is open to you...";
    } else {
        storyText.innerHTML = "That's not the answer. Try again or ask for a hint.";
    }
}