
//funcao gera a sequencia com base nas primeiras variaveis comparando o numero de entrada e retornando 
//um valor logico se aquele numero faz parte ou nao da sequencia e fibonacci
function sequenciafibonacci(number){
   let num1= 0
   let num2= 1
   let soma

   //estrutura de repeticao que faz a comparacao enquanto nao obtem um retorno logico
  while (num2 < number){
    soma = num2
        num2= num1 + num2;
        num1 = soma
    }
    //compara o numero de entrada com o da sequencia
    return num2 === number
}

//retorna para o usuario se o numero faz ou nao parte da sequencia
console.log("O número indicado parte da Sequência Fibonacci? "+ sequenciafibonacci(55))
console.log("O número indicado parte da Sequência Fibonacci? "+ sequenciafibonacci(86))



   
 




sequenciafibonacci();