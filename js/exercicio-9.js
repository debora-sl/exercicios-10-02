// pegando o botão
let botaoInverterPalavra = document.getElementById("botaoInverterPalavra");

// adicionando o evento de click
botaoInverterPalavra.addEventListener('click', function () {

    // pegando a palavra
    var palavra = document.getElementById("palavra").value;

    // invertendo a palavra
    var palavraInvertida = palavra.split('').reverse().join('');;

    // inserindo o resultado no HTML
    var resultadoHTML = document.getElementById("resultadoHTML").innerHTML = `Palavra invertida: ${palavraInvertida}.`;

    limparInput();
});

// função para limpar o campo, após o usário inserir o número
function limparInput() {
    document.getElementById("palavra").value = ''
}




