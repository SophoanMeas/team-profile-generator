const Manager = require("../lib/Manager");

describe("test creating manager object", () => {
  it("Can create an intern object", () => {
    const manager = new Manager(
      "Jethro Cupido",
      4,
      "jethro.cupido@web-dev.com",
      "613-123-4567",
      "Manager"
    );

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(
      expect.stringContaining(manager.email.toString())
    );
    expect(manager.officeNumber).toEqual("613-123-4567");
    expect(manager.role).toEqual("Manager");
  });
});

describe("test getOfficeNumber() to return telephone number", () => {
  it("Can get Manager telephone number", () => {
    const manager = new Manager(
      "Jethro Cupido",
      4,
      "jethro.cupido@web-dev.com",
      "613-123-4567",
      "Manager"
    );

    expect(manager.getOfficeNumber()).toEqual("613-123-4567");
  });
});

describe("test getRole() to return manager role", () => {
  it("Can get an manager role", () => {
    const manager = new Manager(
      "Jethro Cupido",
      4,
      "jethro.cupido@web-dev.com",
      "613-123-4567",
      "Manager"
    );

    expect(manager.getRole()).toEqual("Manager");
  });
});
