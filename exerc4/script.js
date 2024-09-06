const faturamentoPorEstado = [
    ['SP', 67836.43],
    ['RJ', 36678.66],
    ['MG', 29229.88],
    ['ES', 27165.48],
    ['OUT', 19849.53]
];

function calcularTotalFaturamento() {
    let totalFaturamento = 0;
    for (let i = 0; i < faturamentoPorEstado.length; i++) {
        totalFaturamento += faturamentoPorEstado[i][1];
    }
    return totalFaturamento;
}

function calcularPercentual() {
    console.log("Percentual de representação de cada estado:");
    for (let i = 0; i < faturamentoPorEstado.length; i++) {
        let estado = faturamentoPorEstado[i][0];
        let valor = faturamentoPorEstado[i][1];
        let percentual = (valor / totalFaturamento) * 100;
        let percentualFormatado = Math.round(percentual * 100) / 100;
        console.log(estado + ": " + percentualFormatado + "%");
    }
}

const totalFaturamento = calcularTotalFaturamento();
calcularPercentual();
