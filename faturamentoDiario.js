function calculaFaturamento(vetor){
    //Elimina dias sem faturamento 
    const vetorFiltrado = vetor.filter(valor => valor>0);
    //Pega o max e min valor do ano
    const maiorValor =  Math.max(...vetorFiltrado);
    const menorValor = Math.min(...vetorFiltrado);

    //calcula a média anual
    const mediaAnual = vetorFiltrado.reduce((total, valor)=> total + valor, 0)/vetorFiltrado.length;
    //acha dias acima da média
    const diasAcimaMedia = vetorFiltrado.filter((valor) => valor > mediaAnual).length;
    
    return console.log({maiorValor: maiorValor, menorValor: menorValor, diasAcimaMedia: diasAcimaMedia});
}

//vetor para teste do algoritmo
const vetorFaturamento = [0, 1500, 0, 2000, 3000, 0, 0, 2500, 1000, 0];

calculaFaturamento(vetorFaturamento);

// descomentar linha a seguir para exportar a função, não esquecer de comentar a execução da função
// module.exports = { calculaFaturamento } 