//methods required for module to work
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

//function that returns the prompt method for inquirer, questions for the user are shown in the terminal once node index is entered
function questions() {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username",
        },

        {
            type: "input",
            name: "email",
            message: "Enter your contact email",
        },

        {
            type: "input",
            name: "title",
            message: "Give your Project a title",
        },

        {
            type: "input",
            name: "description",
            message: "Enter a short description (one sentence at least)",
        },

        {
            type: "input",
            name: "installation",
            message: "What installation is needed for your project? (e.g. npm install)",
            default: "No installation needed"
        },

        {
            type: "input",
            name: "usage",
            message: "How is the user to use your application? (be as detailed as possible)",
        },

        {
            type: "input",
            name: "license",
            message: "List your license",
            default: "None",
        },

        {
            type: "input",
            name: "tests",
            message: "What tests are to be used? (e.g. npm test)",
            default: "No tests needed"
        },

        {
            type: "input",
            name: "contributing",
            message: "Any contributors?",
            default: "None"
        },

        {
            type: "input",
            name: "launch",
            message: "Date your application releases",
        },
    ])
};

/*function for prompt is called and a then method is chained to pass the objects from prompt through. 
username is used to create the url to call axios. The response from axios is used to store the profile 
photo to be used later in variable readMe, that creates the README file using github markdown. The objects passed into
the .then function are used to insert into the generated README file in the variable readMe where appropriate.
*/
questions()
    .then(function ({ username, email, title, description, installation, usage, license, tests, contributing, launch }) {
        //queryURL using username
        const queryURL = `https://api.github.com/users/${username}`

        //axios get call for profile photo and email
        axios
            .get(queryURL)
            .then(function (res) {
                //holds the response for profile photo
                const profilePicture = res.data.avatar_url
                //holds README markdown
                const readMe = 
                `
# ${title}

![Made-With-Node](https://img.shields.io/badge/Made%20With-Node-green)

${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributors](#contributors)
* [License](#license)
* [Launch](#launch)
* [Questions](#questions)

### Installation

Enter the following to install:
\`${installation}\`

### Usage

${usage}

### Tests

Enter the following to test:

\`${tests}\`

### Contributors

${contributing}

### License

${license}

### Launch

Date application releases: \`${launch}\`

### Questions

If you have any questions, contact me here: ${email}

![profile photo](${profilePicture})

`
/*creates README file from variable readMe into file system. Errors are checked and if it's successful, a message is logged*/
        fs.writeFile("README.md", readMe, function(err){
            if (err) {
                throw err;
            }

            console.log("ReadMe was successfully created!")
        });

    });
});