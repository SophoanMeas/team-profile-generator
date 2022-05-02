const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  // getOfficeNumber() {
  //   return this.officeNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  // }

  getOfficeNumber(){
    return this.officeNumber;
  }

  // override method
  getRole() {
    return this.role;
  }
}

module.exports = Manager;
