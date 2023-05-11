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