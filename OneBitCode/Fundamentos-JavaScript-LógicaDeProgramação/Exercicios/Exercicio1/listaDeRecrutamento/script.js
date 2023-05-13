
const fieldOfStudySelect = document.getElementById("fieldOfStudy");
const outroOption = document.getElementById("outroOption");

// Função para mostrar input ao usuário casos seja necessário inserir manualmente o campo de estudo.
fieldOfStudySelect.addEventListener('change', () => {
  if (fieldOfStudySelect.value === 'outro') {
    outroOption.style.display = 'block';
  } else {
    outroOption.style.display = 'none';
  }
});

// Seleciona o formulário através do DOM.
const formulario = document.getElementById("formTag");

// Adiciona um evento de escuta para quando o formulário for enviado e evita que a página seja recarregada.
formulario.addEventListener('submit', function(event) {
  event.preventDefault();

// Seleciona os campos do formulário e salva as informações em variáveis por meio do "().value" para serem utilizadas por meio do método alert() e apresentá-las ao usuário.
const fieldOfStudyValue = document.getElementById("fieldOfStudy").value;
const outroOptionValue = document.getElementById("outro").value;
const primeiroNome = document.getElementById("firstNameInput").value;
const sobrenome = document.getElementById("lastNameInput").value;
const email = document.getElementById("emailInput").value;
const anoDeNascimento = document.getElementById("birthYearInput").value;

// De acordo com o que o usuário selecionar no "Campo de estudo", exibe as informações na tela.
  if(fieldOfStudySelect.value === "outro") {
    alert(`Nome completo: ${primeiroNome} ${sobrenome}\n
    E-mail: ${email}\n
    Campo de estudo (outro): ${outroOptionValue}\n
    Idade: ${anoDeNascimento}`);
  } else {
    alert(`Nome completo: ${primeiroNome} ${sobrenome}\n
    E-mail: ${email}\n
    Campo de estudo: ${fieldOfStudyValue}\n
    Idade: ${anoDeNascimento}`);
  }
});

// função que calcula a idade baseada no ano de nascimento, conforme solicitado no exercício. Porém, devido ao fato de eu ter escolhido mudar um pouco o projeto, esse requisito não se encaixa no meu design de página.
/* const idade = new Date().getFullYear() - anoDeNascimento; */