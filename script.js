async function converterEmDolar() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);
    const apiDolar = 'https://economia.awesomeapi.com.br/json/last/USD-BRL'
    const res = await fetch(apiDolar)
    const data = await res.json();

    var dataCotacao = new Date().toLocaleString("pt-br");
    var cotacaoDolar = data.USDBRL.bid

    if (!valorEmReais) {
        Swal.fire({ icon: 'error', title: 'Oops...', text: 'Você esqueceu de colocar o valor em Reais!' });
    } else {
        var valorEmDolar = valorEmReais / cotacaoDolar;
        var valorConvertidoEmDolar = document.getElementById("valorConvertido");
        valorConvertidoEmDolar.innerHTML = "R$" + valorEmReais + " reais é igual a $" + valorEmDolar.toFixed(2) + " dolares";
        var avisoCotacao = document.getElementById("avisoCotacao");
        avisoCotacao.innerHTML = "**Valores referentes a cotação de " + dataCotacao;
    }
}
async function converterEmEuro() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);

    const apiEuro = 'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL'
    const res = await fetch(apiEuro)
    const data = await res.json();

    var dataCotacao = new Date().toLocaleString("pt-br");
    var cotacaoEuro = data.EURBRL.bid

    if (!valorEmReais) {
        Swal.fire({ icon: 'error', title: 'Oops...', text: 'Você esqueceu de colocar o valor em Reais!' });
    } else {
        var valorEmEuro = valorEmReais / cotacaoEuro;
        var valorConvertidoEmEuro = document.getElementById("valorConvertido");
        valorConvertidoEmEuro.innerHTML = "R$" + valorEmReais + " reais é igual a €" + valorEmEuro.toFixed(2) + " euros";
        var avisoCotacao = document.getElementById("avisoCotacao");
        avisoCotacao.innerHTML = "**Valores referentes a cotação de " + dataCotacao;
    }
}
async function converterEmLibra() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);

    const apiLibra = 'https://economia.awesomeapi.com.br/json/last/GBP-BRL'
    const res = await fetch(apiLibra)
    const data = await res.json();

    var dataCotacao = new Date().toLocaleString("pt-br");
    var cotacaoLibra = data.GBPBRL.bid

    if (!valorEmReais) {
        Swal.fire({ icon: 'error', title: 'Oops...', text: 'Você esqueceu de colocar o valor em Reais!' });
    } else {
        var valorEmLibra = valorEmReais / cotacaoLibra;
        var valorConvertidoEmLibra = document.getElementById("valorConvertido");
        valorConvertidoEmLibra.innerHTML = "R$" + valorEmReais + " reais é igual a £" + valorEmLibra.toFixed(2) + " libras esterlinas";
        var avisoCotacao = document.getElementById("avisoCotacao");
        avisoCotacao.innerHTML = "**Valores referentes a cotação de " + dataCotacao;
    }
}
async function converterEmBitcoin() {
    var valorEmReais = document.getElementById("valor").value;
    var valorEmReais = parseFloat(valorEmReais);

    const apiBitcoin = 'https://economia.awesomeapi.com.br/json/last/BTC-BRL'
    const res = await fetch(apiBitcoin)
    const data = await res.json();

    var dataCotacao = new Date().toLocaleString("pt-br");
    var cotacaoBitcoin = data.BTCBRL.bid

    if (!valorEmReais) {
        Swal.fire({ icon: 'error', title: 'Oops...', text: 'Você esqueceu de colocar o valor em Reais!' });
    } else {
        var valorEmBitcoin = valorEmReais / cotacaoBitcoin;
        var valorConvertidoEmBitcoin = document.getElementById("valorConvertido");
        valorConvertidoEmBitcoin.innerHTML = "R$" + valorEmReais + " reais é igual a ₿" + valorEmBitcoin.toFixed(7) + " bitcoins";
        var avisoCotacao = document.getElementById("avisoCotacao");
        avisoCotacao.innerHTML = "**Valores referentes a cotação de " + dataCotacao;
    }
}