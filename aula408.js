// Dobre os numeros

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22,27]
const numerosEmDobro = numeros.map(function (valor){
    return valor * 2;
});
console.log(numerosEmDobro);

================================================================
// com arrow

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22,27]
const numerosEmDobro = numeros.map( valor => valor * 2);
console.log(numerosEmDobro);

========================================
//Usando delete

const pessoas = [
    {nome:'Luiz', idade:62},
    {nome:'Maria', idade:62},
    {nome:'Eduardo', idade:55},
    {nome:'Leticia', idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:47},
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(function(obj){
    delete obj.nome;
    return obj;
});
/*execução*/
console.log(idades);

====================================================
// mudando o obj

const pessoas = [
    {nome:'Luiz', idade:62},
    {nome:'Maria', idade:62},
    {nome:'Eduardo', idade:55},
    {nome:'Leticia', idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:47},
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(function(obj){
    delete obj.nome;
    return{ idade: obj.idade };
});
/*execução*/
console.log(idades);
=================================================
com arrow function

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj =>({ idade: obj.idade })
);
/*execução*/
console.log(idades);

====================================================
//adicione uma chave id em cada objeto
const pessoas = [
    {nome:'Luiz', idade:62},
    {nome:'Maria', idade:62},
    {nome:'Eduardo', idade:55},
    {nome:'Leticia', idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:47},
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj =>({ idade: obj.idade }));
const comIds = pessoas.map(function(obj, indice){
    obj.id = indice;
    return obj;
});


/*execução*/
console.log(comIds);

========================================================
// exemplo com soma 
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj =>({ idade: obj.idade }));
const comIds = pessoas.map(function(obj, indice){
    obj.id = (indice + 1) * 1000;
    return obj;
});


/*execução*/
console.log(comIds);
