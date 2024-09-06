function sequenciaFibonacci (numero){
    let a = 0, b = 1;
    if (numero === 0 || numero === 1){
        return true;
    }

    for (let i = 2; b <= numero; i++){
        let variavel = b;
        b = a + b;
        a = variavel;

        if (b === numero){
            return true;
        }
    }

    return false;
}

document.getElementById('verificar').addEventListener('click', function() {
    const numeroInformado = parseInt(prompt("Digite um número: "));
    const resultadoElemento = document.getElementById('resultado');

    if (sequenciaFibonacci(numeroInformado)) {
        resultadoElemento.textContent = `O número ${numeroInformado} pertence à sequência de Fibonacci.`;
    } else {
        resultadoElemento.textContent = `O número ${numeroInformado} NÃO pertence à sequência de Fibonacci.`;
    }
});
