fetch('dados.json')
  .then(response => response.json())
  .then(data => {
    const faturamentoSemZero = data.filter(dia => dia.valor !== 0);
    const mediaMensal = faturamentoSemZero.reduce((total, dia) => total + dia.valor, 0) / faturamentoSemZero.length;
    const valoresFaturamento = faturamentoSemZero.map(dia => dia.valor);
    const menorFaturamento = Math.min(...valoresFaturamento);
    
    const maiorFaturamento = Math.max(...valoresFaturamento);
    const diasAcimaDaMedia = faturamentoSemZero.filter(dia => dia.valor > mediaMensal).length;

    console.log("Menor faturamento diário:", menorFaturamento);
    console.log("Maior faturamento diário:", maiorFaturamento);
    console.log("Número de dias com faturamento acima da média mensal:", diasAcimaDaMedia);
  })
  .catch(error => console.error('Erro ao carregar os dados:', error));
