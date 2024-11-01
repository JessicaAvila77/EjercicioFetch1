fetch("https://api.escuelajs.co/api/v1/users") //url del api, el query params estable la cantidad ?limit=20
.then (response => response.json()) //transforma la respuesta o los datos en formato json para que se manipule de una manera mas facil
.then(user => { //consumo del objeto json dbz es una variable
    let card = ` `  //aca debe ir el encabezado
    for (let db of user){
        card += `<div class="card mb-5" style="width: 18rem;">
        <img src="${db.avatar}" class="card-img-top">
       
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>name:</strong> ${db.name}</li>
            <li class="list-group-item"><strong>email:</strong> ${db.email}</li>
            <li class="list-group-item"><strong>password:</strong> ${db.password}</li>
            
        </ul>

    </div>`;
    }

    document.getElementById('card').innerHTML = card
})

