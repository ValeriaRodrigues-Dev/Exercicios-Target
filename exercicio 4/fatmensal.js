
//array com as informacoes das distribuidoras e seus valores 
//individuais faturados 
let distribuidoras = [
    { Estado: "SP", faturado: 67.836 },
    { Estado: "RJ", faturado: 36.678 },
    { Estado: "MG", faturado: 29.229 },
    { Estado: "ES", faturado: 27.165 },
    { Estado: "OUTROS", faturado: 19.849}
];

//funcao que vai fazer a soma dos valores individuais faturados para obter o valor total faturado no mes
function faturamentoMensal() {
    let valorTotal = 0;
    //estrutura de repeticao que vai percorrer o array, selecionar os valores faturados fazer a soma
    //inserir o total na variavel valortotal e retornar o valor com as 4 primeiras casas decimais
    for (let i = 0; i < distribuidoras.length; i++) {
        valorTotal += distribuidoras[i].faturado;
    }
    return valorTotal.toFixed(4);
}

//funcao que faz o calculo percentual
function calcularPercentual(faturado, valorTotal) {
    return (faturado / valorTotal) * 100;
}

//apresenta para o usuario o array com as informacoes das distribuidoras
console.log("========================DISTRIBUIDORAS=======================");
console.log(distribuidoras);

//apresenta cada percentual de faturamento por distribuidora 
//e chamando as funcoes de faturamentomensal() e calcularpersentual() 
distribuidoras.forEach(distribuidora => {
    let percentual = calcularPercentual(distribuidora.faturado, faturamentoMensal());
    console.log("==============================================================");
    console.log(`Percentual de faturamento da distribuidora do Estado: ${distribuidora.Estado} com ${percentual.toFixed(2)}%`);
});
console.log("==============================================================");

//mostra o total faturado no mes 
console.log("TOTAL FATURADO: $" + faturamentoMensal());
