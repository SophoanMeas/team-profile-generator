
const Employee = require ('../lib/Employee')

// test creating employee object
it('Can create an employee object', ()=>{
    const employee = new Employee('Mocha', 2, 'mocha@gmail.com', 'Manager');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining(employee.email.toString()));
    expect(employee.role).toEqual('Manager')
})

// test getName() to return employee name
it('Can get an employee name', ()=>{
    const employee = new Employee('Mocha', 2, 'mocha@gmail.com', 'Manager');

    expect(employee.getName()).toEqual('Mocha');
})

// test getId() to return employee id
it('Can get an employee id', ()=>{
    const employee = new Employee('Mocha', 2, 'mocha@gmail.com', 'Manager');

    expect(employee.getId()).toEqual(expect.any(Number));
})

// test getEmail() to return employee email
it('Can get an employee email', ()=>{
    const employee = new Employee('Mocha', 2, 'mocha@gmail.com', 'Manager');

    expect(employee.getEmail()).toEqual('mocha@gmail.com');
})

// test getRole() to return employee role
it('Can get an employee role', ()=>{
    const employee = new Employee('Mocha', 2, 'mocha@gmail.com', 'Manager');

    expect(employee.getRole()).toEqual('Manager');
})