const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
    this.role = "Engineer";
  }

  getGitHub() {
    return this.gitHub;
  }
  // override method
  getRole() {
    return this.role;
  }
} // this.role = role;

module.exports = Engineer;
