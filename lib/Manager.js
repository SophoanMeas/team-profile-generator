const Employee = require("./Employee");
class Manager extends Employee {

    constructor(name, id, email, officeNumber, role) {
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.role = role;

    }

    // override method
    getRole() {
        return this.role;
    }
}

module.exports = Manager;