function carregar() {
    document.getElementById('titulo1').innerHTML = "Carregado com Sucesso"

}

function adcImagem() {
    let imagem = document.createElement("img")
    imagem.src = "https://www12.senado.leg.br/jovemsenador/home/imagens/carregando/image";
    document.getElementById('titulo1').appendChild(imagem);
    setTimeout(carregar, 500);
}