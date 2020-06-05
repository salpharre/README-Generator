//
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

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
            message: "How is the user to use your application?",
        },

        {
            type: "input",
            name: "tech",
            message: "What technologies and libraries were used?",
        },

        {
            type: "input",
            name: "license",
            message: "List the license you used (if you have one)",
            default: "No license"
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

        {
            type: "input",
            name: "sources",
            message: "List any outside resources",
            default: "No outside resources used"
        },
    ])
};


questions()
    .then(function ({ username, email, title, description, installation, usage, tech, license, tests, contributing, launch, sources }) {
        //queryURL using username
        const queryURL = `https://api.github.com/users/${username}`

        //axios get call for profile photo and email
        axios
            .get(queryURL)
            .then(function (res) {

                const profilePicture = res.data.avatar_url

                const readMe = 
                `
                # ${title}

                [![Made-With-Node](https://img.shields.io/badge/Made%20With-Node-green)]

                ${description}

                ## Table of Contents
                * [Installation](#installation)
                * 

                ### Questions
                If you have any questions, contact me here: ${email}
                ${profilePicture}
                `

                fs.writeFile("README.md", readMe, function(err){
                    if (err) {
                        throw err;
                    }

                    console.log("ReadMe was successfully created!")
                });

            });
    });