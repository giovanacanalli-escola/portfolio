function horas(){
    let agora = new Date;
    let hora = agora.getHours();
    let min = agora.getMinutes();

    const img = document.createElement("img");

    let resultado = document.getElementById("horas");

    resultado.textContent = `Agora são: ${hora}:${min}`;

    if (min = 19){
        resultado.textContent = `Agora são: ${hora}:${min}`;

        Image.src = "kit.jpeg";
    }
}