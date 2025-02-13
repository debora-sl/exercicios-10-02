// pegando o botão
let checarNumero = document.getElementById("checarNumero");

// adicionando o evento de click
checarNumero.addEventListener('click', function () {

    var numero = parseInt(document.getElementById("numero").value);

    // checando se o número é par ou ímpar com o operado %
    if (numero % 2 === 0) {
        // inserindo o resultado no HTML
        var resultadoHTML = document.getElementById("resultadoHTML").innerHTML = `Resultado: o número ${numero} é: Par.`;
    } else {
        // inserindo o resultado no HTML
        var resultadoHTML = document.getElementById("resultadoHTML").innerHTML = `Resultado: o número ${numero} é: Ímpar.`;
    }
});





