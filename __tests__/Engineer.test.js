
const Engineer= require ('../lib/Engineer')

// test creating engineer object
it('Can create an engineer object', ()=>{
    const engineer = new Engineer('Joe Smith', 3, 'joe.smith@hotmail.com', 'joeSmith');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining(engineer.email.toString()));
    expect(engineer.gitHub).toEqual(expect.any(String));
    expect(engineer.role).toEqual('Engineer')
})

// // test getName() to return engineer name
it('Can get an engineer name', ()=>{
    const engineer = new Engineer('Joe Smith', 3, 'joe.smith@hotmail.com', 'joeSmith');

    expect(engineer.getName()).toEqual('Joe Smith');
})

// // test getGitHub() to return engineer github username
it('Can get an engineer gethub username', ()=>{
     const engineer = new Engineer('Joe Smith', 3, 'joe.smith@hotmail.com', 'joeSmith');

    expect(engineer.getGitHub()).toEqual('joeSmith');
})

// // test getRole() to return engineer role
it('Can get an engineer role', ()=>{
     const engineer = new Engineer('Joe Smith', 3, 'joe.smith@hotmail.com', 'joeSmith');
    expect(engineer.getRole()).toEqual('Engineer');
})