// pegando o botão
let botaoContarVogais = document.getElementById("botaoContarVogais");

// adicionando o evento de click
botaoContarVogais.addEventListener('click', function () {

    // pegando a palavra
    var palavra = document.getElementById("palavra").value;

    // expressão regular para verificar as vogais
    var vogais = palavra.match(/[aeiouAEIOUáàãéíóúÁÀÃÉÍÓÚ]/g);

    // caso não tenha vogais, atribuindo 0
    var quantidadeVogais = vogais ? vogais.length : 0;

    // inserindo o resultado no HTML
    var resultadoHTML = document.getElementById("resultadoHTML").innerHTML = `Palavra/ Frase: "${palavra}". <br> Quantidade de Vogais: ${quantidadeVogais}.`;

    limparInput();
});

// função para limpar o campo, após o usário inserir o número
function limparInput() {
    document.getElementById("palavra").value = ''
}




