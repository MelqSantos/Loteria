function conferir() {

    // Array do sorteio
    var array1 = [1, 3, 5, 8, 10, 11, 13, 14, 15, 16, 17, 18, 21, 22, 25];
    var array2 = [];
    var acertos = 0;

    // Preenche o array 2 de acordo com os campos no form
    for (x = 1; x <= array1.length; x++) {
        var resultado = Number(document.getElementById('txt_' + x).value);
        array2.push(resultado);

        if (array1.indexOf(resultado) != -1) {
            acertos = acertos + 1;
        }
    }
    var box = document.getElementById('resultado')
    box.style.display = 'flex';
    document.getElementById('resultado').style.backgroundColor = '#198754';

    if (acertos == 11) {
        box.innerText = `${acertos} acertos, ganhei R$4,00!`;
    } else if (acertos == 12) {
        box.innerText = `${acertos} acertos, ganhei R$8,00!`;
    } else if (acertos == 13) {
        box.innerText = `${acertos} acertos, ganhei R$20,00!`;
    } else if (acertos == 14) {
        box.innerText = `${acertos} acertos, ganhei + de R$1000,00!`;
    } else if (acertos == 15) {
        box.innerText = `${acertos} acertos, estou milionário!!!`;
    } else {
        box.innerText = `${acertos} não ganhei nada :/`;
        box.style.backgroundColor = '#dc3545'
    }

}

function limpar() {
    for (x = 1; x <= 15; x++) {
        document.getElementById('txt_' + x).value = "";
    }
    array1 = [];
    array2 = [];
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('txt_1').focus();
}

function sorteio() {
    debugger
    var array1 = [1, 3, 5, 8, 10, 11, 13, 14, 15, 16, 17, 18, 21, 22, 25];
    var boxSorteio = document.getElementById('sorteio');


    for (let x = 0; x < array1.length; x++) {

        var bola = document.createElement('span');
        bola.innerHTML = array1[x];
        boxSorteio.appendChild(bola)
    }

}