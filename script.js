const botao = document.getElementById("button");
let imagem = document.getElementById("image");

let soma
let sub
let multi
let div


botao.addEventListener("click", () => {

    let nome = prompt("qual seu nome?");

    alert("bem vindo a calculadora, " + nome,".");

    let numero1 = Number(prompt("digite um numero.  "));
    let numero2 = Number(prompt("digite o segundo numero   "));

    let soma = numero1 + numero2;
    let sub = numero1 - numero2;
    let multi = numero1 * numero2;
    let div = numero1 / numero2;

    alert(
        "Resultados:\n" +
        "Soma: " + soma + "\n" +
        "Subtração: " + sub + "\n" +
        "Multiplicação: " + multi + "\n" +
        "Divisão: " + div
    );
    
    imagem.src = "cellbitaegyo.jpeg";
    });    