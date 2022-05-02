const Employee = require("../lib/Employee");

describe("test creating employee object", () => {
  it("Can create an employee object", () => {
    const employee = new Employee("Mocha", 2, "mocha@gmail.com", "Manager");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining(employee.email.toString()));
    expect(employee.role).toEqual("Manager");
  });
});

describe("test getName() to return employee name", () => {
  it("Can get an employee name", () => {
    const employee = new Employee("Mocha", 2, "mocha@gmail.com", "test");

    expect(employee.getName()).toEqual("Mocha");
  });
});

describe("test getId() to return employee id", () => {
  it("Can get an employee id", () => {
    const employee = new Employee("Mocha", 2, "mocha@gmail.com", "test");

    expect(employee.getId()).toEqual(expect.any(Number));
  });
});

describe("test getEmail() to return employee email", () => {
  it("Can get an employee email", () => {
    const employee = new Employee("Mocha", 2, "mocha@gmail.com", "test");

    expect(employee.getEmail()).toEqual("mocha@gmail.com");
  });
});

describe("test getRole() to return employee role", () => {
  it("Can get an employee role", () => {
    const employee = new Employee("Mocha", 2, "mocha@gmail.com", "test");

    expect(employee.getRole()).toEqual("test");
  });
});
