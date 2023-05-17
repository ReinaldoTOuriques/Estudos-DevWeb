/* First, let's explain how we did to refactor the previous code based on some programming principles.  */

/* 1. Separation of Concerns:
The code is divided into separate functions to handle different tasks: */

// This function calculates the damage based on the attack and defense values, and whether the defender has a shield.
function calculateDamage(attackerAttack, defenderDefense, defenderShield) {
  if (attackerAttack > defenderDefense && !defenderShield) {
    return attackerAttack - defenderDefense;
  } else {
    return Math.floor((attackerAttack - defenderDefense) / 2);
  }
}
// This updates the HTML result element with the appropriate message.
function updateResult(attackerName, defenderName, damage, newDefenderHealth) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `${attackerName} attacked ${defenderName} and dealt ${damage} damage.<br>`;
  resultDiv.innerHTML += `${defenderName} now has ${newDefenderHealth} hit points remaining.`;
} 

/* 2. Code Reusability:
The calculateDamage() and updateResult() functions are created to encapsulate reusable logic for calculating damage and updating the HTML result element, respectively. This promotes code reusability and makes the code more modular. */

// Now this function handles the form submission...
function handleFormSubmission(event) {
  event.preventDefault();

  // while retrieves the input values,
  const attackerName = document.getElementById('attackerName').value;
  const attackerAttack = parseFloat(document.getElementById('attackerAttack').value);
  const defenderName = document.getElementById('defenderName').value;
  const defenderHealth = parseFloat(document.getElementById('defenderHealth').value);
  const defenderDefense = parseFloat(document.getElementById('defenderDefense').value);
  const defenderShield = document.getElementById('defenderShield').checked;

  /* 3. Input Validation:
  Input validation is performed using the isNaN() function to check if the entered values are valid numbers. If any of the values are invalid, an alert is displayed to the user. While error handling is not explicitly added in this code, input validation using isNaN() helps detect and handle invalid input values. An alert is displayed to the user if invalid values are detected. */
  if (isNaN(attackerAttack) || isNaN(defenderHealth) || isNaN(defenderDefense)) {
    alert('Please enter valid numeric values.');
    return;
  }

  // calculates the damage,
  const damageDealt = calculateDamage(attackerAttack, defenderDefense, defenderShield);
  const newDefenderHealth = Math.max(defenderHealth - damageDealt, 0);

  // updates the result based on the variables above.
  updateResult(attackerName, defenderName, damageDealt, newDefenderHealth);

  /* 4. Clearing Input Values:
  After the form submission is handled, the input fields are cleared by setting their values to empty strings ('') or the appropriate default values (false for checkbox). */
  document.getElementById('attackerName').value = '';
  document.getElementById('attackerAttack').value = '';
  document.getElementById('defenderName').value = '';
  document.getElementById('defenderHealth').value = '';
  document.getElementById('defenderDefense').value = '';
  document.getElementById('defenderShield').checked = false;
}

/* 6. Consistent Naming:
Meaningful variable and function names are used throughout the code to enhance readability and maintainability. For example, attackerName, defenderHealth, calculateDamage(), updateResult(), etc., are clear and descriptive names that convey their purpose. */


/* These principles guide the organization of the code, making it more modular, readable, reusable, and maintainable. Each section of the code addresses specific concerns and follows best practices to improve code quality. */

// Finally, we add an event listener to the form submission so that everything works as expected.
const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmission);
