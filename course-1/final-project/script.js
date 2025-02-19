const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

const checkPalindrome = () => {
    const text = textInput.value;

    if (text === "" || text === null) {
        alert("Please input a value");
        return;
    }

    // Remove non-alphanumeric characters and convert to lowercase
    const sanitizedText = text.replace(/[\W_]+/g, "").toLowerCase();
    const reversedText = sanitizedText.split("").reverse().join("");
    const isPalindrome = sanitizedText === reversedText;

    if (isPalindrome) {
        resultDiv.textContent = text + " is a palindrome!";
    } else {
        resultDiv.textContent = text + " is not a palindrome!";
    }
}

checkButton.addEventListener("click", checkPalindrome);