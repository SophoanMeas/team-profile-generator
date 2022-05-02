const Intern = require("../lib/Intern");

describe("test creating intern object", () => {
  it("Can create an intern object", () => {
    const intern = new Intern(
      "Sally Smith",
      4,
      "sally.smith@intern-web.com",
      "Carleton University"
    );

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(
      expect.stringContaining(intern.email.toString())
    );
    expect(intern.schoolName).toEqual(expect.any(String));
    expect(intern.role).toEqual("Intern");
  });
});

describe("test getSchool() to return school Name", () => {
  it("Can get an school name", () => {
    const intern = new Intern(
      "Sally Smith",
      4,
      "sally.smith@intern-web.com",
      "Carleton University"
    );

    expect(intern.getSchool()).toEqual("Carleton University");
  });
});

describe("test getRole() to return intern role", () => {
  it("Can get an intern role", () => {
    const intern = new Intern(
      "Sally Smith",
      4,
      "sally.smith@intern-web.com",
      "Carleton University"
    );

    expect(intern.getRole()).toEqual("Intern");
  });
});
