/*--------- Função para montar os números sorteados ---------*/
$(document).ready(function() {

    var concurso = $("#concurso");
    var boxSorteio = document.querySelector("div .grid-container");

    /*----- Números sorteados na lotofácil, alterar aqui!! --------*/
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

/*--------- Função para conferir os números digitados com o array do sorteio --------*/
function conferir() {

    var array2 = [];
    var acertos = 0;

    // Chama as funções de validação
    let cVazios = Campos_vazios();
    let cRepetidos = Numeros_Repetidos();

    if (cVazios.length > 0 && cVazios.length <= 15) {
        toast();
        $('.toast-body').html('Preencha os campos vazios para prosseguir! ');
        $('.toast-header').css('background-color', '#DCE35B');
    } else if (cRepetidos > 0) {
        toast();
        $('.toast-body').html('Números repetidos! ');
        $('.toast-header').css('background-color', '#DCE35B');
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
        let color = $('.toast-header').css('background-color', '#45B649');
        var num_acertos = [
            document.getElementById('tb_15'),
            document.getElementById('tb_14'),
            document.getElementById('tb_13'),
            document.getElementById('tb_12'),
            document.getElementById('tb_11')
        ]


        if (acertos == 11) {
            toast();
            $('.toast-body').html(`${acertos} acertos, Ganhou R$4,00!`);
            num_acertos[4].style.background = "green";
            color

        } else if (acertos == 12) {
            toast();
            $('.toast-body').html(`${acertos} acertos, ganhei R$8,00!`);
            num_acertos[3].style.background = "green";
            color

        } else if (acertos == 13) {
            toast();
            $('.toast-body').html(`${acertos} acertos, ganhei R$20,00!`);
            num_acertos[2].style.background = "green";
            color

        } else if (acertos == 14) {
            toast();
            $('.toast-body').html(`${acertos} acertos, ganhei + de R$1000,00!`);
            num_acertos[1].style.background = "green";
            color

        } else if (acertos == 15) {
            toast();
            $('.toast-body').html(`${acertos} acertos, estou milionário!!!`);
            num_acertos[0].style.background = "green";
            color

        } else {
            toast();
            $('.toast-body').html(`${acertos} acertos | Boa sorte na próxima vez!`);
            $('.toast-header').css('background-color', '#DCE35B');
        }


    }
}

/*-------- Limpa os campos input e as esferas ao lado da tabela -------*/
function limpar() {
    let retorno = Campos_vazios();
    vazios = retorno.length;

    if (vazios < 15) {
        vazios = (15 - vazios);
    }

    // Limpa campos
    for (x = 0; x < vazios; x++) {
        var campo = document.getElementById('txt_' + x);
        campo.value = ""

        var bola = document.getElementById("grid-item_" + x);
        bola.classList.remove("errou");
        bola.innerHTML = "X";
    }

    // Limpa tabela
    for (let j = 11; j <= 15; j++) {
        document.getElementById('tb_' + j).style.backgroundColor = "initial";
    }

    array2 = [];
    document.getElementById('txt_0').focus();

}


/*------- Função para validar os campos ss --------*/

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

/*------- Validação para validar números repetidos -------*/

function Numeros_Repetidos() {
    let vazio = [];
    let repetido = 0;

    // Laço para adicionar valor dos campos em um array vazio
    for (let x = 0; x < sorteio_principal.length; x++) {
        resultado = Number(document.getElementById('txt_' + x).value);
        vazio.push(resultado);
    }

    // Laço para verificar se há números repetidos no array acima
    for (let l = 0; l < vazio.length; l++) {
        for (let j = l + 1; j < vazio.length; j++) {

            if (vazio[l] == vazio[j]) {
                repetido += 1
            }
        }
    }
    return repetido
}

function toast() {
    $('.toast').toast('show');
}