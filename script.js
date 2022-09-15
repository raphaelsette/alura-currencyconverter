function avisoCotacao(){
    var avisoCotacao = document.getElementById("avisoCotacao");
    avisoCotacao.innerHTML = "**Valores referentes a cotação do dia 15/09/2022 03:05PM";
}
function converterEmDolar() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);

    if(!valorEmReais) {
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Você esqueceu de colocar o valor em Reais!'});
    } else {
        var valorEmDolar = valorEmReais * 5.24;
        var valorConvertidoEmDolar = document.getElementById("valorConvertido");
        valorConvertidoEmDolar.innerHTML = "R$" + valorEmReais + " reais é igual a $" + valorEmDolar.toFixed(2) + " dolares";
        avisoCotacao();
    }
}
function converterEmEuro() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);

    if(!valorEmReais) {
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Você esqueceu de colocar o valor em Reais!'});
    } else {
        var valorEmEuro = valorEmReais * 5.24;
        var valorConvertidoEmEuro = document.getElementById("valorConvertido");
        valorConvertidoEmEuro.innerHTML = "R$" + valorEmReais + " reais é igual a €" + valorEmEuro.toFixed(2) + " euros";
        avisoCotacao();
    }
}
function converterEmLibra() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);

    if(!valorEmReais) {
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Você esqueceu de colocar o valor em Reais!'});
    } else {
        var valorEmLibra = valorEmReais * 6.01;
        var valorConvertidoEmLibra = document.getElementById("valorConvertido");
        valorConvertidoEmLibra.innerHTML = "R$" + valorEmReais + " reais é igual a £" + valorEmLibra.toFixed(2) + " libras esterlinas";
        avisoCotacao();
    }
}
function converterEmBitcoin() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);

    if(!valorEmReais) {
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Você esqueceu de colocar o valor em Reais!'});
    } else {
        var valorEmBitcoin = valorEmReais * 0.0000097;
        var valorConvertidoEmBitcoin = document.getElementById("valorConvertido");
        valorConvertidoEmBitcoin.innerHTML = "R$" + valorEmReais + " reais é igual a ₿" + valorEmBitcoin.toFixed(7) + " bitcoins";
        avisoCotacao();
    }
}