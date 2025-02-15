// pegando o botão
let contarCaracteres = document.getElementById("contarCaracteres");

// adicionando o evento de click
contarCaracteres.addEventListener('click', function () {

    var frase = document.getElementById("frase").value;

    // inserindo o resultado no HTML
    var resultadoHTML = document.getElementById("resultadoHTML").innerHTML = `Quantidade de Caracteres da frase "${frase} " é: ${frase.length}.`;

    // limpar os campos
    limparInput();
});

// função para limpar o input
function limparInput() {
    document.getElementById("frase").value = '';
};




