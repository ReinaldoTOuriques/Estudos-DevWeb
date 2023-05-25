
document.addEventListener("DOMContentLoaded", () => {
  // Pega o elemento HTML que faz referência ao botão de verificação.
  const buttonChecker = document.getElementById("inputButton");

  // Adiciona o evento de clique ao referido botão.
  buttonChecker.addEventListener("click", () => {
    // Pega o input do usuário e converte tudo para letras minúsculas.
    const usersInput = document.getElementById("inputText").value.toLowerCase();

    // Cria uma nova variável e atribui à ela uma função que verifica se o input do usuário é de fato um palíndromo.
    const isPalindrome = palindromeChecker(usersInput);

    // Exibi o resultado na tela.
    displayResult(usersInput, isPalindrome);
  });

  // Função para verificar se a palavra é um palíndromo.
  function palindromeChecker(usersInput) {
    const length = usersInput.length;

    // Percorrer metade da palavra.
    for (let i = 0; i < length / 2; i++) {
      // Verificar se os caracteres opostos são diferentes.
      if (usersInput[i] !== usersInput[length - 1 - i]) {
        return false; // Não é um palíndromo.
      }
    }
    return true; // É um palíndromo
  }

  // Função para exibir o resultado na tela.
  function displayResult(usersInput, isPalindrome) {
    const message = isPalindrome ? `${usersInput} is a palindrome!` : `${usersInput} is not a palindrome.`;
    alert(message);
  }
});