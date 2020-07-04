// function to generate markdown for README

function generateMarkdown(answers) {
  return `# ${answers.title}

![Github license](https://img.shields.io/badge/license-${answers.license}-green.svg)

  ## Description

  ${answers.description}

  
  ## Table of Contents:

  * [Installation](##installation)
  * [Usage](##usage)
  * [License](##license)
  * [Contributing](##contributing)
  * [Tests](##tests)
  * [Questions](##questions)
  
  ## Installation

  To correctly use this project you need to install:
  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## License
  
  This project is licensed under:  ${answers.license}

  ## Contributing

  ${answers.contributing}

  ## Tests

  ${answers.tests}

  ## Questions

  My GitHub Page:  https://github.com/${answers.github}

  Email: ${answers.email}
  `;
}

module.exports = generateMarkdown;
