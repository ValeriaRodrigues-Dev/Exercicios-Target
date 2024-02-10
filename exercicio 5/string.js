
//variavel vazia que vai receber a String escrita ao contrario
let myname = "";

//funcao para a string ser passada de tras para a frente
function inverternome(nome){

   // estrutura de repeticao que percorre toda a variavel e a reescreve salvando 
   // sua nova posicao e inserindo na varialvel preparada anteriormente myname para receber a string manipulada
    for(let i= nome.length-1; i >= 0; i--){
       myname += nome[i];
    }
  
   return myname;
}

//variavel com a string que vai ser manipulada pela funcao inverternome()
let meunome= "Valéria";

//chamada da funcao inverternome() com o parametro a ser manipulado
console.log(inverternome(meunome));




