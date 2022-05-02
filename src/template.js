module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>

    <body>
    <!-- Title -->
        <div class="container-fluid">
            <div class="row">
            <div class="col py-3 text-center mb-5 title">
            <h1>Web Dev Team</h1>
                </div>
            </div>
        </div>

        <!-- Employee Container -->
        <div class="container">
            <div class="row">
            <div class="col-lg-12 d-flex justify-content-center employee-list-container">
                    ${createEmployee(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};

const createEmployee = (team) => {
  const addManager = (manager) => {
    return `
    <!-- Employee Manager Card -->
            <div class="col-lg-4 d-flex align-items-stretch card employee-card ">
    <div class="card-body card-title">
        <h3 class="card-employee-name">${manager.getName()}</h3>
        <h4 class="card-employee-role mt-4 icon-manager bi bi-person-workspace">Manager</h4>
    </div>
    <div class="card-body bg-light card-attributes">
        <ul class="list-group text-dark">
            <li class="list-group-item"><i class="card-icon bi-key"></i>ID: ${manager.getId()}</li>
            <li class="list-group-item"><i class="card-icon bi-envelope"></i>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item"><i class="card-icon bi-telephone"></i>Office number: ${manager.getOfficeNumber()}</a></li>
        </ul>
        </div>
    </div>
        `;
  };

  const addEngineer = (engineer) => {
    return `
    <!-- Employee Engineer Card -->
            <div class="col-lg-4 d-flex align-items-stretch card employee-card">
    <div class="card-body card-title">
        <h3 class="card-employee-name">${engineer.getName()}</h3>
        <h4 class="card-employee-role mt-4 icon-engineer bi bi-wrench">${engineer.getRole()}</h4>
    </div>
    <div class="card-body bg-light card-attributes">
        <ul class="list-group text-dark">
            <li class="list-group-item"><i class="card-icon bi-key"></i>ID: ${engineer.getId()}</li>
            <li class="list-group-item"><i class="card-icon bi-envelope"></i>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item"><i class="card-icon bi-github"></i>GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
        </ul>
    </div>
</div>
        `;
  };

  const addIntern = (intern) => {
    return `
    <!-- Employee Intern Card -->
            <div class="col-lg-4 d-flex align-items-stretch card employee-card">
    <div class="card-body card-title">
        <h3 class="card-employee-name">${intern.getName()}</h3>
        <h4 class="card-employee-role mt-4 icon-intern bi bi-book-half">${intern.getRole()}</h4>
    </div>
    <div class="card-body bg-light card-attributes">
        <ul class="list-group text-dark">
            <li class="list-group-item"><i class="card-icon bi-key"></i>ID: ${intern.getId()}</li>
            <li class="list-group-item"><i class="card-icon bi-envelope"></i>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item"><i class="card-icon bi-house"></i>School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
  };

  const profile = [];

  const newManager = team
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => addManager(manager)).join('');
  profile.push(newManager);
  //   console.log(newManager)

  const newEngineer = team
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => addEngineer(engineer)).join('');
  profile.push(newEngineer);
  //   console.log(newEngineer);

  const newIntern = team
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => addIntern(intern)).join('');
  profile.push(newIntern);

  return profile.join('');
};
