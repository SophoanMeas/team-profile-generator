const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, role, gitHubUser) {
        super(name, id, email)
        this.role = role;
        this.gitHubUser = gitHubUser;
    }

    // override method
    getRole() {
        return this.role;
    }
}

module.exports = Employee;