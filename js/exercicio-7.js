var arrayNumeros = [79, 25, 4, 16699666605, 17025];

// inserindo o array no HTML
var arrayHTML = document.getElementById("arrayHTML").innerHTML = `Array: [ ${arrayNumeros} ]`;

// pegando o botão
let verificarMaiorNumero = document.getElementById("verificarMaiorNumero");

// adicionando o evento de click
verificarMaiorNumero.addEventListener('click', function () {

    // iniciando o maior numero pela posição 0 dentro do array
    var maiorNumeroNoArray = arrayNumeros[0]

    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] > maiorNumeroNoArray) {
            maiorNumeroNoArray = arrayNumeros[i];
            // inserindo o resultado no HTML
            var resultadoHTML = document.getElementById("resultadoHTML").innerHTML = `Maior número: ${maiorNumeroNoArray}`;
        }
    }
});





