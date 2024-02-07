function pertenceFibonacci(numero) {
    let anterior = 0;
    let atual = 1;

    while (atual < numero) {
        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }

    return atual === numero;
}

const numero = 10;
if (pertenceFibonacci(numero)) {
    console.log(numero + " pertence à sequência de Fibonacci.");
} else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
}
