let storyText = document.getElementById("story-text");

function makeChoice(choice) {
    if (choice === 1) {
        storyText.innerHTML = "It's a keyboard! Well done! The garden is open to you...";
    } else if (choice === 2) {
        storyText.innerHTML = "You leave the garden, but something about it stays with you...";
    } else if (choice === 3) {
        storyText.innerHTML = "The gnome gives you a hint: Think of something in your hands, but not directly touched.";
    }
}