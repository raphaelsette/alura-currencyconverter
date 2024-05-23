async function cotacaoAtual(){
    const apiCotacao = 'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL'
    const resposta = await fetch(apiCotacao)
    const dados = await resposta.json();

    dolarAtual = dados.USDBRL.bid
    euroAtual = dados.EURBRL.bid
    libraAtual = dados.GBPBRL.bid
    bitcoinAtual = dados.BTCBRL.bid

    dataAtual = new Date().toLocaleString("pt-br");
}

function avisoValorVazio() {
    Swal.fire({ icon: 'error', title: 'Oops...', text: 'Você esqueceu de colocar o valor em Reais!' });
}

function converterEmDolar() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);

    if (!valorEmReais) {
        avisoValorVazio()
    } else {
        var valorEmDolar = valorEmReais / dolarAtual;
        var valorConvertidoEmDolar = document.getElementById("valorConvertido");
        valorConvertidoEmDolar.innerHTML = "R$" + valorEmReais + " reais é igual a $" + valorEmDolar.toFixed(2) + " dolares";
        var avisoCotacao = document.getElementById("avisoCotacao");
        avisoCotacao.innerHTML = "**Valores referentes a cotação de " + dataAtual;
    }
}

function converterEmEuro() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);

    if (!valorEmReais) {
        avisoValorVazio()
    } else {
        var valorEmEuro = valorEmReais / euroAtual;
        var valorConvertidoEmEuro = document.getElementById("valorConvertido");
        valorConvertidoEmEuro.innerHTML = "R$" + valorEmReais + " reais é igual a €" + valorEmEuro.toFixed(2) + " euros";
        var avisoCotacao = document.getElementById("avisoCotacao");
        avisoCotacao.innerHTML = "**Valores referentes a cotação de " + dataAtual;
    }
}

function converterEmLibra() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);

    if (!valorEmReais) {
        avisoValorVazio()
    } else {
        var valorEmLibra = valorEmReais / libraAtual;
        var valorConvertidoEmLibra = document.getElementById("valorConvertido");
        valorConvertidoEmLibra.innerHTML = "R$" + valorEmReais + " reais é igual a £" + valorEmLibra.toFixed(2) + " libras esterlinas";
        var avisoCotacao = document.getElementById("avisoCotacao");
        avisoCotacao.innerHTML = "**Valores referentes a cotação de " + dataAtual;
    }
}

function converterEmBitcoin() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);

    if (!valorEmReais) {
        avisoValorVazio()
    } else {
        var valorEmBitcoin = valorEmReais / bitcoinAtual;
        var valorConvertidoEmBitcoin = document.getElementById("valorConvertido");
        valorConvertidoEmBitcoin.innerHTML = "R$" + valorEmReais + " reais é igual a ₿" + valorEmBitcoin.toFixed(7) + " bitcoins";
        var avisoCotacao = document.getElementById("avisoCotacao");
        avisoCotacao.innerHTML = "**Valores referentes a cotação de " + dataAtual;
    }
}
cotacaoAtual()