import * as readlineSync from 'readline-sync';

//Função de obtenção de valor 
function obterNumero(): number {
    while (true) {
        // Exeções de caso o usúario lance algo inesperado, como letras ou sinais 
        try {
            const numeroString: string = readlineSync.question('Digite o valor recebido em R$: ');
            const numero: number = parseFloat(numeroString);

            if (!isNaN(numero) && numero > 0) {
                return numero;
            }

            console.log('Por favor, digite um valor válido');
        } catch (error) {
            console.log('Erro ao converter para número.');
        }
    }
}

//função de calculo de imposto de renda
function salarioDescontaIR(numero: number): number {

    //classificação de desconto 
    
    if (numero > 0 && numero < 2259.21) {
        return numero 
        

    } else if (numero > 2259.21 && numero < 2826.86){
        let desconto = 7.5 * numero / 100
        return numero - desconto + 169.44
        

    } else if (numero > 2826.86 && numero < 3751.05){
        let desconto = 15 * numero / 100
        return numero - desconto + 381.44

    } else if (numero > 3751.05 && numero < 4664.68){
        let desconto = 22.5 * numero / 100
        return numero - desconto + 662.77
        

    } else if (numero > 4664.68){
        let desconto = 27.5 * numero / 100
        return numero - desconto + 896
        
    }
    
    //saída da função
    return 0
}


//Aqui seria um Main
function main(): void {
    const numero: number = obterNumero();
    const salarioDescontadoIR: number = salarioDescontaIR(numero);
    const salarioTotal: number = parseFloat(salarioDescontadoIR.toFixed(2));
    const desconto: number = numero - salarioDescontadoIR;
    const descontoFloat: number =  parseFloat(desconto.toFixed(2));

    if (numero < 2259.11) {
        console.log("Não houve desconto!");
    } else {
        console.log(`Seu salário de ${numero} R$, receberá um desconto no valor de ${descontoFloat} R$, ou seja, seu salário líquido será: ${salarioTotal} R$.`);
    }
}

// Chamando a função main para iniciar o programa
main();
    