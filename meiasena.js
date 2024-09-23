// Importando readline para interação no terminal
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para gerar 5 números aleatórios entre 1 e 30
function gerarNumerosAleatorios() {
    let numeros = [];
    while (numeros.length < 5) {
        let numero = Math.floor(Math.random() * 30) + 1;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }
    return numeros.sort((a, b) => a - b);
}

// Função para verificar a quantidade de acertos
function verificarAcertos(escolhas, sorteados) {
    return escolhas.filter(num => sorteados.includes(num)).length;
}

// Função para determinar o prêmio baseado nos acertos
function calcularPremio(acertos) {
    switch (acertos) {
        case 5:
            return 'Parabéns! Você acertou 5 números e ganhou o prêmio máximo!';
        case 4:
            return 'Muito bom! Você acertou 4 números e ganhou um prêmio grande!';
        case 3:
            return 'Bom trabalho! Você acertou 3 números e ganhou um prêmio mediano.';
        case 2:
            return 'Você acertou 2 números e ganhou um pequeno prêmio.';
        default:
            return 'Infelizmente, você não ganhou desta vez. Tente novamente!';
    }
}

// Função para iniciar o jogo
function iniciarJogo() {
    rl.question('Escolha 5 números entre 1 e 30 (separados por espaço): ', input => {
        const escolhas = input.split(' ').map(Number);
        
        if (escolhas.length !== 5 || escolhas.some(num => num < 1 || num > 30)) {
            console.log('Por favor, insira exatamente 5 números válidos entre 1 e 30.');
            iniciarJogo();
            return;
        }

        const numerosSorteados = gerarNumerosAleatorios();
        const acertos = verificarAcertos(escolhas, numerosSorteados);

        console.log(`Seus números: ${escolhas.sort((a, b) => a - b)}`);
        console.log(`Números sorteados: ${numerosSorteados}`);
        console.log(`Você acertou ${acertos} número(s).`);
        console.log(calcularPremio(acertos));

        rl.question('Deseja jogar novamente? (sim/não): ', resposta => {
            if (resposta.toLowerCase() === 'sim') {
                iniciarJogo();
            } else {
                console.log('Obrigado por jogar! Até a próxima.');
                rl.close();
            }
        });
    });
}

// Iniciar o jogo pela primeira vez
iniciarJogo();
