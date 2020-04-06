/*window.onload = function fetchAPI() {
    this.fetch('alimento.json').then(response => response.json()).then(function(nova) {
        for (let i = 0; i < nova.results.length; i++) {
            // criando a <div> titulo
            let divTitle = document.createElement("div");
            let divConteudo = document.createTextNode(nova.results[i].title)
            divTitle.appendChild(divConteudo)
                // criando o link <a>
            let card = document.createElement("a");
            card.href = nova.results[i].href
            card.classList.add('display')
                // criando o thubmanil <img>    
            let imgThum = document.createElement("img");
            imgThum.src = nova.results[i].thumbnail
                // criando os ingredientes <span>
            let spanIng = document.createElement("span");
            let spanConteudo = document.createTextNode(nova.results[i].ingredients);
            spanIng.appendChild(spanConteudo);

            //Preencher o <a> o titulo, imagem, ingredientes 
            card.appendChild(divTitle);
            card.appendChild(imgThum);
            card.appendChild(spanIng);
            // selecione o ID alimentos
            let alimentos = document.getElementById('alimentos')
                //preencher o ID alimentos com o <a> 
            alimentos.appendChild(card);
        }
    })


}*/

window.onload = function fetchAPI() {
    fetch('alimento.json')
        .then(response => response.json())
        .then(function(nova) {
            for (let i = 0; i < nova.results.length; i++) {

                let divTitle = document.createElement("div")
                let divConteudo = document.createTextNode(nova.results[i].title)
                divTitle.appendChild(divConteudo)

                let card = document.createElement("a")
                card.href = nova.results[i].href
                card.classList.add('display')

                let imgThum = document.createElement("img")
                imgThum.src = nova.results[i].thumbnail

                let spanIng = document.createElement("span")
                let spanConteudo = document.createTextNode(nova.results[i].ingredients)
                spanIng.appendChild(spanConteudo)

                card.appendChild(divTitle)
                card.appendChild(imgThum)
                card.appendChild(spanIng)

                let alimentos = document.getElementById('alimentos')

                alimentos.appendChild(card)
            }
        })
}