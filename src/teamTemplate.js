// constructing the team

const constructTeam = team => {

    // construct manager html
    const constructManager = manager => {
        return `
        <div class="card text-white bg-info m-3" style="max-width: 18rem;">
            <div class="card-header">
                <h2 class='card-title'>${manager.getName()}</h2>
                <p class='card-title'><i class="fa-solid fa-mug-hot"></i>${manager.getRole()}</p>
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
                <p class='card-title'><i class="fa-solid fa-glasses"></i>${engineer.getRole()}</p>
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
                <p class='card-title'><i class="fa-solid fa-graduation-cap"></i>${intern.getRole()}</p>
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

    

}