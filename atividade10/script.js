function calcular(){

    const mes = document.getElementById("valor").value.toUpperCase();
    const resultado = document.getElementById("resultado");

    if(mes == "DEZEMBRO" || mes == "JANEIRO" || mes == "FEVEREIRO"){
        resultado.textContent = "a estação durante este mês é VERÃO!";

    } else if (mes == "MARÇO" ||mes == "ABRIL" ||mes == "MAIO") {
        resultado.textContent = "a estação durante este mês é OUTONO!";

    } else if (mes == "JUNHO" ||mes == "JULHO" ||mes == "AGOSTO") {
        resultado.textContent = "a estação durante este mês é INVERNO!";

    } else if (mes == "SETEMBRO" ||mes == "OUTUBRO" ||mes == "NOVEMBRO") {
        resultado.textContent = "a estação durante este mês é PRIMAVERA!";
    }
}

const botao = document.getElementById("botao");

botao.addEventListener("click", calcular);