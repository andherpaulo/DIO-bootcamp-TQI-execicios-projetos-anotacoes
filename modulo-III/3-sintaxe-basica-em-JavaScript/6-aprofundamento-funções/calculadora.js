function calculadora() {
    const OPERACAO = Number(prompt('Escolha uma operação:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));

    if (!OPERACAO || OPERACAO >= 7){
        alert('Erro - Operação inválida!');
        calculadora();
    }else{   
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o primeiro valor:'));
        let resultado;

        if (!n1 || !n2){
            alert('Erro - Valores inválidos!');
            calculadora();
        }else{
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão de ${n1} por ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª potência é igual a ${resultado}`);
                novaOperacao();
            }

            function novaOperacao(){
                let opcao = prompt('Deseja realizar outra operação?\n 1 - Sim\n 2 - Não');

                if(opcao == 1){
                    calculadora();
                }else if(opcao ==2){
                    alert('Até mais!');
                }else{
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }

            /* if (OPERACAO == 1){
                soma();
            } else if (OPERACAO == 2){
                subtracao();
            } else if (OPERACAO == 3){
                multiplicacao();
            } else if (OPERACAO == 4){
                divisaoReal();
            } else if (OPERACAO == 5){
                divisaoInteira();
            } else if (OPERACAO == 6){
                potenciacao();
            } */

            switch(OPERACAO){
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoReal();
                    break;
                case 5:
                    divisaoInteira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
        }
    }
}

calculadora();