const generateReadme = require("generateREADME.js");

const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

function questions(){
return inquirer.prompt([
        {
            
        },
    ])
};


questions()
    .then(function({ username, /*list other key values for name key in same order as questions*/ }){
        //queryURL using username
        //axios get call for profile photo and email
        //const readMe = generateREADME({ username, /*list other key values for name key in same order as questions*/ })
        //return fs.writeFile("README.md", readMe);
    }).then(function(){
        //console.log successful writing of file
    }).catch(function(err){
        //if (err) => throw err
    })