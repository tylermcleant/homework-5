var fs = require("fs");
var greeting = require("./greeting");
const inquirer = require("inquirer");

function userQuestions() { 
// Series of questions to get username and password information. 
inquirer
.prompt([
    {
    type: "input",
    message: "What is your user name?",
    name: "username"
    },
    {
    type: "password",
    message: "What is your password?",
    name: "password"
    },
    {
    type: "password",
    message: "Re-enter password to confirm:",
    name: "confirm"
    }
])
.then(function(data) {
    if (data.password !== data.confirm){ // Checker to ensure the same password was keyed each time. 
    console.log("Passwords do not match, Please re-enter your information");
    userQuestions ();
    }else{
    var fs = require("fs");
// Storing needed for the userPassword.txt file per requirements. 
    fs.writeFile("./userPassword.txt",data.username + " : " + data.password,
function(err) {
    if (err) {
        return console.log(err);
    }else{
        console.log("Success!");
    }
});
}
});
}
userQuestions();
