// Some todos os numeros (reduce)
//retorne um array com os pares (filter)
//retorne um array com o dobro dos valores(map)

const numeros =  [5,50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    
    return acumulador;
}, 0); 
    console.log(total);


// Some todos os numeros (reduce)
//retorne um array com os pares (filter)
//retorne um array com o dobro dos valores(map)
//push() --- array vazio

const numeros =  [5,50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor, indice, array){
  
    if (valor % 2===0) acumulador.push(valor);
    return acumulador;
},[]); 
    console.log(total);

==================================================================
const numeros =  [5,50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor){
    if (valor % 2 === 0 ){
        acumulador += valor;
    }
    return acumulador;
}, ); 
    console.log(total);
==================================================================

// retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maila', idade: 23},
    {nome: 'Edu', idade: 55},
    {nome: 'Leticia', idade: 10},
    {nome: 'Rose', idade: 62},
    {nome: 'Wallace', idade: 63},

];
const maisVelha = pessoas.reduce(function (acumulador, valor){
    if(acumulador.idade > valor.idade)return acumulador;
    return valor;
});
    console.log(maisVelha)
