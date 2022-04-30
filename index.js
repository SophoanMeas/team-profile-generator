const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const emailValidator = "nodejs-email-validation";
const cl = require("cli-color");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT = path.resolve(__dirname, "dist");
const OUTPUT_PATH = path.join(OUTPUT, "index.html");
const render = require("./src/template.js");

const team = [];
const id = [];

function error(string) {
  return console.log(cl.redBright.bold(string));
}

const promptQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Enter the manager name",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            error("Please enter the Manager's name!");
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "Enter the manager ID",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            error("Please enter the Manager ID!");
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Enter (manager) email-address",
        validate: (input) => {
          if (emailValidation.validate(input)) {
            return true;
          } else {
            error(" Please a valid email address!");
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number",
        validate: (input) => {
          if (!isNaN(input)) {
            return true;
          } else {
            error("Please enter a valid office number!");
          }
        },
      },
    ])
    .then((ans) => {
      const manager = new Manager(
        ans.managerName,
        ans.managerId,
        ans.managerEmail,
        ans.officeNumber
      );
      team.push(manager);
      id.push(ans.managerId);
    });
};

function addTeamMembers() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "memberType",
        message: "What member would you like to add?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((ans) => {
      const selection = ans.memberType;
      if (selection === "Manager") {
        addManager();
      } else if (selection === "Engineer") {
        addEngineer();
      } else if (selection === "Intern") {
        addIntern();
      }
    });
}


