async function recipe() {
    let response = await fetch('receitas.json').then(Response => {
        return Response.json();
    }).then(data => {
        let comidas = document.getElementById('comida');
        for (var info of data.results) {
            let y = document.createElement('li');
            y.appendChild(document.createTextNode(info.title + " "));
            y.appendChild(document.createTextNode("Ingredientes " + info.ingredients + "  "));
            y.appendChild(document.createTextNode(info.href));
            let foto = document.createElement("img");
            foto.src = info.thumbnail;
            comidas.appendChild(y);
            comidas.appendChild(foto);
        }
    }).catch(error => console.error(error))
}
window.onload = recipe()