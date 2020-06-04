const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

function questions(){
return inquirer.prompt([
        {

        },
    ])
};

 function generateREADME(answers){
     return ``
 };

questions()
    .then(function({ username }){
        //queryURL using username
        //axios get call for profile photo and email
        //writeFile
    }).then(function(){
        //console.log successful writing of file
    }).catch(function(err){
        //if (err) => err
    })