const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const emailValidation = require("nodejs-email-validation");
const cl = require("cli-color");

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

const addManager = () => {
  console.log(cl.white.bold("Welcome to") + cl.blueBright(" Team Profile Generator"));
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Enter the manager's name:",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            error(" Please enter a valid name!");
          }
        },
      },
        {
          type: "input",
          name: "managerId",
          message: "Enter the manager's ID:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              error(" Please enter a valid ID!");
            }
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Enter the manager's email-address:",
          validate: (input) => {
            if (emailValidation.validate(input)) {
              return true;
            } else {
              error(" Please a valid email-address!");
            }
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Enter the manager's office number: (no dash)",
          validate: (input) => {
            if (!isNaN(input)) {
                let count = 0;
                if (input.length == 10){
                    return true;
                }else{
                    error(" Please enter a 10 digits phone number!");
                }
            }else{
                error(" Please enter digits only")
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
      addEmployee();
    });
};

const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Enter the engineer's name:",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            error(" Please a valid name!");
          }
        },
      },
        {
          type: "input",
          name: "engineerId",
          message: "Enter the engineer's ID:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              error(" Please enter a valid ID!");
            }
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "Enter engineer's email-address:",
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
          name: "engineerGithub",
          message: "Enter engineer's gitHub username:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              error(" Please enter a valid username!");
            }
          },
        },
    ])
    .then((ans) => {
      const engineer = new Engineer(
        ans.engineerName,
        ans.engineerId,
        ans.engineerEmail,
        ans.engineerGithub
      );
      team.push(engineer);
      id.push(ans.engineerId);
      addEmployee();
    });
};

const addIntern = () =>{
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Enter the intern's name:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              error(" Please enter a valid username!");
            }
          },
        },
        {
          type: "input",
          name: "internId",
          message: " Enter the intern's ID",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              error(" Please enter a valid ID!");
            }
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "Enter intern's email-address:",
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
          name: "internSchool",
          message: "Enter intern's school name:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              error(" Please a valid school name!");
            }
          },
        },
      ])
      .then((ans) => {
        const intern = new Intern(
          ans.internName,
          ans.internId,
          ans.internEmail,
          ans.internSchool
        );
        team.push(intern);
        id.push(ans.internId);
        addEmployee();
      });
  }
  

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "memberType",
        message: "What member would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "Exit"],
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
      } else {
        generateFile();
      }
    });
};


function init() {
  addManager();
  // .then(team => {
  //     return render(team)
  // })
}

const generateFile = () => {
  console.log("Generating Team Profile.... ");
  return new Promise((resolve, reject) => {
    fs.writeFileSync(OUTPUT_PATH, render(team), (err) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: `${fileName} successfully created! Please check out the dist/index.html"`,
      });
    });
  });
};

init();
