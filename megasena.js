import readline from 'readline';

// Configuração da interface do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gerarNumerosSorteados() {
    const numeros = new Set();
    while (numeros.size < 6) {
        numeros.add(Math.floor(Math.random() * 60) + 1);
    }
    return Array.from(numeros);
}

function calcularAcertos(aposta, sorteio) {
    return aposta.filter(numero => sorteio.includes(numero)).length;
}

function calcularPremio(acertos, multiplicador) {
    const total = 6;
    const porcentagem = (acertos / total) * 100;

    let premio = 0;
    if (porcentagem === 100) {
        premio = 10000 * multiplicador;
        console.log(`Parabéns! Você acertou todos os números e ganhou R$ ${premio}!`);
    } else if (porcentagem >= 50) {
        premio = 500 * multiplicador;
        console.log(`Você acertou ${porcentagem}% dos números e ganhou R$ ${premio}!`);
    } else {
        console.log("Você acertou menos de 50%. Infelizmente, não há prêmio desta vez.");
    }

    return premio;
}

function iniciarJogo() {
    console.log("Bem-vindo ao jogo tipo Mega Sena!");

    rl.question("\nDigite 6 números separados por espaço (entre 1 e 60): ", (input) => {
        const aposta = input.split(' ').map(Number);

        if (aposta.length !== 6 || aposta.some(num => num < 1 || num > 60)) {
            console.log("Entrada inválida! Você deve escolher 6 números entre 1 e 60.");
            rl.close();
            return;
        }

        rl.question("\nEscolha um multiplicador de prêmio (1x, 2x, 3x): ", (multiplicador) => {
            multiplicador = parseInt(multiplicador);
            if (![1, 2, 3].includes(multiplicador)) {
                console.log("Multiplicador inválido. Usando 1x.");
                multiplicador = 1;
            }

            const numerosSorteados = gerarNumerosSorteados();
            const acertos = calcularAcertos(aposta, numerosSorteados);

            console.log(`\nNúmeros sorteados: ${numerosSorteados.join(', ')}`);
            console.log(`Sua aposta: ${aposta.join(', ')}`);
            console.log(`Você acertou ${acertos} número(s).`);

            const premio = calcularPremio(acertos, multiplicador);
            console.log(`Você ganhou R$ ${premio}!`);

            rl.close();
        });
    });
}

// Inicia o jogo
iniciarJogo();
