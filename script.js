function Converter() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);

    var valorEmDolar = valorEmReais * 5; //5.22
    var valorEmEuro = valorEmReais * 5; //5.24
    var valorEmLibra = valorEmReais * 6; //6.02
    var valorEmBitcoin = valorEmReais * 0.99; //0.0000099


    var valorConvertidoEmDolar = document.getElementById("retornarValorEmDolar");
    valorConvertidoEmDolar.innerHTML = "Dolar: " + valorEmDolar;

    var valorConvertidoEmEuro = document.getElementById("retornarValorEmEuro");
    valorConvertidoEmEuro.innerHTML = "Euro: " + valorEmEuro;

    var valorConvertidoEmLibra = document.getElementById("retornarValorEmLibra");
    valorConvertidoEmLibra.innerHTML = "Libra: " + valorEmLibra;

    var valorConvertidoEmBitcoin = document.getElementById("retornarValorEmBitcoin");
    valorConvertidoEmBitcoin.innerHTML = "Bitcoin: " + valorEmBitcoin;

    var avisoCotacao = document.getElementById("avisoCotacao");
    avisoCotacao.innerHTML = "**Valores referentes a cotação do dia 08/09/2022 10:19PM";
}