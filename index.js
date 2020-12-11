const fs = require("fs");
const inquirer = require("inquirer");
const { stringify } = require("querystring");

// array of questions for user
const questions = () => {
  return inquirer.prompt([
    //github username
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
        //deployed application y or n
        {
          type: "confirm",
          name: "confirmDeployed",
          message: "Is this application deployed?",
          default: true,
        },
        //deployd application after y
        {
          type: "input",
          name: "linkToApp",
          message: "Copy and paste a link to the deployed project application",
          when: ({ confirmDeployed }) => {
            if (confirmDeployed) {
              return true;
            } else {
              return false;
            }
          },
        },
    //title
    {
      type: "input",
      name: "projectName",
      message: "What is the name of your project?",
    },
    //description
    {
      type: "input",
      name: "description",
      message: "Describe the project",
    },
    //table of contents y or n
    {
      type: "confirm",
      name: "tableOfContents",
      message: "Would you like a table of contents?",
      default: false,
    },
    
    //installation instructions
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install the project?",
    },
    //usage information
    {
      type: "input",
      name: "usage",
      message: "Describe how the project will be used",
    },
    //screenshots y or n
    {
      type: "confirm",
      name: "confirmScreenshot",
      message: "Would you like to add screen shots?",
      default: false,
    },
    //screenshots after y
    {
      type: "input",
      name: "screenshot",
      message: "Enter the screenshot pathway from the root directory (Example: ./image.png)",
      when: ({ confirmScreenshot }) => {
        if (confirmScreenshot) {
          return true;
        } else {
          return false;
        }
      },
    },
    //how to make contributions
    {
      type: "input",
      name: "contributions",
      message: "How can others make contributions?",
    },
    //tests y or n
    {
      type: "confirm",
      name: "testConfirm",
      message: "Would you like to include instructions on how to test the app?",
      default: false,
    },
    //tests after y
    {
      type: "input",
      name: "tests",
      message: "Enter testing instructions",
      when: ({ testConfirm }) => {
        if (testConfirm) {
          return true;
        } else {
          return false;
        }
      },
    },
    //License
    {
      type: "list",
      name: "license",
      message: "Please select a license",
      choices: [
        "None",
        "Apache",
        "BSD3-Clause",
        "BDS2-Clause",
        "GNUGeneral",
        "GNULibrary",
        "MIT",
        "Mozilla"
      ],
    },
    //Questions
    {
      type: "input",
      name: "questions",
      message:
        "Include instructions on how to reach out and ask questions about the project",
    },
  ]);
};

//README.md content
const readmeContent = readmeData => {
  //destructure projects and about data from templateData based on their property key names
  const {
    github,
    linkToApp,
    projectName,
    description,
    tableOfContents,
    installation,
    usage,
    screenshot,
    tests,
    license,
    questions,
  } = readmeData;

//deployed application
let linkToAppRM;
if(!linkToApp){
  linkToAppRM = ''
} else{
  linkToAppRM = linkToApp
};

  //table of contents
  let tableOfContentsRM;
  if(!tableOfContents){
    tableOfContentsRM = ''
  } else{
    tableOfContentsRM = `## Table of Contents:
* [Installation](#Installation) 
* [Usage](#usage) 
* [Contact](#contact)
    `
  };

  //screenshots
  let screenshotRM;
  if(!screenshot){
    screenshotRM = ''
  } else{
    screenshotRM = `![](${screenshot})`
  };

  //license
  let licenseRM;
  if(license === 'None'){
    licenseRM = ''
  } else{
    licenseRM = `[![license](https://img.shields.io/badge/license-${license}-red.svg)](https://en.wikipedia.org/wiki/${license}_License)`
  }
  
  //tests
  let testsRM;
  if(!tests){
    testsRM = ''
  } else{
    testsRM = `## Project Testing
    ${tests}`
  };
  return `
# ${projectName}
## Description ${licenseRM}
[Deployed Application](${linkToAppRM})
${description}
${tableOfContentsRM}
## Installation
${installation}
## Usage
${usage}
${testsRM}
${screenshotRM}
## Contact
[Github](https://github.com/${github})

${questions}
`;
};

// function to write README file
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./README.md", fileContent, (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: "README.md file created!",
      });
    });
  });
};

// function call to initialize program

questions()
  .then((questionAnswers) => {
    return readmeContent(questionAnswers);
  })
  .then((writeTheFile) => {
    return writeFile(writeTheFile);
  });
