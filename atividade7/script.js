function NumeroAleatorio(){

    let min = 1;
    let max = 1001;
    let dif = max - min;
    let random = Math.random();
    let num = min + Math.trunc(dif * random);
    let resultado = document.getElementById("roblox");

    const video = document.getElementById("video");
    const audio = document.getElementById("audio");
    let imagem = document.getElementById("imagem");

    resultado.style.color = "black";
    resultado.textContent = `o número gerado foi: 
    ${num}`;

    video.style.display = "none";
    audio.getHTML.controls = "muted";
    imagem.style.display = "block";
    audio.muted = !audio.muted;

    if (num === 67) {
        imagem.src = "https://i.pinimg.com/736x/1b/58/bb/1b58bbb9bc9c0209264408197c56f055.jpg"

        audio.src = "ssstik.io_1790876860377.mp3"
        audio.muted = false;
        audio.play();
        
        alert("WOAH, FARMOU MUITA AURA!!!");
        

    } else if (num === 911) {
        video.style.display = "block";
        imagem.style.display = "none";
        audio.muted = false;
        video.src = "nineeleven.mp4";
        video.play();

    } else if (num === 905) {
        video.style.display = "block";
        imagem.style.display = "none";
        audio.muted = false;
        video.src = "omghangefuckme.mp4"
        video.play();

    }
}

function Hange(){

    imagem.src = "weouttagrishas.jpg"

}