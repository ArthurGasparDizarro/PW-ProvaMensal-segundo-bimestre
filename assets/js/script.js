function mostrarGato() {

    var imagemExistente = document.querySelector('#caixa-buscar .fotogato');
    if (imagemExistente) {
        imagemExistente.remove();
    }


    var img = document.createElement('img');
    img.src = "https://cataas.com/cat?" + new Date().getTime();
    img.className = "fotogato";
    document.getElementById('caixa-buscar').appendChild(img);
}