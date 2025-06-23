// Remove the existing main element from the DOM
const main = document.getElementById("main");
main.remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Assign the id "victory" to the new element
newHeader.id = "victory";

// Set the text inside the <h1> element
newHeader.textContent = "Feysal is the champion";

// Append the new element to the document body
document.body.append(newHeader);
