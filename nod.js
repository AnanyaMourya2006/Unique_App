// The correct answer for the image identification
const correctAnswer = "YourImageName"; // Replace this with the correct identification answer

// Function to check the user's guess
function checkGuess() {
    // Get the value the user entered
    const userGuess = document.getElementById("user-guess").value.trim();
    
    // Get the element where we display the result
    const result = document.getElementById("result");

    // Check if the user's guess matches the correct answer (case-insensitive)
    if (userGuess.toLowerCase() === correctAnswer.toLowerCase()) {
        result.textContent = "Correct! Well done!";
        result.style.color = "green"; // Display in green if the guess is correct
    } else {
        result.textContent = "Incorrect, try again.";
        result.style.color = "red"; // Display in red if the guess is incorrect
    }
}
