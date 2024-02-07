const fs = require('fs');


fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    try {
        
        const faturamentoDiario = JSON.parse(data);

       
        function calcularMenorFaturamento(faturamento) {
            let menor = Infinity;
            for (let item of faturamento) {
                if (item.valor < menor && item.valor !== 0) {
                    menor = item.valor;
                }
            }
            return menor;
        }

        function calcularMaiorFaturamento(faturamento) {
            let maior = -Infinity; 
            for (let item of faturamento) {
                if (item.valor > maior) {
                    maior = item.valor;
                }
            }
            return maior;
        }

 
        function calcularMediaMensal(faturamento) {
            let soma = 0;
            let count = 0;
            for (let item of faturamento) {
                if (item.valor !== 0) {
                    soma += item.valor;
                    count++;
                }
            }
            return count === 0 ? 0 : soma / count; // Evita divisão por zero se não houver valores
        }


        function contarDiasAcimaMedia(faturamento, media) {
            let count = 0;
            for (let item of faturamento) {
                if (item.valor > media) {
                    count++;
                }
            }
            return count;
        }


        if (faturamentoDiario.length === 0) {
            console.log("Não há dados de faturamento.");
        } else {
      
            const menorFaturamento = calcularMenorFaturamento(faturamentoDiario);
            const maiorFaturamento = calcularMaiorFaturamento(faturamentoDiario);
            const mediaMensal = calcularMediaMensal(faturamentoDiario);
            const diasAcimaMedia = contarDiasAcimaMedia(faturamentoDiario, mediaMensal);

 
            console.log("Menor valor de faturamento diário:", menorFaturamento);
            console.log("Maior valor de faturamento diário:", maiorFaturamento);
            console.log("Número de dias com faturamento acima da média mensal:", diasAcimaMedia);
        }
    } catch (error) {
        console.error('Erro ao analisar o JSON:', error);
    }
});
