function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi (msg, tempo, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('frase 2', rand(1,3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 3', rand(1,3));
    
}).then(resposta =>{
    console.log(resposta);
})
.catch();

//


function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi (msg, tempo, cb) {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da base', rand(1,3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi('Tratando os dados da base', rand(1,3));
    
}).then(resposta =>{
    console.log('Exibe os dados na tela');
})
.catch();

//

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi (msg, tempo, cb) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');
            setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da base', rand(1,3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi(2222, rand(1,3));
    
}).then(resposta =>{
    console.log('Exibe os dados na tela');
})
.catch(E => {
    console.log('ERRO:', E );
});


//


//Promise.all Promise.race Promise.resolve Promise.reject

const Promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
];

Promise.all(Promises)
.then(function(valor){
    console.log(valor);
})

.catch(function(erro) {
    console.log(erro);
});


//

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
        reject('CAIU NO ERRO ');
        return;
        } 
        
    setTimeout(() => {
        resolve(msg.toUpperCase() + '- Passei na promise' );
        return;
        }, tempo);
    });
}

/*esperaAi('Conexão com o BD', rand(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da base', rand(1,3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi(2222, rand(1,3));
    
}).then(resposta =>{
    console.log('Exibe os dados na tela');
})
.catch(E => {
    console.log('ERRO:', E );
}); */

//Promise.all Promise.race Promise.resolve Promise.reject

const Promises = [
    
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 5000),
    esperaAi('Promise 3', 1000),
    //esperaAi(1000,1000),
    
];

Promise.race(Promises)
.then(function(valor){
    console.log(valor);
})

.catch(function(erro) {
    console.log(erro);
});

//

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => {
        
        
    setTimeout(() => {
        if(typeof msg !== 'string'){
            reject('CAIU NO ERRO ');
            return;
            } 
        resolve(msg.toUpperCase() + '- Passei na promise' );
        return;
        }, tempo);
    });
}

/*esperaAi('Conexão com o BD', rand(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da base', rand(1,3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi(2222, rand(1,3));
    
}).then(resposta =>{
    console.log('Exibe os dados na tela');
})
.catch(E => {
    console.log('ERRO:', E );
}); */

//Promise.all Promise.race Promise.resolve Promise.reject

const Promises = [
    
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2',rand(1, 5)),
    esperaAi('Promise 3', rand (1, 5)),
    esperaAi(1000, rand(1, 5)),
    
];

Promise.race(Promises)
.then(function(valor){
    console.log(valor);
})

.catch(function(erro) {
    console.log(erro);
});

//

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => {
        
        
    setTimeout(() => {
        if(typeof msg !== 'string'){
            reject('CAIU NO ERRO ');
            return;
            } 
        resolve(msg.toUpperCase() + '- Passei na promise' );
        return;
        }, tempo);
    });
}

/*esperaAi('Conexão com o BD', rand(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da base', rand(1,3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi(2222, rand(1,3));
    
}).then(resposta =>{
    console.log('Exibe os dados na tela');
})
.catch(E => {
    console.log('ERRO:', E );
}); */

//Promise.all Promise.race Promise.resolve Promise.reject

function baixarPagina(){
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixarPagina()
.then(dadosPagina =>
    {
        console.log(dadosPagina);  
    })
    
.catch(e => console.log (e))
