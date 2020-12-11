const fs = require('fs')
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
// array of questions for user
const questions = () => {
  return inquirer.prompt([
    //title
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?'
    },
    //description
    {
      type: 'input',
      name: 'Description',
      message: 'Describe the project'
    },
    //table of contents y or n
    {
      type: 'confirm',
      name: 'confirmTableOfContents',
      message: 'Would you like a table of contents?',
      default: false
    },
    //table of contents after y
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
    //installation instructions
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install the project?'
    },
    //usage information
    {
      type: 'input',
      name: 'usage',
      message: 'Describe how the project will be used'
    },
    //screenshots y or n
    {
      type: 'confirm',
      name: 'confirmScreenshot',
      message: 'Would you like to add screen shots?',
      default: false
    },
    //screenshots after y
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
    //how to make contributions
    {
      type: 'input',
      name: 'contributions',
      message: 'How can others make contributions?'
    },
    //tests y or n
    {
      type: 'confirm',
      name: 'testConfirm',
      message: 'Would you like to include instructions on how to test the app?',
      default: false
    },
    //tests after y
    {
      type: 'input',
      name: 'tests',
      message: 'Enter testing instructions',
      when: ({confirmScreenshot}) => {
        if (confirmScreenshot) {
          return true;
        } else{
          return false;
        }
      }
    },
    //License
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license',
      choices: ['Apache', 'BSD 3-Clause', 'BDS 2-Clause', 'GNU General', 'GNU Library', 'MIT', 'Mozilla', 'Common Development and Distribution', 'Eclipse Public License']
    },
    //Questions
    {
      type: 'input',
      name: 'questions',
      message: 'Include instructions on how to reach out and ask questions about the project'
    }
  ]);
};

// function to write README file
// function writeToFile(fileName, data) {
// }
const writeFile = (fileContent) => {
  
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

questions()
.then(testConsoleLog => {
  console.log(testConsoleLog.projectName)
});
