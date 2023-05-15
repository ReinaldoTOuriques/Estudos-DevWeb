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

  // Displaying the user input in the console
  console.log('Attacker Name:', attackerName);
  console.log('Attacker Attack Power:', attackerAttack);
  console.log('Defender Name:', defenderName);
  console.log('Defender Hit Points:', defenderHealth);
  console.log('Defender Defense Power:', defenderDefense);
  console.log('Defender Shield:', defenderShield);
});
