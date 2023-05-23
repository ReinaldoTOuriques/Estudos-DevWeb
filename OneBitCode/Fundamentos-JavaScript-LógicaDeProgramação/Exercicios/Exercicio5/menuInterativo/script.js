
function displayMessage(option) {
  alert(`You clicked on the ${option}.`);
}

function displayCloseMessage(closeOption) {
  alert(`the system is shutting down...`);
}

do {
  displayMessage;
} while (displayCloseMessage === true) {
  displayCloseMessage;
};