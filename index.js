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
            message: "",
        },

        {
            type: "input",
            name: "installation",
            message: "",
        },

        {
            type: "input",
            name: "usage",
            message: "",
        },

        {
            type: "input",
            name: "tech",
            message: "",
        },

        {
            type: "input",
            name: "license",
            message: "",
        },

        {
            type: "input",
            name: "tests",
            message: "",
        },

        {
            type: "input",
            name: "contributing",
            message: "",
        },

        {
            type: "input",
            name: "launch",
            message: "",
        },
    ])
};


questions()
    .then(function({ username, title, description, installation, usage, tech, license, tests, contributing, launch }){
        //queryURL using username
        //axios get call for profile photo and email
        //const readMe = generateREADME({ username, title, description, installation, usage, tech, license, tests, contributing, launch })
        //return fs.writeFile("README.md", readMe);
    }).then(function(){
        //console.log successful writing of file
    }).catch(function(err){
        //if (err) => throw err
    })