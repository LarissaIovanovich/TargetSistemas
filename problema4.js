
const faturamentoPorEstado = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};


function calcularTotalMensal(faturamentoPorEstado) {
    let total = 0;
    for (let estado in faturamentoPorEstado) {
        total += faturamentoPorEstado[estado];
    }
    return total;
}


const totalMensal = calcularTotalMensal(faturamentoPorEstado);


function calcularPercentualPorEstado(faturamentoPorEstado, totalMensal) {
    const percentuais = {};
    for (let estado in faturamentoPorEstado) {
        const percentual = (faturamentoPorEstado[estado] / totalMensal) * 100;
        percentuais[estado] = percentual.toFixed(2);
    }
    return percentuais;
}


const percentuaisPorEstado = calcularPercentualPorEstado(faturamentoPorEstado, totalMensal);


console.log('Percentual de representação por estado:');
for (let estado in percentuaisPorEstado) {
    console.log(`${estado}: ${percentuaisPorEstado[estado]}%`);
}