const generateReadme = require("generateREADME.js");

const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

function questions(){
return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username",
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
    .then(function({ username, title, description, installation, usage, tech, license, tests, contributing, launch, sources }){
        //queryURL using username
        //axios get call for profile photo and email
        //const readMe = generateREADME({ username, title, description, installation, usage, tech, license, tests, contributing, launch, sources })
        //return fs.writeFile("README.md", readMe);
    }).then(function(){
        //console.log successful writing of file
    }).catch(function(err){
        //if (err) => throw err
    })