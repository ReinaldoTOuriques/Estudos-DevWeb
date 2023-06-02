/* Write a program in javascript that simulates a job vacancy system, where it is possible to manage the
jobs and add candidates to jobs.
It must meet the following requirements:

- Having a menu where it is possible to choose between the different functionalities of the system
    - List available jobs
    - Create a new vacancy
    - View a vacancy
    - Register a candidate for a vacancy
    - Delete a vacancy
    - To go out
- The option to list vacancies must show the index, name and number of candidates registered for all vacancies.
- The option to create a new vacancy should ask for a name for the vacancy, a description and a deadline, and also
should ask the user to confirm the information before saving it.
- The option to view a vacancy should ask for the index of the vacancy and show all its information: index, name,
description, deadline, number of candidates and the name of the candidates.
- The option to apply a candidate to a vacancy of asking for the candidate's name, the index of the vacancy and then a
confirmation displaying the job information before saving the applicant to the job.
- The option to delete a vacancy should ask for the index of the vacancy, show its information and ask the user to confirm
deleting the vacancy before actually deleting it. */

// JobVacancySystem class
class JobVacancySystem {
  constructor() {
    this.vacancies = [];
  }

  // Method to display the menu and handle user input
  start() {
    let choice;
    do {
      choice = this.displayMenu();
      switch (choice) {
        case '1':
          this.listVacancies();
          break;
        case '2':
          this.createVacancy();
          break;
        case '3':
          this.viewVacancy();
          break;
        case '4':
          this.registerCandidate();
          break;
        case '5':
          this.deleteVacancy();
          break;
        case '6':
          alert('Exiting...');
          break;
        default:
          alert('Invalid choice. Please try again.');
      }
    } while (choice !== '6');
  }

  // Method to display the menu and return the user's choice
  displayMenu() {
    return prompt(
      '=== Job Vacancy System ===\n' +
      '1. List available jobs\n' +
      '2. Create a new vacancy\n' +
      '3. View a vacancy\n' +
      '4. Register a candidate for a vacancy\n' +
      '5. Delete a vacancy\n' +
      '6. Exit'
    );
  }

  // Method to list available jobs
  listVacancies() {
    let vacanciesInfo = '=== Available Jobs ===\n';
    if (this.vacancies.length === 0) {
      vacanciesInfo += 'No jobs available.';
    } else {
      this.vacancies.forEach((vacancy, index) => {
        vacanciesInfo += `Index: ${index}\n`;
        vacanciesInfo += `Name: ${vacancy.name}\n`;
        vacanciesInfo += `Number of Candidates: ${vacancy.candidates.length}\n\n`;
      });
    }
    alert(vacanciesInfo);
  }

  // Method to create a new vacancy
  createVacancy() {
    alert('=== Create a New Vacancy ===');
    const name = prompt('Enter the name for the vacancy:');
    const description = prompt('Enter the description for the vacancy:');
    const deadline = prompt('Enter the deadline for the vacancy:');
    const confirm = prompt(`Confirm - Name: ${name}, Description: ${description}, Deadline: ${deadline} (Y/N):`);
    if (confirm.toUpperCase() === 'Y') {
      const vacancy = {
        name,
        description,
        deadline,
        candidates: []
      };
      this.vacancies.push(vacancy);
      alert('Vacancy created successfully.');
    } else {
      alert('Vacancy creation canceled.');
    }
  }

  // Method to view a vacancy
  viewVacancy() {
    alert('=== View a Vacancy ===');
    const index = parseInt(prompt('Enter the index of the vacancy:'));
    if (index >= 0 && index < this.vacancies.length) {
      const vacancy = this.vacancies[index];
      let vacancyInfo = `Index: ${index}\n`;
      vacancyInfo += `Name: ${vacancy.name}\n`;
      vacancyInfo += `Description: ${vacancy.description}\n`;
      vacancyInfo += `Deadline: ${vacancy.deadline}\n`;
      vacancyInfo += `Number of Candidates: ${vacancy.candidates.length}\n`;
      vacancyInfo += 'Candidates:\n';
      if (vacancy.candidates.length === 0) {
        vacancyInfo += 'No candidates registered for this vacancy.';
      } else {
        vacancy.candidates.forEach(candidate => {
          vacancyInfo += `${candidate}\n`;
        });
      }
      alert(vacancyInfo);
    } else {
      alert('Invalid index.');
    }
  }

  // Method to register a candidate for a vacancy
  registerCandidate() {
    alert('=== Register a Candidate for a Vacancy ===');
    const candidateName = prompt('Enter the candidate name:');
    const vacancyIndex = parseInt(prompt('Enter the index of the vacancy:'));
    if (vacancyIndex >= 0 && vacancyIndex < this.vacancies.length) {
      const vacancy = this.vacancies[vacancyIndex];
      const confirm = prompt(`Candidate Name: ${candidateName}\nVacancy: ${vacancy.name}\nConfirm registration (Y/N):`);
      if (confirm.toUpperCase() === 'Y') {
        vacancy.candidates.push(candidateName);
        alert('Candidate registered successfully.');
      } else {
        alert('Registration canceled.');
      }
    } else {
      alert('Invalid index.');
    }
  }

  // Method to delete a vacancy
  deleteVacancy() {
    alert('=== Delete a Vacancy ===');
    const index = parseInt(prompt('Enter the index of the vacancy:'));
    if (index >= 0 && index < this.vacancies.length) {
      const vacancy = this.vacancies[index];
      let vacancyInfo = `Index: ${index}\n`;
      vacancyInfo += `Name: ${vacancy.name}\n`;
      vacancyInfo += `Description: ${vacancy.description}\n`;
      vacancyInfo += `Deadline: ${vacancy.deadline}\n`;
      vacancyInfo += `Number of Candidates: ${vacancy.candidates.length}\n`;
      vacancyInfo += 'Candidates:\n';
      if (vacancy.candidates.length === 0) {
        vacancyInfo += 'No candidates registered for this vacancy.';
      } else {
        vacancy.candidates.forEach(candidate => {
          vacancyInfo += `${candidate}\n`;
        });
      }
      const confirm = prompt(`Confirm deletion (Y/N):\n\n${vacancyInfo}`);
      if (confirm.toUpperCase() === 'Y') {
        this.vacancies.splice(index, 1);
        alert('Vacancy deleted successfully.');
      } else {
        alert('Deletion canceled.');
      }
    } else {
      alert('Invalid index.');
    }
  }
}

// Create a new instance of JobVacancySystem and start the program
const jobSystem = new JobVacancySystem();
jobSystem.start();
