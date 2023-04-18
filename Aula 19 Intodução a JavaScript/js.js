const numero1 = 1;
const numero2 = 5;

const soma = numero1 + numero2;
const multi = numero1 * numero2;
const divisao = numero1 / numero2;

console.log ('O Resultado da soma é:' , soma)
console.log ('Multiplicação:' , multi )
console.log('Divisao:' , divisao)

if (soma <= 20) {
    console.log('A soma é menor do que 20');
} else {
    console.log('A soma é maior do que 20');
}

while (multi >= 20) {
    console.log('Ola')
}

var x = 10;

while(soma <= x) {
    console.log('x e SOMA' , x, soma)
    x = x + 1;
}