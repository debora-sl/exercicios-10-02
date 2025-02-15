// pegando o botão somar
let botaoSomar = document.getElementById("somar");

// adicionando o evento de click
botaoSomar.addEventListener('click', function () {

    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    // chamando a função somar
    somar(numero1, numero2);

    // limpar os campos
    limparInput();

})

// função que recebe 2 números e soma
function somar(numero1, numero2) {

    var resultado = numero1 + numero2;

    // inserindo o resultado no HTML
    var resultadoHTML = document.getElementById("resultadoHTML").innerHTML = `Resultado: a soma de ${numero1} + ${numero2} = ${resultado}`;

    return resultado;
}

// função para limpar os inputs
function limparInput() {
    document.getElementById("numero1").value = '';
    document.getElementById("numero2").value = '';
};



