// pegando o botão
let incluirCarro = document.getElementById("incluirCarro");

// adicionando o evento de click
incluirCarro.addEventListener('click', function () {
    var carros = {
        marca: '',
        modelo: '',
        ano: ''
    }

    carros.marca = document.getElementById("marca").value;
    carros.modelo = document.getElementById("modelo").value;
    carros.ano = document.getElementById("ano").value;

    // inserindo o resultado no HTML
    var resultadoHTML = document.getElementById("resultadoHTML").innerHTML = `Carro:{ Marca: ${carros.marca}, Modelo: ${carros.modelo} e Ano: ${carros.ano} }`

    limparInputs();
});

// função para limpar os campos, após o usário inserir os dados
function limparInputs() {
    document.getElementById("marca").value = '';
    document.getElementById("modelo").value = '';
    document.getElementById("ano").value = ''
}






