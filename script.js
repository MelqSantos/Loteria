// Função para mostrar os números sorteados no topo
$(document).ready(function() {

    var concurso = $("#concurso");
    var boxSorteio = document.querySelector("div .grid-container");


    // Números sorteados na lotofácil, alterar aqui!!
    sorteio_principal = [1, 2, 4, 5, 6, 10, 11, 12, 13, 14, 18, 20, 21, 23, 24];

    // Monta as esferas sorteadas no "menu".
    for (var x = 0; x < sorteio_principal.length; x++) {
        // esferas "menu"
        var num = document.createElement("span");
        concurso.append(num);
        num.innerHTML = sorteio_principal[x];

        // Monta as esferas abaixo dos campos
        var bola = document.createElement('div');
        boxSorteio.appendChild(bola);
        bola.className = "grid-item";
        bola.id = "grid-item_" + x;
        bola.innerHTML = "X";
    }

});

// Função para conferir os números digitados com o array do sorteio
function conferir() {

    var array2 = [];
    var acertos = 0;

    // Chama as funções de validação
    let cVazios = Campos_vazios();
    let cRepetidos = Numeros_Repetidos();

    if (cVazios.length > 0 && cVazios.length <= 15) {
        alert("Atenção! Preencha todos os campos!")
    } else if (cRepetidos.length > 0) {
        alert("Atenção! Números repetidos")
    } else {
        // Preenche o array 2 de acordo com os campos no form
        for (x = 0; x < sorteio_principal.length; x++) {

            var resultado = Number(document.getElementById('txt_' + x).value);
            array2.push(resultado);
            var push = document.getElementById("grid-item_" + x);
            push.innerHTML = array2[x];

            if (sorteio_principal.indexOf(resultado) != -1) {
                acertos = acertos + 1;
            } else {
                push.classList.add("errou");
            }
        }

        var box = document.getElementById('sorteio')
        var num_acertos = [
            document.getElementById('tb_15'),
            document.getElementById('tb_14'),
            document.getElementById('tb_13'),
            document.getElementById('tb_12'),
            document.getElementById('tb_11')
        ]


        if (acertos == 11) {
            //alert(`${acertos} acertos, ganhei R$4,00!`);
            num_acertos[4].style.background = "green";
        } else if (acertos == 12) {
            //alert(`${acertos} acertos, ganhei R$8,00!`);
            num_acertos[3].style.background = "green";
        } else if (acertos == 13) {
            //alert(`${acertos} acertos, ganhei R$20,00!`);
            num_acertos[2].style.background = "green";
        } else if (acertos == 14) {
            //alert(`${acertos} acertos, ganhei + de R$1000,00!`);
            num_acertos[1].style.background = "green";
        } else if (acertos == 15) {
            //alert(`${acertos} acertos, estou milionário!!!`);
            num_acertos[0].style.background = "green";
        } else {
            alert(`${acertos} não ganhei nada :/`);
            box.style.backgroundColor = '#dc3545'
        }


    }
}

// Limpa os campos input e as esferas ao lado da tabela
function limpar() {

    for (x = 0; x < 15; x++) {
        var campo = document.getElementById('txt_' + x);
        campo.value = ""
        campo.classList.remove("borda")
        var bola = document.getElementById("grid-item_" + x);
        bola.classList.remove("errou");
        bola.innerHTML = "X";

        if (x >= 11 && x <= 15) {
            document.getElementById('tb_' + x).style.backgroundColor = "initial";
        }
    }
    array2 = [];
    document.getElementById('txt_0').focus();

}

// Função para criar as esferas de sorteio 
function sorteio() {

    var boxSorteio = document.querySelector("div .grid-container");

    for (let x = 0; x < sorteio_principal.length; x++) {

        var bola = document.createElement('div');
        boxSorteio.appendChild(bola);
        bola.className = "grid-item";
        bola.id = "grid-item_" + x;
        bola.innerHTML = "X";

    }

}


// Função para validar os campos vazios
function Campos_vazios() {
    vazio = []

    for (let x = 0; x < sorteio_principal.length; x++) {
        resultado = document.getElementById('txt_' + x);

        if (resultado.value == null || resultado.value == undefined || resultado.value == "") {
            vazio.push(resultado);
        }
    }
    return vazio
}

function Numeros_Repetidos() {
    let vazio = [];
    let repetido = 0;

    for (let x = 0; x < sorteio_principal.length; x++) {
        resultado = Number(document.getElementById('txt_' + x).value);
        vazio.push(resultado);
    }

    return repetido
}