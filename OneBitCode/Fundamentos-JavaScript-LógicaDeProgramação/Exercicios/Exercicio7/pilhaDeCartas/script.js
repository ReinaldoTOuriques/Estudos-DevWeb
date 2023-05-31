let deck = []; // Initialize an empty deck array to store the cards

function showMenu() {
  let menu = '==== Deck of Cards ====\n'; // Title of the menu
  menu += 'Cards in Deck:\n'; // Header for the list of cards
  deck.forEach((card, index) => {
    menu += `${index + 1}. ${card}\n`; // Add each card's position and name to the menu
  });
  menu += '------------------------------\n'; // Separator line
  menu += '1. Add a card\n'; // Option to add a new card
  menu += '2. Draw a card\n'; // Option to draw a card
  menu += '3. Exit'; // Option to exit the program
  return menu; // Return the constructed menu
}

function addCard() {
  const card = prompt('Enter the name of the card:'); // Prompt the user to enter the card's name
  if (card) { // If a card name is provided (not empty or canceled)
    deck.unshift(card); // Add the card to the top of the deck
    alert(`Card ${card} added to the deck.`); // Display a message indicating the card was added
    showMenuAndProcessChoice(); // Show the menu and continue processing user input
  } else {
    showMenuAndProcessChoice(); // If no card name is provided, show the menu again without adding a card
  }
}

function drawCard() {
  if (deck.length === 0) { // If the deck is empty
    alert('No cards in the deck.'); // Display a message indicating there are no cards in the deck
  } else {
    const card = deck.shift(); // Remove the top card from the deck
    alert(`You drew the card: ${card}`); // Display the name of the card drawn
    showMenuAndProcessChoice(); // Show the menu and continue processing user input
  }
}

function showMenuAndProcessChoice() {
  const choice = prompt(showMenu()); // Display the menu and prompt the user to choose an option
  if (choice === '1') {
    addCard(); // If the user chooses option 1, add a new card
  } else if (choice === '2') {
    drawCard(); // If the user chooses option 2, draw a card
  } else if (choice === '3') {
    // Do nothing, program will exit
  } else {
    alert('Invalid choice. Please try again.'); // If an invalid choice is made, display an error message
    showMenuAndProcessChoice(); // Show the menu again and continue processing user input
  }
}

showMenuAndProcessChoice(); // Initial function call to start the program and display the menu