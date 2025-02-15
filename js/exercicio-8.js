// gerando um número aleatório
var numeroAleatorio = parseInt(Math.floor(Math.random() * 100) + 1);

// pegando o botão
let testarNumero = document.getElementById("testarNumero");

// adicionando o evento de click
testarNumero.addEventListener('click', function () {

    // pegando o número de chute do usuário
    var numeroTentativa = parseInt(document.getElementById("numeroTentativa").value);

    if (numeroTentativa < 1 || numeroTentativa > 100) {
        var resultadoErroHTML = document.getElementById("resultadoHTML").innerHTML = `Ops, você inseriu ${numeroTentativa} que é um número menor que 1 ou maior que 100.`;
        limparInput();
    } else if (numeroTentativa == numeroAleatorio) {
        console.log('Acertou!');
        // inserindo o resultado no HTML
        var resultadoHTML = document.getElementById("resultadoHTML").innerHTML = `Parabéns, você chutou: ${numeroTentativa} e acertou.`;
        limparInput();

    } else {
        // inserindo o resultado no HTML
        var resultadoHTML = document.getElementById("resultadoHTML").innerHTML = `Poxa, você chutou: ${numeroTentativa}, porém este não é o número.`;
        limparInput();
    }

});

// função para limpar o campo, após o usário inserir o número
function limparInput() {
    document.getElementById("numeroTentativa").value = ''
}




