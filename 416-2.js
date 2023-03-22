function rand(min=0, max=3) {
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
        resolve(msg.toUpperCase() + ' - Passei na promise' );
        return;
        }, tempo);
    });
}

esperaAi('Fase 1', rand())
   .then(valor =>{
    console.log(valor);
    return esperaAi('Fase 2', rand());
   })

   .then(fase=> {
    console.log(fase);
    return esperaAi('Fase 3', rand())
   })
   
   .then(fase =>{
    console.log(fase);
    return fase
   })
   
   .then(fase=> {
    console.log('Terminamos na fase:', fase);
   })
   .catch(e=> console.log(e));

// =================================================

function rand(min=0, max=3) {
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
        resolve(msg.toUpperCase() + ' - Passei na promise' );
        return;
        }, tempo);
    });
}

/*esperaAi('Fase 1', rand())
   .then(valor =>{
    console.log(valor);
    return esperaAi('Fase 2', rand());
   })

   .then(fase=> {
    console.log(fase);
    return esperaAi('Fase 3', rand())
   })
   
   .then(fase =>{
    console.log(fase);
    return fase
   })
   
   .then(fase=> {
    console.log('Terminamos na fase:', fase);
   })
   .catch(e=> console.log(e)); */


// async and await
//tratando erro
async function executa() {
   try { 
    const fase1 = await esperaAi('Fase 1', rand());
   console.log(fase1);

   const fase2 = await esperaAi(2, rand());
   console.log(fase2);

   const fase3 = await esperaAi('Fase 3', rand());
   console.log(fase3);

   console.log('Terminamos na fase 3', fase3)
    } catch(e) {
        console.log(e);
    }
} 
executa();

//================================================================================
function rand(min=0, max=3) {
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
        resolve(msg.toUpperCase() + ' - Passei na promise' );
        return;
        }, tempo);
    });
}

/*esperaAi('Fase 1', rand())
   .then(valor =>{
    console.log(valor);
    return esperaAi('Fase 2', rand());
   })

   .then(fase=> {
    console.log(fase);
    return esperaAi('Fase 3', rand())
   })
   
   .then(fase =>{
    console.log(fase);
    return fase
   })
   
   .then(fase=> {
    console.log('Terminamos na fase:', fase);
   })
   .catch(e=> console.log(e)); */


// async and await
//tratando erro
async function executa() {
   try { 
    const fase1 = await esperaAi('Fase 1', rand());
   console.log(fase1);

   setTimeout(function(){
    console.log('Essa promise estava pendente', fase1);
   },1100);

   const fase2 = await esperaAi(2, rand());
   console.log(fase2);

   const fase3 = await esperaAi('Fase 3', rand());
   console.log(fase3);

   console.log('Terminamos na fase 3', fase3)
    } catch(e) {
        console.log(e);
    }
} 
executa();

/*async permite que você a palavra await dentro de uma função para
esperar uma promise ser finalizada 
Promise possuem tres estados
- Pendente: está sendo executada mas não retornou o valor.
- fullfield - sucesso=resolvida
- Rejected
*/
