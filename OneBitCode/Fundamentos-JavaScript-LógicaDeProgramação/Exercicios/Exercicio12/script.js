class Developer {
  constructor(name, technologies) {
    this.name = name;
    this.technologies = technologies;
  }
}

class Technology {
  constructor(name, experience) {
    this.name = name;
    this.experience = experience;
  }
}

class DeveloperForm {
  constructor() {
    this.technologyCount = 0;
    this.developerForm = document.getElementById('developerForm');
    this.technologyList = document.getElementById('technologyList');
    this.addTechnologyBtn = document.getElementById('addTechnologyBtn');
    this.clearHistoryBtn = document.getElementById('clearHistoryBtn');
    this.developerSection = document.getElementById('developerSection');
    this.developerTable = document.getElementById('developerTable');

    this.addTechnologyBtn.addEventListener('click', () => this.addTechnology());
    this.developerForm.addEventListener('submit', (event) => this.submitForm(event));
    this.clearHistoryBtn.addEventListener('click', () => this.clearDeveloperTable());
  }

  addTechnology() {
    const technologyId = `technology${this.technologyCount}`;

    const technologyDiv = document.createElement('div');
    technologyDiv.id = technologyId;

    const technologyNameInput = document.createElement('input');
    technologyNameInput.type = 'text';
    technologyNameInput.name = 'technologyName';
    technologyNameInput.placeholder = 'Nome da Tecnologia';
    technologyDiv.appendChild(technologyNameInput);

    const experienceRadios = ['0-2 anos', '3-4 anos', '5+ anos'];
    experienceRadios.forEach((experience) => {
      const experienceInput = document.createElement('input');
      experienceInput.type = 'radio';
      experienceInput.name = `${technologyId}Experience`;
      experienceInput.value = experience;
      technologyDiv.appendChild(experienceInput);

      const experienceLabel = document.createElement('label');
      experienceLabel.textContent = experience;
      technologyDiv.appendChild(experienceLabel);
    });

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', () => {
      technologyDiv.remove();
    });
    technologyDiv.appendChild(removeButton);

    this.technologyList.appendChild(technologyDiv);
    this.technologyCount++;
  }

  submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    const technologies = [];

    const technologyDivs = this.technologyList.querySelectorAll('div');
    technologyDivs.forEach((technologyDiv) => {
      const technologyName = technologyDiv.querySelector('input[name="technologyName"]').value;
      const experience = technologyDiv.querySelector('input[type="radio"]:checked').value;
      const technology = new Technology(technologyName, experience);
      technologies.push(technology);
    });

    const developer = new Developer(name, technologies);
    this.addToDeveloperTable(developer);

    this.developerForm.reset();
    this.clearTechnologyList();
    this.showDeveloperSection();
  }

  addToDeveloperTable(developer) {
    const row = this.developerTable.insertRow();

    const nameCell = row.insertCell();
    const technologiesCell = row.insertCell();

    nameCell.textContent = developer.name;

    const technologies = developer.technologies.map((technology) => {
      return `${technology.name} (${technology.experience})`;
    });
    technologiesCell.textContent = technologies.join(', ');
  }

  clearTechnologyList() {
    this.technologyList.innerHTML = '';
    this.technologyCount = 0;
  }

  clearDeveloperTable() {
    this.developerTable.innerHTML = '<tr><th>Nome</th><th>Tecnologias</th></tr>';
    this.hideDeveloperSection();
  }

  showDeveloperSection() {
    this.developerSection.style.display = 'block';
  }

  hideDeveloperSection() {
    this.developerSection.style.display = 'none';
  }
}

const form = new DeveloperForm();
form.hideDeveloperSection();