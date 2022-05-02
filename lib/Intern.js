const Employee = require("./Employee");
class Intern extends Employee {
  constructor(name, id, email, schoolName) {
    super(name, id, email);
    this.schoolName = schoolName;
    this.role = "Intern";
  }

  getSchool() {
    return this.schoolName;
  }

  // override method
  getRole() {
    return this.role;
  }
}

module.exports = Intern;
