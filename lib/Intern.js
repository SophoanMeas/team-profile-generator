const Employee = require("../lib/Employee");
class Intern extends Employee {

    constructor(name, id, email, role, schoolName) {
        super(name, id, email)
        this.role = role;
        this.schoolName = schoolName;
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