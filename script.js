function avisoCotacao(){
    var avisoCotacao = document.getElementById("avisoCotacao");
    avisoCotacao.innerHTML = "**Valores referentes a cotação do dia 08/09/2022 10:19PM";
}
function converterEmDolar() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);

    var valorEmDolar = valorEmReais * 5; //5.22

    var valorConvertidoEmDolar = document.getElementById("valorConvertido");
    valorConvertidoEmDolar.innerHTML = "R$" + valorEmReais + " reais é igual a $" + valorEmDolar + " dolares";

    avisoCotacao();
}
function converterEmEuro() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);

    var valorEmEuro = valorEmReais * 5; //5.24

    var valorConvertidoEmEuro = document.getElementById("valorConvertido");
    valorConvertidoEmEuro.innerHTML = "R$" + valorEmReais + " reais é igual a €" + valorEmEuro + " euros";

    avisoCotacao();
}
function converterEmLibra() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);

    var valorEmLibra = valorEmReais * 6; //6.02

    var valorConvertidoEmLibra = document.getElementById("valorConvertido");
    valorConvertidoEmLibra.innerHTML = "R$" + valorEmReais + " reais é igual a £" + valorEmLibra + " libras esterlinas";

    avisoCotacao();
}
function converterEmBitcoin() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);

    var valorEmBitcoin = valorEmReais * 0.99; //0.0000099

    var valorConvertidoEmBitcoin = document.getElementById("valorConvertido");
    valorConvertidoEmBitcoin.innerHTML = "R$" + valorEmReais + " reais é igual a ₿" + valorEmBitcoin + " bitcoins";

    avisoCotacao();
}