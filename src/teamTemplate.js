// constructing the team

const constructTeam = team => {

    // construct manager html
    const constructManager = manager => {
        return `
        <div class="card text-white bg-info m-3" style="max-width: 18rem;">
            <div class="card-header">
                <h2 class='card-title'>${manager.getName()}</h2>
                <p class='card-title'><i class="fa-solid fa-mug-hot"></i>&nbsp;${manager.getRole()}</p>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
                `;
    };

    // construct engineer html
    const constructEngineer = engineer => {
        return `
        <div class="card text-white bg-info m-3" style="max-width: 18rem;">
            <div class="card-header">
                <h2 class='card-title'>${engineer.getName()}</h2>
                <p class='card-title'><i class="fa-solid fa-glasses"></i>&nbsp;&nbsp;${engineer.getRole()}</p>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
                `;
    };

    // construct intern html
    const constructIntern = intern => {
        return `
        <div class="card text-white bg-info m-3" style="max-width: 18rem;">
            <div class="card-header">
                <h2 class='card-title'>${intern.getName()}</h2>
                <p class='card-title'><i class="fa-solid fa-graduation-cap"></i>&nbsp;${intern.getRole()}</p>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
                `;
    };

    // pushing individual role to html array
    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => constructManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => constructEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => constructIntern(intern))
        .join("")
    );

    return html.join("");

};

//export team html
module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link 
    rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
    crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/9fd8af20e3.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/style.css">
    <title>Document</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
                    ${constructTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
            `;
};