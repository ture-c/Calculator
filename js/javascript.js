const display = document.getElementById("display");
const historyList = document.getElementById("history-list");

// Function to append input to the display
function appendToDisplay(input) {
  display.value += input;
}

// Function to clear the display
function clearDisplay() {
  display.value = ""; 
}

// Function to calculate the expression and add the result to history
function calculate() {
  try {
    const result = eval(display.value); // Evaluate the mathematical expression
    const historyItem = `${display.value} = ${result}`; // Prepare the history entry
    display.value = result; // Display the result
    addToHistory(historyItem); // Add the calculation to the history
  } catch (error) {
    display.value = "Error"; // Show error if evaluation fails
  }
}

// Function to add a calculation to the history
function addToHistory(item) {
  const listItem = document.createElement("li"); // Create a new <li> element
  listItem.textContent = item; // Set the text content of the list item
  historyList.prepend(listItem); // Add the new item at the top of the history
}
