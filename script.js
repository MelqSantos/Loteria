function conferir() {

    // Array do sorteio
    var array1 = [1, 2, 4, 5, 6, 10, 11, 12, 13, 14, 18, 20, 21, 23, 24];
    var array2 = [];
    var acertos = 0;

    // Preenche o array 2 de acordo com os campos no form
    for (x = 0; x < array1.length; x++) {
        var resultado = Number(document.getElementById('txt_' + x).value);
        array2.push(resultado);
        var push = document.getElementById("grid-item_" + x);
        push.innerHTML = array2[x];

        if (array1.indexOf(resultado) != -1) {
            acertos = acertos + 1;
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

function limpar() {
    document.getElementById("txt_0").focus();

    for (x = 1; x <= 15; x++) {
        document.getElementById('txt_' + x).value = "";

        if (x >= 11 && x <= 15) {
            document.getElementById('tb_' + x).style.backgroundColor = "#F2F3F4";
        }
    }
    array1 = [];
    array2 = [];
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('txt_1').focus();
}

function sorteio() {

    var array1 = [1, 2, 4, 5, 6, 10, 11, 12, 13, 14, 18, 20, 21, 23, 24];
    var boxSorteio = document.querySelector("div .grid-container");


    for (let x = 0; x < array1.length; x++) {

        var bola = document.createElement('div');
        boxSorteio.appendChild(bola);
        bola.className = "grid-item";
        bola.id = "grid-item_" + x;
        bola.innerHTML = "X";

    }

}