const Employee = require("./Employee");
class Intern extends Employee {
  constructor(name, id, email, schoolName) {
    super(name, id, email);
    this.schoolName = schoolName;
    this.role = "Intern";
  }

  getSchool() {
    return this.schoolName.charAt(0).toUpperCase() + this.schoolName.slice(1);
  }

  // override method
  getRole() {
    return this.role;
  }
}

module.exports = Intern;
