const fs = require('fs');

// Função para calcular faturamento
function calcularFaturamento(faturamento) {
    const valores = faturamento.map(dia => dia.valor).filter(valor => valor > 0);
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const somaValores = valores.reduce((soma, valor) => soma + valor, 0);
    const mediaMensal = somaValores / valores.length;
    const diasAcimaDaMedia = faturamento.filter(dia => dia.valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}

// Lê o arquivo JSON
fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo JSON:', err);
        return;
    }
    const faturamento = JSON.parse(data);
    const resultados = calcularFaturamento(faturamento);
    console.log(`Menor valor de faturamento: ${resultados.menorValor}`);
    console.log(`Maior valor de faturamento: ${resultados.maiorValor}`);
    console.log(`Número de dias com faturamento acima da média mensal: ${resultados.diasAcimaDaMedia}`);
});
