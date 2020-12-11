
const inquirer = require('inquirer')
// array of questions for user
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Describe the project'
    },
    {
      type: 'confirm',
      name: 'confirmTableOfContents',
      message: 'Would you like a table of contents?',
      default: false
    },
    {
      type: 'input',
      name: 'tableOfContents',
      message: 'enter in table of contents',
      when: ({confirmTableOfContents}) => {
        if (confirmTableOfContents) {
          return true;
        } else{
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install the project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Describe how the project will be used'
    },
    {
      type: 'confirm',
      name: 'confirmScreenshot',
      message: 'Would you like to add screen shots?',
      default: false
    },
    {
      type: 'input',
      name: 'screenshot',
      message: 'Enter the screenshot pathway from the root directory',
      when: ({confirmScreenshot}) => {
        if (confirmScreenshot) {
          return true;
        } else{
          return false;
        }
      }
    },
  ]);
};

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

questions()
.then(testConsoleLog => {
  console.log(testConsoleLog)
});
