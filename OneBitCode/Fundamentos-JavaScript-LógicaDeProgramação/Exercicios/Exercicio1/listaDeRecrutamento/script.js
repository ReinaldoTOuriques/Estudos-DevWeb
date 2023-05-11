// Função para mostrar input ao usuário casos seja necessário inserir manualmente o campo de estudo.
let fieldOfStudySelect = document.getElementById("fieldOfStudy");
  let outroOption = document.getElementById("outroOption");

fieldOfStudySelect.addEventListener('change', function() {
  if (fieldOfStudySelect.value === 'outro') {
    outroOption.style.display = 'block';
  } else {
    outroOption.style.display = 'none';
  }
});

// Seleciona o formulário e adiciona um evento de escuta para quando o formulário for enviado
const formulario = document.getElementById("formTag");

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que a página seja recarregada ao enviar o formulário

// Seleciona os campos do formulário e salva as informações em variáveis
  const primeiroNome = document.getElementById("firstNameInput").value;
  const sobrenome = document.getElementById("lastNameInput").value;
  const email = document.getElementById("emailInput").value;
  const campoDeEstudo = document.getElementById("fieldOfStudy").value;
  const outroCampoDeEstudo = document.getElementById("outro").value
  const anoDeNascimento = document.getElementById("birthYearInput").value;

// Calcula a idade baseada no ano de nascimento
  const idade = new Date().getFullYear() - anoDeNascimento;

// Exibe as informações na tela.
  alert(`Nome completo: ${primeiroNome} ${sobrenome}\nE-mail: ${email}\nCampo de estudo: ${campoDeEstudo}\nCampo de estudo (outro): ${outroCampoDeEstudo}\nIdade: ${idade}`);

});