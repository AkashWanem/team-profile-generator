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
     
}