let contador = 0;
const limite = 10;
let numero = prompt("Digite um número de 1 a 10 e veja a mágica acontecer!");
let resultado = numero * contador;

do{
    resultado = numero * contador;
    alert(numero+"x"+contador+ "="+resultado);
    contador++
}  while (contador<=limite);



