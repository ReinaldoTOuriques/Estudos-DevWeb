let queue = []; // Initialize an empty queue array to store patients

function showMenu() {
  let menu = '==== Doctor\'s Office Queue ====\n'; // Title of the menu
  menu += 'Patients in Queue:\n'; // Header for the list of patients
  queue.forEach((patient, index) => {
    menu += `${index + 1}. ${patient}\n`; // Add each patient's position and name to the menu
  });
  menu += '------------------------------\n'; // Separator line
  menu += '1. New patient\n'; // Option to add a new patient
  menu += '2. Consult patient\n'; // Option to consult the next patient
  menu += '3. Exit'; // Option to exit the program
  return menu; // Return the constructed menu
}

function addPatient() {
  const name = prompt('Enter patient\'s name:'); // Prompt the user to enter the patient's name
  if (name) { // If a name is provided (not empty or canceled)
    queue.push(name); // Add the patient to the end of the queue
    alert(`Patient ${name} added to the queue.`); // Display a message indicating the patient was added
    showMenuAndProcessQueue(); // Show the menu and continue processing user input
  } else {
    showMenuAndProcessQueue(); // If no name is provided, show the menu again without adding a patient
  }
}

function consultPatient() {
  if (queue.length === 0) { // If the queue is empty
    alert('No patients in the queue.'); // Display a message indicating there are no patients in the queue
  } else {
    const patient = queue.shift(); // Remove the first patient from the queue
    alert(`Consulting patient: ${patient}`); // Display a message indicating which patient is being consulted
    showMenuAndProcessQueue(); // Show the menu and continue processing user input
  }
}

function showMenuAndProcessQueue() {
  const choice = prompt(showMenu()); // Display the menu and prompt the user to choose an option
  if (choice === '1') {
    addPatient(); // If the user chooses option 1, add a new patient
  } else if (choice === '2') {
    consultPatient(); // If the user chooses option 2, consult the next patient
  } else if (choice === '3') {
    // Do nothing, program will exit
  } else {
    alert('Invalid choice. Please try again.'); // If an invalid choice is made, display an error message
    showMenuAndProcessQueue(); // Show the menu again and continue processing user input
  }
}

showMenuAndProcessQueue(); // Initial function call to start the program and display the menu