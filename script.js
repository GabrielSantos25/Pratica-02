function fibonacciSequence(n) {
    // Array para armazenar a sequência de Fibonacci
    var fibSequence = [0, 1];
    
    // Gera a sequência de Fibonacci até que o último número seja maior ou igual a n
    while (fibSequence[fibSequence.length - 1] < n) {
        // Adiciona o próximo número à sequência, somando os dois últimos números
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    }
    return fibSequence;
}

function verificarFibonacci() {
    // Armazena o valor digitado pelo usuário no campo de entrada
    var input = document.getElementById('numero').value;
    
    // Converte o valor de entrada em um número inteiro para ser verificado
    var num = parseInt(input);
    
    // Referência ao elemento de parágrafo onde o resultado será exibido
    var resultado = document.getElementById('resultado');
    
    if (isNaN(num)) {
        // Verifica se o valor digitado não é um número válido
        resultado.textContent = "Por favor, digite um número válido.";
    } else {
        // Gera a sequência de Fibonacci até o número fornecido e verifica se o número está presente
        var fibSequence = fibonacciSequence(num);
        if (fibSequence.includes(num)) {
            resultado.textContent = "O número " + num + " pertence à sequência de Fibonacci.";
        } else {
            resultado.textContent = "O número " + num + " não pertence à sequência de Fibonacci.";
        }
    }
}
