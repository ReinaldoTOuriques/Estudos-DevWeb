// Obtendo as referências dos elementos do HTML.
const n1Input = document.getElementById("n1");
const n2Input = document.getElementById("n2");
const operacaoSelect = document.getElementById("operacao");
const resultadoInput = document.getElementById("resultado");
const calcularButton = document.getElementById("calcular");
const limparButton = document.getElementById("limpar");

// Função para realizar as operações.
function calcular() {
  // Obtendo os valores dos números e da operação selecionada.
  const n1 = Number(n1Input.value);
  const n2 = Number(n2Input.value);
  const operacao = operacaoSelect.value;

  // Realizando a operação selecionada.
  let resultado;
  switch (operacao) {
    case "soma":
      resultado = n1 + n2;
      break;
    case "subtracao":
      resultado = n1 - n2;
      break;
    case "multiplicacao":
      resultado = n1 * n2;
      break;
    case "divisao":
      resultado = n1 / n2;
      break;
    default:
      resultado = "";
      break;
  }

  // Exibindo o resultado na tela.
  resultadoInput.value = resultado;
}

// Função para limpar todos os campos e voltar para a operação de soma.
function limpar() {
  n1Input.value = '';
  n2Input.value = '';
  operacaoSelect.value = 'soma';
  resultadoInput.value = '';
}

// Adicionando eventos de clique aos botões de calcular e limpar.
calcularButton.addEventListener('click', calcular);
limparButton.addEventListener('click', limpar);