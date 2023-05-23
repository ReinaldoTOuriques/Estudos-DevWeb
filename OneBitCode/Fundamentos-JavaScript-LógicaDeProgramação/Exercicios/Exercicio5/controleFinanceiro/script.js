
let money = 0; // Variável para armazenar a quantidade de dinheiro
let exit = false; // Variável para controlar a opção de sair

const form = document.getElementById('moneyForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const nameInput = document.getElementById('nameInput').value;
  const moneyInput = parseFloat(document.getElementById('moneyInput').value);

  if (!isNaN(moneyInput)) {
    money = moneyInput; // Atualiza a quantidade de dinheiro
    alert(`Welcome, ${nameInput}! You currently have R$ ${money.toFixed(2)}.`); // Exibe a quantidade de dinheiro
  } else {
    alert("Invalid input. Please enter a valid number."); // Exibe uma mensagem de erro se o valor não for válido
    return; // Interrompe a execução da função
  }

  while (true) {
    const option = parseInt(prompt(`Options:\n1. Add money\n2. Remove money\n3. Exit\n\nPlease enter your option:`)); // Solicita a opção do usuário

    if (option === 1) {
      const amountToAdd = parseFloat(prompt("Please enter the amount of money to add:")); // Solicita a quantidade de dinheiro a adicionar

      if (!isNaN(amountToAdd)) {
        money += amountToAdd; // Adiciona a quantidade de dinheiro
        alert(`Money added successfully. You now have R$ ${money.toFixed(2)}.`); // Exibe a quantidade de dinheiro atualizada
      } else {
        alert("Invalid input. Please enter a valid number."); // Exibe uma mensagem de erro se o valor não for válido
      }
    } else if (option === 2) {
      const amountToRemove = parseFloat(prompt("Please enter the amount of money to remove:")); // Solicita a quantidade de dinheiro a remover

      if (!isNaN(amountToRemove)) {
        if (amountToRemove <= money) {
          money -= amountToRemove; // Remove a quantidade de dinheiro
          alert(`Money removed successfully. You now have R$ ${money.toFixed(2)}.`); // Exibe a quantidade de dinheiro atualizada
        } else {
          alert("Insufficient funds. You don't have enough money to remove."); // Exibe uma mensagem de erro se não houver dinheiro suficiente para remover
        }
      } else {
        alert("Invalid input. Please enter a valid number."); // Exibe uma mensagem de erro se o valor não for válido
      }
    } else if (option === 3) {
      exit = true; // Define a variável de controle para sair do loop
      break; // Sai do loop interno
    } else {
      alert("Invalid option. Please enter a valid option."); // Exibe uma mensagem de erro se a opção não for válida
    }
  }
});