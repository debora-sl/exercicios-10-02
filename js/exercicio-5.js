var arrayNumeros = [6, 8, 4, 78, 17];

// inserindo o array no HTML
var arrayHTML = document.getElementById("arrayHTML").innerHTML = `Array: [ ${arrayNumeros} ]`;

// pegando o botão
let contarArrayNumeros = document.getElementById("contarArrayNumeros");

// adicionando o evento de click
contarArrayNumeros.addEventListener('click', function () {

    console.log('botão clicado');

    let i = 0;
    while (i < arrayNumeros.length) {
        // inserindo o resultado no HTML
        var resultadoHTML = document.getElementById("resultadoHTML").innerHTML += ` <br> ${arrayNumeros[i]}`;
        i++;
        console.log(arrayNumeros[i]);
    }
});





