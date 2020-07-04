const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([

        {
            type: "input",
            name: "title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Please enter the project description"
        },
        {
            type: "input",
            name: "installation",
            message: "What do you use to install this project?"
        },
        {
            type: "input",
            name: "usage",
            message: "What can be the project used for?"
        },
        {
            type: "list",
            name: "license",
            message: "What licence did you use, if any?",
            choices: [
                "MIT",
                "ISC",
                "Apache",
                "Mozilla",
                "no license"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "How can people contribute to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Please run the test if any:"
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email:"
        }

    ]);
}

async function init() {
    console.log("\n*****Generating README*****\n")
    try {
        const answers = await promptUser();

        const markdown = generateMarkdown(answers);

        await writeFileAsync("Generated_README.MD", markdown);

        console.log("Successfully generated to README.MD");
    } catch (err) {
        console.log(err);
    }
}

init();
