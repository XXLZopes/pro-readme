
const inquirer = require('inquirer')
// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter your Github Username (Required)",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter a Github Username!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAbout",
        message:
          'Would you like to enter some information about yourself for an "About" section?',
        default: true,
      },
    ]);
  };
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
