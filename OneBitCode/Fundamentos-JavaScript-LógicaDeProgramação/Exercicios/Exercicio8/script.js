/* Escreva um programa em javascript que funcione como um cadastro de imóveis e
atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos. */

// Variables:
let realEstate = []; // Declares an empty array to store real estate properties
let menu = 0; // Initializes the variable 'menu' with the value 0

// Functions:
function registerRealEstate() {
    let property = { // Declares a new object 'property' with properties 'owner', 'rooms', 'bathrooms', and 'garage'
        owner: prompt("Enter owner name:"), // Asks the user to enter the owner name and assigns the value to 'owner'
        rooms: Number(prompt("Enter the number of rooms:")), // Asks the user to enter the number of rooms and converts it to a number
        bathrooms: Number(prompt("Enter the number of bathrooms:")), // Asks the user to enter the number of bathrooms and converts it to a number
        garage: prompt("Do you have a garage? (Y/N)").toUpperCase() // Asks the user if they have a garage and converts the response to uppercase
    }
    realEstate.push(property); // Adds the 'property' object to the 'realEstate' array
}

function showRealEstate() {
    for (let i = 0; i < realEstate.length; i++) { // Iterates over each property in the 'realEstate' array
      alert(
        `Owner: ${realEstate[i].owner} \n
        Rooms: ${realEstate[i].rooms} \n
        Bathrooms: ${realEstate[i].bathrooms} \n
        Garage: ${realEstate[i].garage}`
      ); // Displays the owner, rooms, bathrooms, and garage information for each property
    }
}

// Main code:
while (menu != 3) { // Executes the code block as long as 'menu' is not equal to 3
    menu = Number(prompt(`Menu:
    1. Register property.
    2. Show registered properties.
    3. Exit.`)); // Asks the user to select an option from the menu and converts the response to a number

    switch(menu) { // Evaluates the value of 'menu'
        case 1: // If 'menu' is 1, calls the 'registerImovel' function
            registerRealEstate();
            break;
        case 2: // If 'menu' is 2, calls the 'showImoveis' function
            showRealEstate();
            break;
        case 3: // If 'menu' is 3, displays a message indicating the program has ended
            alert("Program ended.");
            break;
        default: // If 'menu' is any other value, displays a message indicating an invalid option
            alert("Invalid option.");
            break;
    }
}