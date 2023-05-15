// Selecting the form element.
const form = document.querySelector('form');

// Adding an event listener to the form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Retrieving the values entered by the user.
  const attackerName = document.getElementById('attackerName').value;
  const attackerAttack = document.getElementById('attackerAttack').value;
  const defenderName = document.getElementById('defenderName').value;
  const defenderHealth = document.getElementById('defenderHealth').value;
  const defenderDefense = document.getElementById('defenderDefense').value;
  const defenderShield = document.getElementById('defenderShield').checked;
  
  // Through the conditional structure, it checks how much damage the attacking character managed to deal to the defender, based on the business rules.
  let damageDealt = 0
  if(attackerAttack > defenderDefense && !defenderShield) {
    damageDealt = attackerAttack - defenderDefense;
  } else {
    damageDealt = Math.floor((attackerAttack - defenderDefense) / 2);
  }
});

const newDefendersHealth = Math.max(defenderHealth - damageDealt, 0);

const resultDiv = document.querySelector("#result");
resultDiv.innerHTML = `${attackerName} attacked ${defenderName} and dealt ${damage} damage.<br>`;
resultDiv.innerHTML += `${defenderName} now has ${newDefenderHealth} hit points remaining.`;