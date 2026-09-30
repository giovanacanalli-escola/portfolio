function NumeroAleatorio(){

    let min = 1;
    let max = 1001;
    let dif = max - min;
    let random = Math.random();
    let num = min + Math.trunc(dif * random);

    document.getElementById("roblox").textContent = `o número gerado foi: ${num}`;

}

function Hange(){

    let imagem = document.getElementById("imagem");

    imagem.src = "weouttagrishas.jpg"

}